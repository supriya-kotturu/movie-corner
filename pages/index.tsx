import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Movie Corner</title>
				<meta
					name='description'
					content='Find your next movie for your date night!'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt omnis
				at voluptatibus? Autem expedita accusantium eveniet ab officia
				reprehenderit quos. Et veniam fuga vel at ipsam aperiam tempora eius.
				Inventore.
			</main>
		</div>
	);
};

export default Home;
