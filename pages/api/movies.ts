// API Urls
import { SEARCH_BASE_URL, POPULAR_BASE_URL } from '../../config';
// Basic fetch function
import { basicFetch } from '../../api/fetchFunctions';
// Types
import type { NextApiRequest, NextApiResponse } from 'next';
// import type { Movies } from '../../api/types';
import type { Movies } from '../../types/Movie';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Movies>) {
  const { page, search } = req.query; // Grab search params

  // if user searching, use search url, else use popular url
  const endpoint = search ? `${SEARCH_BASE_URL}${search}&page=${page}` : `${POPULAR_BASE_URL}&page=${page}`;

  const data = await basicFetch<Movies>(endpoint);

  res.status(200).json(data);
}

// Notes: This is on the api side, not the client side
//        so we don't expose the secret key / API_KEY