import Image from 'next/image';
import { PopularMoviesResultType } from '../types';

const Movie = ({ movie }: { movie: PopularMoviesResultType }) => {
	return (
		<div className='flex pb-3 m-3 flex-col '>
			<div className='img' />
			<h2>{movie.title}</h2>
			<p className='info'>{movie.overview}</p>
			<style jsx>{`
				.img {
					background-image: url(https://image.tmdb.org/t/p/w200/${movie.poster_path});
					height: 300px;
					width: 200px;
					border-radius: 8px;
					background-repeat: no-repeat;
					background-cover: stretch;
				}
				.info {
					width: 200px;
				}
			`}</style>
		</div>
	);
};

export default Movie;
