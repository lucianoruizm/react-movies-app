import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { get } from '../utils/httpClient';
import { MoviesCard } from './MoviesCard';
import styles from './MoviesGrid.module.css';
import { Spinner } from './Spinner';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

export function MoviesGrid () {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const query = useQuery();
    const search = query.get("search");
    console.log(search);

    useEffect(() => {
        const searchUrl = search 
        ? "/search/movie?query=" + search 
        : "/discover/movie";
        setIsLoading(true);
        get(searchUrl).then(data => {
            setMovies(data.results);
            setIsLoading(false);
          });
    }, [search]);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) =>
            <MoviesCard key={movie.id} movie={movie} />
            )}
        </ul>
    );
}