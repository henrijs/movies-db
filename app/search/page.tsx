import MovieCardList from '@/components/MovieCardList'
import SearchForm from '@/components/SearchForm'
import SearchPager from '@/components/SearchPager'
import { searchMovies } from '@/utilities/searchMovies'

export default async function SearchPage({ searchParams }) {
  const query = searchParams?.title || 'star'
  const currentPage = Number(searchParams?.page) || 1;

  const [movies, pageCount] = await searchMovies({ query, currentPage })

  // console.log(movies.Search)

  return (
    <div>
      <h1>Search movies</h1>
      <SearchForm />
      <MovieCardList movies={movies} />
      <SearchPager pageCount={pageCount} />
    </div>
  )
}
