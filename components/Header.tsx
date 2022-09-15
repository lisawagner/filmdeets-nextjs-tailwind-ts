import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollYPosition } from '../utils/useScrollPosition';
// Components
import SearchInput from './SearchInput'

type Props = {
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ setQuery }: Props) => {
  const [hasScrolled, setHasScrolled] = useState(false)

  const scroll = () => {
    if (window.scrollY > 200) {
      setHasScrolled(true)
    } else {
      setHasScrolled(false)
    }
  }

  // console.log(hasScrolled);
  
  // blue + white "good tron colors"
  // red/orange/yellow "bad tron/sith" colors

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener('scroll', scroll)
    }
    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [scroll])

  return (
    <div className={`flex flex-col md:flex-row gap-2 items-center justify-between p-4 z-[100] w-full fixed duration-1000 ${hasScrolled ? 'bg-zinc-900' : 'bg-transparent gradient-transparency'}`}>
      <Link href='/'>
        <h1 className='text-red-600 text-2xl md:text-3xl cursor-pointer'>filmClu 2.0</h1>
      </Link>
      <div>
      {/* if no query, don't show the search bar */}
      {setQuery ? (
        <div>
          <SearchInput setQuery={setQuery} />
        </div>
      ) : null}
      </div>
    </div>
    // <div className={`sticky flex top-0 z-40 w-full h-24 duration-1000  ${hasScrolled ? 'bg-zinc-900' : 'bg-transparent gradient-transparency'}`}>
    //   <div className='flex justify-between w-full h-full max-w-7xl m-auto px-4'>
    //     <Link href='/'>
    //       <div className='flex items-center cursor-pointer'>
    //         <div className='invisible md:visible'>
    //           <Image width='150' height='50' src='/images/rmdb-logo.svg' alt='rmdb-logo' />
    //         </div>
    //         <div className='absolute md:invisible pt-2'>
    //           <Image height='42' width='42' src='/images/rmdb-logo-small.svg' alt='rmdb-logo-small' />
    //         </div>
    //       </div>
    //     </Link>
        // {/* if no query, don't show the search bar */}
        // {setQuery ? (
        //   <div className="relative flex items-center">
        //     <Search setQuery={setQuery} />
        //   </div>
        // ) : null}

    //   </div>
    // </div>
  )
};

export default Header;