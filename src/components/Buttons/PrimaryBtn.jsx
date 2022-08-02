import React from 'react';

const PrimaryBtn = ({ text, color }) => {
	return (
		<div>
			<div
				className={
					color === 'pink'
						? 'transition-all duration-200 ease-in w-fit cursor-pointer uppercase rounded-sm px-4 py-2 text-white text-sm font-bold bg-pink-600 hover:bg-pink-900 hover:shadow-lg'
						: color === 'card'
						? 'transition-all duration-200 ease-in w-72 md:w-40 lg:w-48 text-center cursor-pointer uppercase rounded-md px-4 py-4 md:py-2 lg:py-3 text-white text-lg md:text-sm lg:text-base font-medium bg-purple-900 hover:bg-pink-900 hover:shadow-lg'
						: 'transition-all duration-200 ease-in w-fit cursor-pointer uppercase rounded-sm px-4 py-2 text-white text-sm font-bold bg-purple-900 hover:bg-pink-900 hover:shadow-lg'
				}>
				{text}
			</div>
		</div>
	);
};

export default PrimaryBtn;
