import { LoadState } from "../../../models/load-state.model";
import { Movie } from "../../../models/movie.model";

export interface MoviesSlice {
    readonly movies: Movie[];
    readonly loadState: LoadState;
}

export const initialMoviesSlice: MoviesSlice = {
    movies: [],
    loadState: 'idle'
};