import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BASE_URL } from '../tokens/base-url.token';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { Actor } from '../models/actor.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly http = inject(HttpClient);
  readonly baseUrl = inject(BASE_URL);  

  getAllMovies(): Observable<Movie[]> {
    const url = `${this.baseUrl}/movies`;
    return this.http.get<Movie[]>(url);
  }

  getMovieById(movieId: number): Observable<Movie> {
    const url = `${this.baseUrl}/movies/${movieId}`;
    return this.http.get<Movie>(url);
  }

  getAllActors(): Observable<Actor[]> {
    const url = `${this.baseUrl}/actors`;
    return this.http.get<Actor[]>(url);
  }

  getActorByName(actorName: string): Observable<Actor> {
    const url = `${this.baseUrl}/actors/${actorName}`;
    return this.http.get<Actor>(url);
  }

  getAllMoviesByActor(actorName: string): Observable<Movie[]>{
    const url = `${this.baseUrl}/movies?cast_like=${actorName}`;
    return this.http.get<Movie[]>(url);
  }
}
