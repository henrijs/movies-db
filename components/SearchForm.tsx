'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export default function SearchForm() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const updateQuery = useDebouncedCallback((title: string) => {
    const params = new URLSearchParams(searchParams)
    // On search, reset page and update/delete query.
    params.set('page', '1')
    if (title) { params.set('title', title) } else { params.delete('title') }
    router.replace(`${pathname}?${params.toString()}`)
  }, 400)

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