import React from 'react';
import { AfricanGirl } from '../../assets';
import UnderlineBtn from '../Buttons/UnderlineBtn';

const ArticleCard = ({ img, exert, author }) => {
	return (
		<div className="overflow-hidden flex rounded-md shadow-md hover:shadow-lg w-72 md:w-[30rem] lg:w-[35rem] h-44 md:h-48 lg:h-52">
			<div className="hidden lg:flex lg:w-60">
				<img src={AfricanGirl} alt="cover" className="object-cover h-full" />
			</div>

			<div className="px-5 py-3 flex flex-col justify-center gap-3 bg-white">
				<p>{exert}</p>
				<span className="capitalize font-light text-sm md:text-base text-pink-500">
					{author}
				</span>
				<div className="w-fit">
					<UnderlineBtn text="read more" />
				</div>
			</div>
		</div>
	);
};

export default ArticleCard;
