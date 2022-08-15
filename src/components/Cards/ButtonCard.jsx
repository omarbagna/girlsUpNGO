import React from 'react';
import { JoinFiller } from '../../assets';
import PrimaryBtn from '../Buttons/PrimaryBtn';

const ButtonCard = ({ img, btnText }) => {
	return (
		<div className="overflow-hidden rounded-md shadow-md hover:shadow-lg w-full md:w-80 xl:w-96 h-fit">
			<img src={JoinFiller} alt="cover" className="object-cover w-full" />

			<div className="px-5 h-72 md:h-64 xl:h-72 flex flex-col justify-center gap-5 xl:gap-10 bg-white">
				<h2 className="font-medium text-xl">Give</h2>
				<p>Women only make 30% of government officials in Africa</p>
				<div className="w-full flex justify-center">
					<PrimaryBtn text={btnText} color="card" />
				</div>
			</div>
		</div>
	);
};

export default ButtonCard;
