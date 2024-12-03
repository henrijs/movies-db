const MovieCardList = async ({ movies }) => {
  return movies ? (
    <div>
        {movies.map((movie) => (
          <div key={movie.imdbID}>{movie.imdbID} {movie.Title} {movie.Year}</div>
        ))}
    </div>

  ) : ('')
}

export default MovieCardList