import { GetStaticProps } from 'next';
import { Movie } from '../helpers/pages/movies';

const Movies = ({ movies }: { movies: Movie[] }) => {
	return (
		<div>
			{movies.map((movie: Movie) => (
				<div key={movie.id}>{movie.title}</div>
			))}
		</div>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const token = 'ae36b36c564d4502c5eb6f8aaa735f28';
	const url = `https://api.themoviedb.org/3/movie/popular?api_key=${token}&language=en-US&page=1`;

	const res = await fetch(url);
	const data = await res.json();
	const movies: Movie[] = [];
	const imgPath = 'https://image.tmdb.org/t/p/w500/{id}';

	data.results.map((ele: any & Movie) => {
		const movie: Movie = {
			id: ele.id,
			overview: ele?.overview,
			title: ele?.title,
			language: ele?.original_language,
			poster: ele?.poster_path,
			releaseDate: ele?.release_date,
			isAdult: ele?.adult,
			rating: ele?.vote_average,
		};
		movies.push(movie);
	});
	return {
		props: {
			movies: movies,
		},
	};
};

export default Movies;
