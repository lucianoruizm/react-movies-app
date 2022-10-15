import styles from './MoviesCard.module.css';

export function MoviesCard ({ movie }) {
    const imageUrl = "http://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <li className={styles.movieCard}>
            <img 
              width={230}
              height={345}
              className={styles.movieImage} 
              src={imageUrl} 
              alt={movie.title} />
            <div>{movie.title}</div>
        </li>
    );
}