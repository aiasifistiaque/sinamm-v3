import React from 'react';
import Spinner from '../spinner/Spinner';

const PageLoader = () => {
	return (
		<div className='min-h-screen w-full flex justify-center items-center'>
			<Spinner />
		</div>
	);
};

export default PageLoader;
