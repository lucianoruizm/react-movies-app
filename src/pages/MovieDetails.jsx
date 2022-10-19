import movie from "./movie.json";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
    const imageUrl = "http://image.tmdb.org/t/p/w500" + movie.poster_path;
    return ( 
      <div className={styles.detailsContainer}>
        <img src={imageUrl} alt={movie.title} />
        <div>
          <p><strong>Title</strong>: {movie.title}</p>
          <p><strong>Genres</strong>: {movie.genres.map(genre => genre.name).join(", ")}</p>
          <p><strong>Description</strong>: {movie.overview}</p>
        </div>
      </div>
    )
}