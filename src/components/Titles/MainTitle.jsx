import React from 'react';

const MainTitle = ({ text, color }) => {
	return (
		<div>
			<h1
				className={
					color === 'hero'
						? 'text-center md:text-left capitalize font-medium text-5xl lg:text-6xl xl:w-3/4'
						: 'text-center text-black md:text-left capitalize font-medium text-5xl lg:text-6xl'
				}>
				{text}
			</h1>
		</div>
	);
};

export default MainTitle;
