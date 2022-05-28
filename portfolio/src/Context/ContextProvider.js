import { createContext, useEffect, useState } from 'react';

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

	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	});

	const [cursorVariant, setCursorVariant] = useState('default');

	useEffect(() => {
		function mouseMove(e) {
			setMousePosition({
				x: e.clientX,
				y: e.clientY,
			});
		}

		window.addEventListener('mousemove', mouseMove);

		return () => {
			window.removeEventListener('mousemove', mouseMove);
		};
	}, []);

	const cursorVariants = {
		default: {
			x: mousePosition.x - 16,
			y: mousePosition.y - 16,
		},
		textHover: {
			height: 150,
			width: 150,
			x: mousePosition.x - 75,
			y: mousePosition.y - 75,
			backgroundColor: '#fff',
			mixBlendMode: 'difference',
		},
	};

	const textEnter = () => setCursorVariant('textHover');
	const textLeave = () => setCursorVariant('default');

	return (
		<ContextVar.Provider
			value={{
				animateMenu,
				listMenu,
				textEnter,
				textLeave,
				cursorVariants,
				cursorVariant,
			}}
		>
			{children}
		</ContextVar.Provider>
	);
}
