import { movieUrl } from '../../config';
// Types
import type { NextApiRequest, NextApiResponse } from 'next';
import type { MovieDetails } from '../../types/Movie';

// export const featureData = (id: string) => {
//   const feature = movieUrl('299536')

//   return feature

// }

// export default async function handler(req: NextApiRequest, res: NextApiResponse<MovieDetails>) {
//   const heroFeat = await fetch(
//     movieUrl('299536'),
//   ).then(response => response.json());

//   res.json(heroFeat); // Send the response
//   console.log("MOVIE: ", heroFeat);
  
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse<MovieDetails>) {
  
  // try {
  //   const result = await fetch(movieUrl('299536'))
  //   if(result.status !== 200) {
  //     throw new Error ("response code no good")
  //   }
  //   const featDeets = await result.json()
  //   res.status(200).json(featDeets)
  // } catch (err) {
  //   console.error(err);
    
  // }


  const heroFeat = await fetch(
    movieUrl('299536'),
  ).then(response => response.json());

  res.json(heroFeat); // Send the response
  console.log("MOVIE: ", heroFeat);
  
}