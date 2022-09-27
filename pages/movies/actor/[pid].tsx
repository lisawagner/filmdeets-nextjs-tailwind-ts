import Image from 'next/image';
import { useRouter } from 'next/router'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { peopleUrl, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../../config'
import { basicFetch } from '../../../api';
import { Artist } from '../../../types/Artist'

type TProps = {
  artist: Artist
  // credits: string
  // profileImg: string
  // name: string
}

const Actor: NextPage<TProps> = ({ artist }) => {
  const router = useRouter()
  // pid = page id
  const { pid } = router.query

  return (
    <div className='relative w-full h-screen animate-fadeIn'>
      <Image
        priority={true}
        placeholder='blur'
        blurDataURL='/images/placeholder.png'
        // width={780}
        // height={1170}
        objectFit='cover'
        objectPosition='center'
        layout='fill'
        src={artist.profile_path ? IMAGE_BASE_URL + POSTER_SIZE + artist.profile_path : '/images/baby-yoda-md.png'}
        alt='movie poster background'
      />
      <div className='absolute top-0 right-0 bottom-0 left-0 bg-brand-900 bg-opacity-40'></div>
      <div className='absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-[#010404] via-transparent to-transparent'></div>
      <div className='absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-[#010404] via-transparent to-transparent'></div>

      <div className='absolute w-full top-[70%] p-4 md:p-8'>
        {/* <h1 className='text-white font-bold text-7xl z-30'>{pid}</h1> */}
        <h2 className='text-white font-bold text-5xl sm:text-7xl mb-8'>{artist.name}</h2>
        <p className='text-gray-200 text-base sm:text-lg italic whitespace-pre-line'>
          {artist.biography && (
            artist.biography
          )}
          {!artist.biography && (
            `Biography currently unavailable for ${artist.name}`
          )}
        </p>
        {/* <p className=' text-gray-200 italic'>{artist.biography}</p> */}
      </div>


    </div>
  )
}
export default Actor

// to create static pages on client side
export const getStaticProps: GetStaticProps = async context => {
  const id = context.params?.pid as string;

  const artistEndpoint: string = peopleUrl(id)
  const artist = await basicFetch<Artist>(artistEndpoint)
  // const movieEndpoint: string = movieUrl(id);
  // const creditsEndpoint: string = creditsUrl(id);

  // const movie = await basicFetch<Movie>(movieEndpoint);
  // const credits = await basicFetch<Credits>(creditsEndpoint);

  return {
    props: {
      artist,
    },
    revalidate: 60 * 60 * 24 // Re-build page every 24 hours
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  };
};