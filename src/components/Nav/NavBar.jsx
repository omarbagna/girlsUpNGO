import React, { useState } from 'react';
import { VscMenu } from 'react-icons/vsc';
import { LogoBlack, LogoWhite } from '../../assets';
import { useStateContext } from '../../context/StateContext';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import NavModal from './NavModal';

const NavBar = () => {
	const { showMenu, setShowMenu } = useStateContext();
	const [navbar, setNavbar] = useState(false);

	const changeBackground = () => {
		if (window.scrollY >= 100) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener('scroll', changeBackground);

	return (
		<div
			className={
				navbar
					? 'w-full bg-pink-800/90 backdrop-blur-sm fixed top-0 left-0 flex flex-col z-50'
					: 'w-full bg-transparent fixed top-0 left-0 flex flex-col z-50'
			}>
			{showMenu && <NavModal />}
			<div
				className={
					navbar
						? 'flex py-4 px-4  md:px-10 md:py-3 xl:px-16 items-center md:items-start justify-between'
						: 'flex py-4 px-4  md:px-10 md:py-10 xl:px-16 items-center md:items-start justify-between'
				}>
				<div className="flex gap-4">
					<VscMenu
						onClick={() => setShowMenu(true)}
						className={
							navbar
								? 'transition-all duration-200 ease-in-out cursor-pointer text-white text-2xl md:text-4xl hover:rotate-90'
								: 'transition-all duration-200 ease-in-out cursor-pointer text-black font-light md:text-white text-4xl md:text-4xl hover:rotate-90'
						}
					/>
					<img
						src={LogoWhite}
						alt="logo"
						className={
							navbar
								? 'object-contain h-9 md:h-12 block'
								: 'object-contain md:h-14 lg:h-20 hidden md:block'
						}
					/>
				</div>
				<div className="flex gap-4">
					<PrimaryBtn text="give" />
					<PrimaryBtn text="get involved" />
				</div>
			</div>
			<div
				className={
					navbar
						? 'hidden'
						: 'flex w-full justify-center items-center md:hidden'
				}>
				<img src={LogoBlack} alt="logo" className="object-contain h-16" />
			</div>
		</div>
	);
};

export default NavBar;
