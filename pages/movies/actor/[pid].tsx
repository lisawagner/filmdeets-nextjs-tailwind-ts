import Image from 'next/image';
import { useRouter } from 'next/router'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { peopleUrl, knownForUrl, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../../config'
import { basicFetch } from '../../../api';
import { Artist, ArtistDetail } from '../../../types/Artist'
import { PopularMovie } from '../../../types/Movie'
import { CarouselCard, Carousel, Modal } from '../../../components';
import { useModal } from '../../../utils'

type TProps = {
  artist: Artist
  knownForMovies: PopularMovie[]
}

const CarouselProps = {
  maxVisibleSlides: 7,
  infiniteLoop: false,
}

const Actor: NextPage<TProps> = ({ artist, knownForMovies }) => {
  const router = useRouter()
  // pid = page id
  const { pid } = router.query
  const { handleToggle, isVisible, setIsVisible, activeMovie } = useModal()

  // year={movie.release_date.split('-')[0]}
  const sortedMovies = knownForMovies.sort((a,b) => {
    return b.rating - a.rating
  })
  
  return (
    <div className='relative w-full h-screen animate-fadeIn'>
      <Image
        priority={true}
        placeholder='blur'
        blurDataURL='/images/placeholder.png'
        objectFit='cover'
        objectPosition='center'
        layout='fill'
        src={artist.profile_path ? IMAGE_BASE_URL + POSTER_SIZE + artist.profile_path : '/images/baby-yoda-md.png'}
        alt='movie poster background'
      />
      <div className='absolute top-0 right-0 bottom-0 left-0 bg-brand-900 bg-opacity-40'></div>
      <div className='absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-[#010404] via-transparent to-transparent'></div>
      <div className='absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-[#010404] via-transparent to-transparent'></div>

      <div className='absolute w-full top-[70%]'>
        <div className=' p-4 md:p-8'>
          <h2 className='text-white font-bold text-5xl sm:text-7xl mb-8'>{artist.name}</h2>
          <p className='text-gray-200 text-base sm:text-lg italic whitespace-pre-line mb-11'>
            {artist.biography && (
              artist.biography
            )}
            {!artist.biography && (
              `Biography currently unavailable for ${artist.name}`
            )}
          </p>
        </div>

        <Carousel {...CarouselProps} title='Known For' href="#" hasLink={false}>
        {sortedMovies.slice(0,10).map((movie) => (
          <CarouselCard key={movie.id} movie={movie} onClick={() => handleToggle(movie)}/>
        ))}
        </Carousel>
        {isVisible && (
          <Modal
            isVisible={isVisible}
            onClose={() => setIsVisible(!isVisible)}
            movie={activeMovie}
          />
        )}

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

  const knownForEndpoint: string = knownForUrl(id)
  const knownForResp = await basicFetch<ArtistDetail>(knownForEndpoint)

  const knownForMovies = knownForResp.cast?.map(
    (knownForFilm) => {
      return {
        id: knownForFilm.id,
        posterPath: knownForFilm.poster_path,
        backdropPath: knownForFilm.backdrop_path,
        title: knownForFilm.title || knownForFilm.original_title,
        releaseDate: knownForFilm.release_date || null,
        rating: knownForFilm.vote_average || null,
        synopsis: knownForFilm.overview,
      }
    }
  )

  return {
    props: {
      artist,
      knownForMovies,
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