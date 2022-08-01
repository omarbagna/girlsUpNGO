import React from 'react';
import { PinGrey, PinPink } from '../../assets';

const MapPin = ({ active }) => {
	return (
		<div className="group relative cursor-pointer w-8">
			<img
				className={
					active
						? 'opacity-0 absolute top-0 left-0 object-contain w-8'
						: 'transition-all duration-150 ease-in-out absolute top-0 left-0 opacity-100 group-hover:opacity-0 object-contain w-8'
				}
				src={PinGrey}
				alt="pin default"
			/>
			<img
				className={
					active
						? 'opacity-100 absolute top-0 left-0 object-contain w-8'
						: 'transition-all duration-150 ease-in-out absolute top-0 left-0 opacity-0 group-hover:opacity-100 object-contain w-8'
				}
				src={PinPink}
				alt="pin hover"
			/>
		</div>
	);
};

export default MapPin;
