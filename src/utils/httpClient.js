const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTc1MjI5MWRhYzA5MTJjNTA3YTIyNDcwYTgwODQ1MiIsInN1YiI6IjYzNTAxYWViYTBmMWEyMDA5MGIwMTBiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qVWGNyWzczn6-RVNYfikU2velskuWyu776JCWjKIzbk",
            "Content-Type": "application/json;charset=utf-8",
        },
    })
      .then((result) => result.json())
}