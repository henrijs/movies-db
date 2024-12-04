'use server'

// import { delay } from "./delay"

export const getMovie = async (movieID: string) => {
  // await delay()

  let data = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDBAPI_KEY}&i=${movieID}`/*, { next: { revalidate: 36000 }}*/)

  return data.json()
}