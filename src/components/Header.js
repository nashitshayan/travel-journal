import React from 'react';
import images from '../importImages';
function Header() {
	return (
		<header className='header'>
			<img
				src={images['header--logo.svg']}
				alt='earthlogo'
				className='header--logo'
			/>
			<span className='header--title'>my travel journal.</span>
		</header>
	);
}

export default Header;
