import React from 'react';
import { AfricanGirl } from '../../assets';
import UnderlineBtn from '../Buttons/UnderlineBtn';

const DefaultCard = () => {
	return (
		<div className="w-full md:w-64 lg:w-80 flex flex-col gap-4 items-start px-8">
			<h2 className="font-medium capitalize md:text-xl lg:text-2xl xl:text-3xl">
				South America
			</h2>
			<div className="overflow-hidden rounded-md shadow-lg w-full h-fit">
				<img src={AfricanGirl} alt="cover" className="object-cover w-full" />

				<div className="px-5 h-52 md:h-44 lg:h-52 flex flex-col justify-center gap-8 bg-white">
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
