import movies from '../moviesdb.json';
import { MoviesCard } from './MoviesCard';

export function MoviesGrid () {
    return (
        <ul>
            {movies.map((movie) =>
            <MoviesCard key={movie.id} movie={movie} />
            )}
        </ul>
    );
}