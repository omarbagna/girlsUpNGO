import React from 'react';
import {
	CustomMap,
	DefaultCard,
	MainTitle,
	Section,
	SubTitle,
} from '../../../components';

const GirlState = () => {
	return (
		<Section>
			<SubTitle text="STATE OF GIRLS" />
			<MainTitle text="There is no country in the world where women are equal" />

			<div className="relative w-full flex flex-col-reverse items-center justify-center md:flex-row md:justify-end md:items-end">
				<div className="w-fit md:absolute md:z-10 md:left-0 md:top-10 xl:top-40">
					<DefaultCard />
				</div>
				<CustomMap />
			</div>
		</Section>
	);
};

export default GirlState;
