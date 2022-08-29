import { GetStaticPaths, GetStaticProps } from 'next';
import { PopularMoviesResponseType } from '../../types';

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const token = 'ae36b36c564d4502c5eb6f8aaa735f28';
	const url = `https://api.themoviedb.org/3/movie/popular?api_key=${token}&language=en-US&page=1`;
	console.log(params, 'ss');

	const res = await fetch(url);
	const { results }: PopularMoviesResponseType = await res.json();
	// const imgPath = 'https://image.tmdb.org/t/p/w500/{id}';
	// TODO : make an call to fetch the movie details based on the params.id
	return {
		props: {
			movies: results,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const token = 'ae36b36c564d4502c5eb6f8aaa735f28';
	const url = `https://api.themoviedb.org/3/movie/popular?api_key=${token}&language=en-US&page=1`;

	const res = await fetch(url);
	const { results }: PopularMoviesResponseType = await res.json();
	const paths = results.map((m) => `/movies/${m.id.toString()}`);
	return { paths, fallback: false };
};

const Movie = () => {
	return <div>Movie</div>;
};

export default Movie;
