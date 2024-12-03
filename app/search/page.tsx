import MovieCardList from '@/components/MovieCardList'
import SearchForm from '@/components/SearchForm'
import { searchMovies } from '@/utilities/searchMovies'

export default async function SearchPage({ searchParams }) {
  const query = searchParams?.title
  const movies = await searchMovies({ query })

  // console.log(movies.Search)

  return (
    <div>
      <h1>Search movies</h1>
      <SearchForm />

      <MovieCardList movies={movies.Search} />
    </div>
  )
}
