import React from 'react';
import { AfricanGirl } from '../../assets';
import UnderlineBtn from '../Buttons/UnderlineBtn';

const DefaultCard = () => {
	return (
		<div className="w-full md:w-64 lg:w-72 flex flex-col gap-4 items-start px-8">
			<h2 className="font-medium capitalize">South America</h2>
			<div className="overflow-hidden rounded-md shadow-lg w-full h-96 md:h-72">
				<img src={AfricanGirl} alt="cover" className="object-cover w-full" />
				<div className="px-5 py-10 md:py-5 flex flex-col gap-8 bg-white">
					<p>Women only make 30% of government officials in South America</p>
					<div className="w-fit">
						<UnderlineBtn text="read more" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DefaultCard;
