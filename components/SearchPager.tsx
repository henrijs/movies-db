'use client'
 
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
 
export default function SearchPager({ pageCount }: { pageCount: number }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1
 
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())

    return `${pathname}?${params.toString()}`
    // router.push(`${pathname}?${params.toString()}`)
  }

  return pageCount ? (
    <div className='flex justify-center mt-5'>
      <div className="join">
        {currentPage !== 1 && <Link href={createPageURL(currentPage - 1)} className="join-item btn">«</Link>}
        <span className="join-item btn btn-disabled">Page {currentPage} of {pageCount}</span>
        {currentPage !== pageCount && <Link href={createPageURL(currentPage + 1)} className="join-item btn">»</Link>}
      </div>
    </div>
  ) : ('')
}
