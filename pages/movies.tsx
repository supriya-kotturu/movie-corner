import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { PopularMoviesResponseType, PopularMoviesResultType } from '../types';

const Movies: NextPage<{ movies: PopularMoviesResultType[] }> = ({
	movies,
}) => {
	return (
		<div>
			{movies.map((movie: PopularMoviesResultType) => (
				<div key={movie.id}>
					{movie.title}
					<Image
						src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
						alt={movie.title}
						width={250}
						height={320}
					/>
				</div>
			))}
		</div>
	);
};

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

export default Movies;
