import { getMovie } from '@/utilities/getMovie'

export default async function MoviePage({ params }) {
  const movie = await getMovie('tt2527336')

  return (
    <div>
      <h1>Movie by ID: {params.id}</h1>
      <h2>{movie.Title} (movie.Year)</h2>
    </div>
  )
}