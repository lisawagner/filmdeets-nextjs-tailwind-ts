import { useState } from 'react';
import { SelectMovie } from '../types/Movie'

export function useModal() {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [activeMovie, setActiveMovie] = useState<SelectMovie>(
		{} as SelectMovie
	)

	const handleToggle = (movie: SelectMovie) => {
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