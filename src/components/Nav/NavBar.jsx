import React from 'react';
import { VscMenu } from 'react-icons/vsc';
import { LogoBlack, LogoWhite } from '../../assets';
import { useStateContext } from '../../context/StateContext';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import NavModal from './NavModal';

const NavBar = () => {
	const { showMenu, setShowMenu } = useStateContext();
	return (
		<div className="w-full md:fixed top-0 left-0 flex flex-col z-10">
			{showMenu && <NavModal />}
			<div className="flex py-4 px-4  md:px-10 md:py-10 xl:px-16 items-center md:items-start justify-between">
				<div className="flex gap-4">
					<VscMenu
						onClick={() => setShowMenu(true)}
						className="transition-all duration-200 ease-in-out cursor-pointer text-black font-light md:text-white text-4xl md:text-4xl hover:rotate-90"
					/>
					<img
						src={LogoWhite}
						alt="logo"
						className="object-contain h-20 hidden md:block"
					/>
				</div>
				<div className="flex gap-4">
					<PrimaryBtn text="give" />
					<PrimaryBtn text="get involved" />
				</div>
			</div>
			<div className="flex w-full justify-center items-center md:hidden">
				<img src={LogoBlack} alt="logo" className="object-contain h-16" />
			</div>
		</div>
	);
};

export default NavBar;
