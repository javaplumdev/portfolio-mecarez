import { createContext } from 'react';

export const ContextVar = createContext();

export function ContextFunction({ children }) {
	const animateMenu = {
		initial: {
			x: '100%',
		},
		animate: {
			x: 0,
			transition: {
				ease: [0.6, 0.01, -0.05, 0.95],
				duration: 1,
				staggerChildren: 0.3,
				delayChildren: 0.3,
			},
		},
	};

	const listMenu = {
		initial: {
			x: '100%',
		},
		animate: {
			x: 0,
		},
	};

	return (
		<ContextVar.Provider value={{ animateMenu, listMenu }}>
			{children}
		</ContextVar.Provider>
	);
}
