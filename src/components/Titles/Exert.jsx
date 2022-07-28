import React from 'react';

const Exert = ({ text, color }) => {
	return (
		<div>
			<p
				className={
					color === 'hero'
						? 'text-center md:text-left font-light text-xl'
						: 'text-center text-black md:text-left font-light text-xl'
				}>
				{text}
			</p>
		</div>
	);
};

export default Exert;
