import React from 'react';

const PrimaryBtn = ({ text, color }) => {
	return (
		<div>
			<div
				className={
					color === 'pink'
						? 'transition-all duration-200 ease-in w-fit cursor-pointer uppercase rounded-sm px-4 py-2 text-white text-sm font-bold bg-pink-600 hover:bg-pink-900 hover:shadow-lg'
						: 'transition-all duration-200 ease-in w-fit cursor-pointer uppercase rounded-sm px-4 py-2 text-white text-sm font-bold bg-purple-900 hover:bg-pink-900 hover:shadow-lg'
				}>
				{text}
			</div>
		</div>
	);
};

export default PrimaryBtn;
