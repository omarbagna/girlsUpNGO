import React from 'react';
import { LeaderCycle, Quote, WeDo } from '../../../assets';
import { MainTitle, PrimaryBtn, Section, SubTitle } from '../../../components';

const HowWeWork = () => {
	return (
		<div className="relative mb-60 md:mb-[30rem] lg:mb-[40rem] xl:mb-[52rem]">
			<Section>
				<SubTitle text="how we work" />

				<div className="flex flex-col gap-10 md:flex-row">
					<img
						src={LeaderCycle}
						alt="leader cycle"
						className="object-contain h-72 md:h-80 lg:h-96"
					/>
					<div className="flex flex-col gap-8 justify-center items-center">
						<MainTitle text="Young leaders start here" />

						<p className="text-center">
							Girl Up guides and champions girls along their journey from leader
							to changemaker with specialized programming on global gender
							issues and in organizing, advocacy, fundraising, and
							communication.
						</p>

						<PrimaryBtn text="get started" color="pink" />
					</div>
				</div>

				<div className="relative flex flex-col py-6 lg:pb-24 z-[-5] bg-white rounded-full">
					<div className="flex flex-col gap-6">
						<img
							className="object-contain rotate-180 h-8 md:h-10"
							src={Quote}
							alt="quote"
						/>
						<p className="text-center px-10 md:px-32 lg:px-60 xl:px-80 font-medium lg:text-2xl">
							I never thought that I would get an opportunity like this: to be
							surrounded by so many amazing girls who are just as passionate
							about social justice issues as I am.
						</p>
						<img
							className="object-contain h-8 md:h-10"
							src={Quote}
							alt="quote"
						/>

						<span className="text-pink-500 uppercase font-medium text-sm md:text-base text-center px-10">
							FATIMATA CHAM, 2018-2019 TEEN ADVISOR
						</span>
					</div>
				</div>
			</Section>
			<img
				className="object-contain z-[-10] w-full absolute -bottom-60 md:-bottom-[30rem] lg:-bottom-[40rem] xl:-bottom-[52rem]"
				src={WeDo}
				alt="bottom"
			/>
		</div>
	);
};

export default HowWeWork;
