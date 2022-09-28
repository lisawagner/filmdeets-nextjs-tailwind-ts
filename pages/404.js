import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image';

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 10000)
  }, [router])

  return (
    <div className='container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center py-4 md:pt-20 xl:py-40'>
      <div className='w-full flex flex-col items-center relative z-10'>
        <h1 className='font-extrabold text-4xl text-center text-cyan-500 leading-tight mt-4 md:text-5xl'>Sorry, <br />Page Not Found</h1>
        <p className='my-3 italic text-sm text-gray-400'>Going Home in 10 seconds...</p>
        <div className='block my-8 mx-auto animate-floating'>
        <Image width='200' height='200' src='/images/baby-yoda-thumb.png' alt='baby yoda' />
        </div>
        <div className='block -m-4 bg-gray-400/25 w-36 h-3 oval-shadow animate-growing'></div>
      </div>
      <div className='my-20'>
      <Link href="/">
          <button className='transition duration-300 ease-in-out py-2 px-4  bg-transparent border border-solid  border-cyan-400 rounded text-cyan-400 focus:outline-none focus:shadow-outline hover:bg-cyan-400 hover:text-white'>Go Back Now</button>
        </Link>
        
      </div>

    </div>
  )
}

export default NotFound