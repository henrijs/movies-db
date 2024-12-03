import MovieCard from './MovieCard'

const MovieCardList = ({ movies }) => {
  return movies ? (
    <div>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
    </div>

  ) : ('')
}

export default MovieCardList