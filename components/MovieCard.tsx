import Link from 'next/link'
import Image from 'next/image'

const MovieCard = ({ movie }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">

      <figure>
        {movie.Poster !== 'N/A' &&
          <Image
            src={movie.Poster}
            width={100}
            height={75}
            alt="Movie poster"
          />
        }
      </figure>

      <div className="card-body">
        <h2 className="card-title">{movie.Title}</h2>
        <p>{movie.Year}</p>
        <div className="card-actions justify-start">
          <Link className='btn btn-primary' href={{ pathname: `/movie/${movie.imdbID}` }}>More info</Link>
        </div>
      </div>
      
    </div>
  )
}

export default MovieCard