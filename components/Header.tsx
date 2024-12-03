import Link from 'next/link'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <Link href={'/'} className="btn btn-ghost text-xl"><strong>Movie DB</strong></Link>
        </div>
        <div className="flex-none">
          <Navigation />
        </div>
      </div>
    </header>
  )
}
