import React from 'react';
import { CustomMap, MainTitle, Section, SubTitle } from '../../../components';

const GirlState = () => {
	return (
		<Section>
			<SubTitle text="STATE OF GIRLS" />
			<MainTitle text="There is no country in the world where women are equal" />

			<div className="w-full flex flex-col-reverse md:flex md:items-end">
				<CustomMap />
			</div>
		</Section>
	);
};

export default GirlState;
