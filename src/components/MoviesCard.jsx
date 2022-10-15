
export function MoviesCard ({ movie }) {
    const imageUrl = "http://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <li>
            <img src={imageUrl} alt={movie.title} />
            <div className="movie-title">{movie.title}</div>
        </li>
    );
}