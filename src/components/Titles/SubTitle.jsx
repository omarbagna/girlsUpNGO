import React from 'react';

const SubTitle = ({ text, color }) => {
	return (
		<div>
			<h3
				className={
					color === 'pink'
						? 'uppercase w-fit text-pink-500 md:text-pink-300 font-bold text-sm md:text-lg'
						: 'uppercase w-fit text-black font-bold text-sm md:text-lg'
				}>
				{text}
			</h3>
		</div>
	);
};

export default SubTitle;
