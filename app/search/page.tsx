import Loader from '@/components/Loader'
import MovieCardList from '@/components/MovieCardList'
import SearchForm from '@/components/SearchForm'
import SearchPager from '@/components/SearchPager'
import SearchResultsInfo from '@/components/SearchResultsInfo'
import { searchMovies } from '@/utilities/searchMovies'
import { Suspense } from 'react'

// export const dynamic = 'force-dynamic'

export default async function SearchPage({ searchParams }) {
  const query = searchParams?.title || 'star'
  const currentPage = Number(searchParams?.page) || 1;

  const [movies, resultCount, pageCount] = await searchMovies({ query, currentPage })

  // console.log(movies.Search)

  return (
    <div className="w-full max-w-screen-2xl px-5 mx-auto my-10 min-h-[calc(100dvh-68px-52px-5rem)]">
      <h1 className="text-5xl font-bold mb-5">Search movies</h1>
      <SearchForm />
      <SearchResultsInfo query={query} resultCount={resultCount} />
      <Suspense key={query + currentPage.toString()} fallback={<Loader />}>
        <MovieCardList movies={movies} />
      </Suspense>
      <SearchPager pageCount={pageCount} />
    </div>
  )
}
