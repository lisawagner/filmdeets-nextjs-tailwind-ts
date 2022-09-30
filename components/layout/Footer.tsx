import Image from 'next/image'
import { RiGithubFill } from "react-icons/ri"

const Footer = () => {

  return (
    <div className="relative w-full flex items-center justify-between text-cyan-500 font-bold mb-24 px-20 pt-6 bg-brand-900">
      <a className='text-4xl' href='https://github.com/lisawagner' target="_blank" rel="noreferrer">
        <RiGithubFill />
      </a>
      <a href='https://www.themoviedb.org/' target="_blank" rel="noreferrer">
        <Image width='100' height='20' src='/images/tmdb.svg' alt='tmdb logo' />
      </a>
    </div>
  )
}
export default Footer