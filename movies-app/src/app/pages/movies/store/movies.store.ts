import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { initialMoviesSlice } from './movies.slice';
import { inject } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { exhaustMap, tap } from 'rxjs';
import { setIdle, setLoading } from './movis.helpers';

export const MoviesStore = signalStore(
  withState(initialMoviesSlice),
  withMethods((store) => {
    console.log('before');
    const dataService = inject(DataService);
    console.log('after');
    const _reload = rxMethod<void>((trigged$) =>
      trigged$.pipe(
        tap(() => patchState(store, setLoading())),
        exhaustMap(() =>
          dataService
            .getAllMovies()
            .pipe(tap((movies) => patchState(store, { movies }, setIdle())))
        )
      )
    );

    return {
      _reload,
    };
  }),
  withHooks((store) => ({
    onInit: () => {
      store._reload();
    }
  }))
);
