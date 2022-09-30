import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

// Components
import SearchInput from './SearchInput'

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false)

  const scroll = useCallback(() => {
    if (window.scrollY > 200) {
      setHasScrolled(true)
    } else {
      setHasScrolled(false)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener('scroll', scroll)
    }
    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [scroll])

  return (
    <div className={`flex flex-col md:flex-row gap-2 items-center justify-between p-4 z-[100] w-full fixed duration-1000 top-0 ${hasScrolled ? 'bg-brand-900' : 'bg-transparent gradient-transparency'}`}>

      <Link href='/'>
        <h1 className='text-red-600 text-2xl md:text-3xl cursor-pointer'>filmClu 2.0</h1>
      </Link>
      <SearchInput />
        
    </div>

  )
};

export default Header;