import { useState } from 'react';
import { PopularMovie } from '../types/Movie'

export function useModal() {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [activeMovie, setActiveMovie] = useState<PopularMovie>(
		{} as PopularMovie
	)

	const handleToggle = (movie: PopularMovie) => {
		setIsVisible(!isVisible);
		setActiveMovie(movie)
	}
	
	return {
		isVisible,
		setIsVisible,
		handleToggle,
		activeMovie
	};
}