import { getMovie } from "@/utilities/getMovie"
import { redirect } from "next/navigation"
import Image from "next/image"

export default async function MoviePage({ params }) {
  const movie = await getMovie(params.id)

  // if (!movie) redirect('/')
  // console.log(movieDetails)

  // Remove some stuff from movie object.
  const movieDetails = { ...movie }
  const keysToRemove = [
    'Title',
    'Rated',
    'Poster',
    'Ratings',
    'Type',
    'DVD',
    'Response',
    'imdbVotes',
    'imdbID',
    'imdbRating',
    'Metascore',
    'Plot',
  ]
  keysToRemove.forEach(element => {
    delete movieDetails[element]
  });

  // console.log(movieDetails)

  return (
    <div className="w-full max-w-screen-2xl px-5 mx-auto my-10 min-h-[calc(100dvh-68px-52px-5rem)]">

      <div className="w-full flex gap-10 my-10">
        <div>
          <figure>
            {movie.Poster !== 'N/A' &&
              <Image
                src={movie.Poster}
                width={300}
                height={450}
                alt="Movie poster"
              />
            }
          </figure>
        </div>
        
        <div className="grow">
          <h1 className="text-5xl font-bold mb-10">{movie.Title}</h1>

          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <tbody>
                {Object.entries(movieDetails).map(([key, value]) => (
                  <tr key={key}>
                    <th>{key}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </div>
  )
}
