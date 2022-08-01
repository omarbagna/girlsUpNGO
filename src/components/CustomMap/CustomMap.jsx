import React from 'react';
import { WorldMap } from '../../assets';
import { useStateContext } from '../../context/StateContext';
import MapPin from './MapPin';

const CustomMap = () => {
	const {
		pinOne,
		setPinOne,
		pinTwo,
		setPinTwo,
		pinThree,
		setPinThree,
		pinFour,
		setPinFour,
		pinFive,
		setPinFive,
		pinSix,
		setPinSix,
	} = useStateContext();

	const activate = (pin) => {
		switch (pin) {
			case 1:
				setPinOne(true);
				setPinTwo(false);
				setPinThree(false);
				setPinFour(false);
				setPinFive(false);
				setPinSix(false);
				break;
			case 2:
				setPinOne(false);
				setPinTwo(true);
				setPinThree(false);
				setPinFour(false);
				setPinFive(false);
				setPinSix(false);
				break;
			case 3:
				setPinOne(false);
				setPinTwo(false);
				setPinThree(true);
				setPinFour(false);
				setPinFive(false);
				setPinSix(false);
				break;
			case 4:
				setPinOne(false);
				setPinTwo(false);
				setPinThree(false);
				setPinFour(true);
				setPinFive(false);
				setPinSix(false);
				break;
			case 5:
				setPinOne(false);
				setPinTwo(false);
				setPinThree(false);
				setPinFour(false);
				setPinFive(true);
				setPinSix(false);
				break;
			case 6:
				setPinOne(false);
				setPinTwo(false);
				setPinThree(false);
				setPinFour(false);
				setPinFive(false);
				setPinSix(true);
				break;

			default:
				break;
		}
	};

	return (
		<div className="relative w-[375px] md:w-4/5 xl:w-[1024px]">
			<div
				onClick={() => activate(1)}
				className="w-fit absolute bottom-32 left-28 md:bottom-44 md:left-44 lg:bottom-52 lg:left-56 xl:bottom-72 xl:left-80">
				<MapPin active={pinOne} />
			</div>
			<div
				onClick={() => activate(2)}
				className="w-fit absolute top-12 left-16 md:top-24 md:left-32 lg:top-32 lg:left-40 xl:top-52 xl:left-52">
				<MapPin active={pinTwo} />
			</div>
			<div
				onClick={() => activate(3)}
				className="w-fit absolute top-8 left-44 md:top-20 md:left-64 lg:top-28 lg:left-[22rem] xl:top-48 xl:left-[31rem]">
				<MapPin active={pinThree} />
			</div>
			<div
				onClick={() => activate(4)}
				className="w-fit absolute bottom-36 left-52 md:bottom-48 md:left-[19rem] lg:bottom-60 lg:left-[25rem] xl:bottom-80 xl:left-[37rem]">
				<MapPin active={pinFour} />
			</div>
			<div
				onClick={() => activate(5)}
				className="w-fit absolute bottom-28 right-6 md:bottom-40 md:right-10 lg:bottom-48 lg:right-16 xl:bottom-60 xl:right-24">
				<MapPin active={pinFive} />
			</div>
			<div
				onClick={() => activate(6)}
				className="w-fit absolute top-12 right-12 md:top-20 md:right-20 lg:top-32 lg:right-28 xl:top-52 xl:right-48">
				<MapPin active={pinSix} />
			</div>
			<img className="z-[-5]" src={WorldMap} alt="map" />
		</div>
	);
};

export default CustomMap;
