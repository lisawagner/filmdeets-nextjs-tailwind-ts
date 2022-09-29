import Link from 'next/link'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import {
  movieUrl,
  creditsUrl,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from '../../config';
import { basicFetch } from '../../api/fetchFunctions';
import { MovieDetails, GridCard, GridContainer } from '../../components';
import { Movie, Credits, Crew, Cast } from '../../types/Movie'

type TProps = {
  movie: Movie;
  directors: Crew[];
  cast: Cast[];
};

const Movie: NextPage<TProps> = ({ movie, cast, directors }) => {

  return (
    <main>
      {/* <Breadcrumb title={movie.original_title} /> */}
      <MovieDetails
        // thumbUrl={movie.posterPath ? IMAGE_BASE_URL + POSTER_SIZE + movie.posterPath : '/images/baby-yoda-32.png'}
        rating={movie.vote_average}
        // rating={movie.vote_average}
        year={movie.release_date.split('-')[0]}
        genres={movie.genres}

        ////////////////////////////////////////////////////// check
        backgroundImgUrl={movie.backdrop_path
          ? IMAGE_BASE_URL + BACKDROP_SIZE + movie.backdrop_path
          : movie.poster_path
            ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
            : '/images/baby-yoda-32.png'}

        title={movie.original_title}
        tagline={movie.tagline}
        summary={movie.overview}
        directors={directors}
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />

      <GridContainer title='Cast'>
        {cast.map(actor => (
          // <Link key={actor.id} href={`/movies/actor/${actor.id}`} passHref>
          //   <a>
            <GridCard
              key={actor.id}
              itemId={actor.id}
              imgUrl={actor.profile_path ? IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path : '/images/baby-yoda-32.png'}
              title={actor.name}
              subtitle={actor.character}
              routeUrl='/actor'
            />
        ))}
      </GridContainer>

    </main>
  )
};

export default Movie;

// to create static pages on client side
export const getStaticProps: GetStaticProps = async context => {
  const id = context.params?.id as string;

  const movieEndpoint: string = movieUrl(id);
  const creditsEndpoint: string = creditsUrl(id);

  const movie = await basicFetch<Movie>(movieEndpoint);
  const credits = await basicFetch<Credits>(creditsEndpoint);

  const directors = credits.crew.filter(member => member.job === 'Director');

  return {
    props: {
      movie,
      directors,
      cast: credits.cast
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