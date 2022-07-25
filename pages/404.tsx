import Image from 'next/image';

const NotFound = () => {
	return (
		<div className='max-w-screen-lg mx-auto flex items-center justify-center p-10'>
			<div>
				<Image
					className='mx-auto'
					src='/static/images/404.gif'
					alt='Page not found'
					width={680}
					height={680}
				/>
			</div>
		</div>
	);
};

export default NotFound;
