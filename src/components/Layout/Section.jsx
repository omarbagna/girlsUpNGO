import React from 'react';

const Section = ({ children }) => {
	return (
		<div className="px-3 md:px-8 lg:px-16 py-14 lg:py-24 flex flex-col gap-6 items-center">
			{children}
		</div>
	);
};

export default Section;
