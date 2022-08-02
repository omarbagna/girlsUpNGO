import React from 'react';
import {
	ButtonCard,
	Exert,
	MainTitle,
	Section,
	SubTitle,
} from '../../../components';

const JoinUs = () => {
	return (
		<Section>
			<SubTitle text="JOIN OUR MOVEMENT" />
			<MainTitle text="Stand with Girls" />
			<Exert text="Advocate. Organize. Fundraise. Sponsor an event. Give. Raise your voice." />

			<div className="w-full flex flex-col shrink-0 gap-8 md:shrink-0 md:flex-row ">
				<ButtonCard btnText="ways to support" />
				<ButtonCard btnText="ways to support" />
				<ButtonCard btnText="ways to support" />
			</div>

			<div className="mt-14 flex flex-col gap-8 w-full">
				<MainTitle text="Get Involved" />

				<div className="w-full flex flex-col shrink-0 gap-8 md:shrink-0 md:flex-row ">
					<ButtonCard btnText="join" />
					<ButtonCard btnText="explore" />
					<ButtonCard btnText="attend" />
				</div>
			</div>
		</Section>
	);
};

export default JoinUs;
