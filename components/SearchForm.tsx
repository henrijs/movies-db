'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation'

export default function SearchForm() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const updateQuery = (title: string) => {
    const params = new URLSearchParams(searchParams)

    if (title) { params.set('title', title) } else { params.delete('title') }

    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div>

      <label htmlFor="title">
        <input
          id="title"
          type="text"
          onChange={(e) => updateQuery(e.target.value)}
          defaultValue={searchParams.get('title')?.toString()}
          className="border border-black"
        />
      </label>

      {/* Probably can't use managed form here */}
      {/* <form action={search}>
        <label htmlFor="title">
          Title
          <input
            id="title"
            name="title"
            type="text"
            className="border border-black"
          />
        </label>
        <button type="submit">Search</button>
      </form> */}

    </div>
  )
}