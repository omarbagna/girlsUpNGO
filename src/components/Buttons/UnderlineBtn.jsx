import React from 'react';

const UnderlineBtn = ({ text }) => {
	return (
		<div className="group cursor-pointer">
			<p className="uppercase font-medium text-sm">{text}</p>
			<div className="transition-all duration-150 ease-in w-full h-[2px] bg-pink-500 group-hover:bg-pink-300" />
		</div>
	);
};

export default UnderlineBtn;
