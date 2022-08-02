import React from 'react';
import { HomeImage, HomeMobile } from '../../assets';
import UnderlineBtn from '../Buttons/UnderlineBtn';
import Exert from '../Titles/Exert';
import MainTitle from '../Titles/MainTitle';
import SubTitle from '../Titles/SubTitle';

const Hero = () => {
	return (
		<div className="relative w-full h-fit md:h-[60vh] lg:h-[80vh] xl:h-screen pt-36">
			<img
				className="md:hidden w-full object-contain"
				alt="background"
				src={HomeMobile}
			/>
			<img
				className="hidden md:block md:absolute md:z-[-10] md:top-0 md:left-0 md:w-full md:h-full md:object-cover xl:object-left"
				alt="background"
				src={HomeImage}
			/>
			<div className="md:bg-gradient-to-r from-black/60 via-black/50 md:absolute md:top-0 md:left-0 w-full h-full flex flex-col justify-center items-center md:items-start pt-4 px-3 md:pt-0 md:pl-10 lg:pl-16 md:text-white">
				<div className="flex flex-col justify-center items-center md:items-start gap-6 w-full md:w-1/2">
					<SubTitle text="WHAT WE DO" color="pink" />
					<MainTitle text="When girls rise, we all rise" color="hero" />
					<Exert
						text="We’re a movement to advance girls’ skills, rights, and opportunities to
				be leaders. When girls rise, we all rise."
						color="hero"
					/>
					<UnderlineBtn text="see our impact" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
