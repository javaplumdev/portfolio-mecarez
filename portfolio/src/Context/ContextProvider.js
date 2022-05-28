import { createContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const ContextVar = createContext();

const letterAni = {
	initial: { y: 400 },
	animate: {
		y: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 1,
		},
	},
};

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

	// Loading screen
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	const animateLoading = {
		initial: {
			opacity: 0,
			y: 200,
			scale: 1,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				ease: [0.6, 0.01, -0.05, 0.95],
				duration: 2,
				staggerChildren: 0.3,
				delayChildren: 0.3,
			},
			scale: 2,
		},
		exit: {
			opacity: 0,
			y: -200,
			transition: {
				ease: 'easeInOut',
				duration: 1,
			},
		},
	};

	return (
		<ContextVar.Provider
			value={{
				animateMenu,
				listMenu,
				textEnter,
				textLeave,
				cursorVariants,
				cursorVariant,
				setLoading,
				loading,
				animateLoading,
			}}
		>
			{children}
		</ContextVar.Provider>
	);
}
