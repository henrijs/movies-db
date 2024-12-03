import Hero from '@/components/Hero'

export default async function Home() {
  let data = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDBAPI_KEY}&s=star}`)
  let movies = await data.json()
  // console.log(movies)

  return (
    <Hero />
  )
}
