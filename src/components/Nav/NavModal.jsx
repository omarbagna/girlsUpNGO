import React from 'react';
import {
	FaFacebookSquare,
	FaInstagram,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Close, Highlight } from '../../assets';
import { useStateContext } from '../../context/StateContext';
import PrimaryBtn from '../Buttons/PrimaryBtn';

import { navLinks } from '../data';

const NavModal = () => {
	const { setShowMenu } = useStateContext();

	return (
		<motion.nav
			className="fixed z-30 w-screen h-screen bg-black/60"
			onClick={() => setShowMenu(false)}>
			<motion.div
				onClick={(e) => {
					e.stopPropagation();
				}}
				initial={{ x: -200 }}
				animate={{ x: 0 }}
				transition={{ duration: 0.5 }}
				className="relative px-8 h-full w-full flex flex-col justify-around md:w-1/2 lg:w-96 bg-purple-900">
				<img
					src={Close}
					alt="close"
					onClick={() => setShowMenu(false)}
					className="absolute top-5 md:top-8 right-8 cursor-pointer"
				/>
				<div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
					{navLinks.map(({ id, text, link }) => (
						<div key={id} className="relative group cursor-pointer w-fit">
							<p className=" capitalize text-white text-4xl font-semibold group-hover:drop-shadow-lg">
								{text}
							</p>
							<img
								src={Highlight}
								alt="highlight"
								className="transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-40 absolute bottom-0 object-contain w-full"
							/>
						</div>
					))}
				</div>
				<div className="flex flex-col gap-10">
					<PrimaryBtn text="support" color="pink" />

					<div className="flex gap-5 text-white text-2xl">
						<FaFacebookSquare className="cursor-pointer transition-all duration-200 ease-in hover:text-pink-500" />
						<FaInstagram className="cursor-pointer transition-all duration-200 ease-in hover:text-pink-500" />
						<FaTwitter className="cursor-pointer transition-all duration-200 ease-in hover:text-pink-500" />
						<FaYoutube className="cursor-pointer transition-all duration-200 ease-in hover:text-pink-500" />
					</div>
				</div>
			</motion.div>
		</motion.nav>
	);
};

export default NavModal;
