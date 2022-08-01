import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
	const [showMenu, setShowMenu] = useState(false);

	const [pinOne, setPinOne] = useState(false);
	const [pinTwo, setPinTwo] = useState(false);
	const [pinThree, setPinThree] = useState(false);
	const [pinFour, setPinFour] = useState(false);
	const [pinFive, setPinFive] = useState(false);
	const [pinSix, setPinSix] = useState(false);

	return (
		<Context.Provider
			value={{
				showMenu,
				setShowMenu,
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
			}}>
			{children}
		</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context);
