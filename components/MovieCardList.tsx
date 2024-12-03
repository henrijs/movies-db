import Link from 'next/link'

const MovieCardList = async ({ movies }) => {
  return movies ? (
    <div>
        {movies.map((movie) => (
          <div key={movie.imdbID}>
            <Link href={{ pathname: `/movie/${movie.imdbID}` }}>{movie.Title}</Link>
          </div>
        ))}
    </div>

  ) : ('')
}

export default MovieCardList