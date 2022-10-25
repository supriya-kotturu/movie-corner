import Image from 'next/image';
import { GetStaticProps, NextPage } from 'next';
import {
	PopularMoviesResponseType,
	PopularMoviesResultType,
} from '../../types';
import Movie from '../../components/Movie';

export const getStaticProps: GetStaticProps = async (ctx) => {
	const token = 'ae36b36c564d4502c5eb6f8aaa735f28';
	const url = `https://api.themoviedb.org/3/movie/popular?api_key=${token}&language=en-US&page=1`;

	const res = await fetch(url);
	const { results }: PopularMoviesResponseType = await res.json();
	// const imgPath = 'https://image.tmdb.org/t/p/w500/{id}';
	return {
		props: {
			movies: results,
		},
	};
};

const Movies: NextPage<{ movies: PopularMoviesResultType[] }> = ({
	movies,
}) => {
	return (
		<>
			<div className='flex flex-wrap justify-center items-start'>
				{movies.map((movie: PopularMoviesResultType) => (
					<Movie key={movie.id} movie={movie} />
				))}
			</div>
			<a href='https://storyset.com/web'>Web illustrations by Storyset</a>
		</>
	);
};

export default Movies;
