import Link from 'next/link'

export default function Hero() {
  return (
    <div className="hero bg-base-200 min-h-[calc(100dvh-68px-52px)]">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">Welcome to Movie DB!</h1>
          <p className="py-6">
            Go on! Press the button and start searching!
          </p>
          <Link href={'/search'} className="btn btn-primary">Movies DB</Link>
        </div>
      </div>
    </div>
  )
}