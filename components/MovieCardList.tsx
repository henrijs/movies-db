import MovieCard from './MovieCard'

const MovieCardList = ({ movies }) => {
  return movies ? (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
    </div>

  ) : ('')
}

export default MovieCardList