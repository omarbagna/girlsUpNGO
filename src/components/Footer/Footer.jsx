import React from 'react';
import { navLinks } from '../data';
import {
	FaFacebookSquare,
	FaInstagram,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa';

import { Bagna } from '../../assets';

const Footer = () => {
	return (
		<div className="w-full">
			<div className="w-full flex flex-col gap-10 md:flex-row justify-around items-center md:items-start text-white bg-purple-900 p-10">
				<div className="flex flex-col items-center gap-8">
					<p className="font-bold">Quick Links</p>
					<div className="flex flex-col items-center gap-4">
						{navLinks.map(({ id, text, link }) => (
							<p className="font-light text-sm" key={id}>
								{text}
							</p>
						))}
					</div>
				</div>

				<div className="flex flex-col items-center gap-8">
					<h1 className="font-bold">Social Links</h1>
					<div className="flex gap-5 items-center text-white text-2xl">
						<FaFacebookSquare className="cursor-pointer transition-all duration-200 ease-in hover:text-pink-500" />
						<FaInstagram className="cursor-pointer transition-all duration-200 ease-in hover:text-pink-500" />
						<FaTwitter className="cursor-pointer transition-all duration-200 ease-in hover:text-pink-500" />
						<FaYoutube className="cursor-pointer transition-all duration-200 ease-in hover:text-pink-500" />
					</div>
				</div>
			</div>
			<div className="w-full p-3 bg-slate-200 flex flex-col justify-center items-center gap-5 md:flex-row md:justify-between">
				<p className="font-extralight text-xs md:text-sm">
					Copyright Girl Up 2022
				</p>
				<a
					href="https://bagna.netlify.app"
					target="_blank"
					rel="noopener noreferrer">
					<img
						className="transition-all duration-1000 ease-in-out object-fit h-6 opacity-20 hover:opacity-90"
						src={Bagna}
						alt="bagna"
					/>
				</a>
			</div>
		</div>
	);
};

export default Footer;
