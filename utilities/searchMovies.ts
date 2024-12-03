'use server'

import { delay } from "./delay"

export const searchMovies = async ({ query }: { query: string; }) => {
  // await delay()

  let data = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDBAPI_KEY}&type=movie&s=${query}`)

  if (!data.ok) {
    // error
  }
  
  // revalidatePath('/movies')
  // redirect('/movies')

  return data.json()
}