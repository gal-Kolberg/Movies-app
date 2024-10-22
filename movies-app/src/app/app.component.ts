import { Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MoviesStore } from './pages/movies/store/movies.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly store = inject(MoviesStore);
  readonly isBusy = computed(() => this.store.loadState() === 'loading');
}
