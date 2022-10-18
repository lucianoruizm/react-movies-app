import movie from "./movie.json";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
    const imageUrl = "http://image.tmdb.org/t/p/w500" + movie.poster_path;
    return ( 
      <div className={styles.detailsContainer}>
        <img src={imageUrl} alt="movieImage" />
      </div>
    )
}