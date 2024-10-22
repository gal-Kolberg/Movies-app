import { Component, inject } from '@angular/core';
import { MoviesStore } from './store/movies.store';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MoviesStore],
})
export class MoviesComponent {
  readonly store = inject(MoviesStore);
}
