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
    <div className='mb-5'>

      <label htmlFor="title" className="input input-bordered flex items-center gap-2">
        <input
          id="title"
          type="text"
          onChange={(e) => updateQuery(e.target.value)}
          defaultValue={searchParams.get('title')?.toString()}
          className="grow"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70">
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd" />
        </svg>
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