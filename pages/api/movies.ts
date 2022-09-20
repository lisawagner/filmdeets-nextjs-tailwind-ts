// API Urls
import { DISCOVER_BASE_URL } from '../../config'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Movies } from '../../types/Movie';
import { basicFetch } from '../../api';

// getMoviesByGenre
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movies>
) {
  const { page, genre } = req.query

  const endpoint = `${DISCOVER_BASE_URL}&page=${page}&with_genres=${genre}`
  const movieRes = await basicFetch<Movies>(endpoint)


  res.status(200).json(movieRes);
}