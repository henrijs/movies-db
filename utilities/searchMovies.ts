'use server'

import { delay } from "./delay"

export const searchMovies = async ({ query, currentPage }: { query: string; currentPage: number; }) => {
  // await delay()

  let data = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDBAPI_KEY}&type=movie&s=${query}&page=${currentPage}`)
  let movies = await data.json()

  if (!data.ok) {
    throw new Error(`API error with query ${query} on page ${currentPage}.`)
  }

  // API returns 10 movies per page, get page count.
  const pageCount = Math.ceil(Number(movies.totalResults) / 10)
  
  // revalidatePath('/search')
  // redirect('/search')

  return [ movies.Search, pageCount ]
}