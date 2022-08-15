import React from 'react';
import { ArticleCard, MainTitle, Section } from '../../../components';

import { articleData } from '../../data';

const Articles = () => {
	return (
		<Section>
			<div className="flex flex-col w-full gap-14">
				<MainTitle text="read our stories" />

				<div className="relative w-full">
					<div className="h-full absolute top-0 left-0 w-10 bg-gradient-to-r from-white" />
					<div className="h-full absolute top-0 right-0 w-10 bg-gradient-to-l from-white" />

					<div className="flex w-full overflow-x-scroll py-8 px-6 md:px-10 items-start justify-start gap-10">
						{articleData.map(({ id, img, exert, author }) => (
							<div key={id}>
								<ArticleCard img={img} exert={exert} author={author} />
							</div>
						))}
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Articles;
