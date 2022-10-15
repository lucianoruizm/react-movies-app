import movies from '../moviesdb.json';
import { MoviesCard } from './MoviesCard';
import styles from './MoviesGrid.module.css';

export function MoviesGrid () {
    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) =>
            <MoviesCard key={movie.id} movie={movie} />
            )}
        </ul>
    );
}