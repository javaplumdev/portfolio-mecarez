import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { ContextVar } from '../Context/ContextProvider';

function LoadingScreen() {
	const { animateLoading } = useContext(ContextVar);

	return (
		<motion.div
			className="loadingScreen  bg-danger"
			variants={animateLoading}
			animate="animate"
			initial="initial"
			exit="exit"
		>
			<Marquee speed={100} gradient={false}>
				<h1 className="display-1 fw-bold">
					CREATIVE FRONTEND DEVELOPER / UI DESIGNER{' '}
				</h1>
			</Marquee>
			<Marquee direction="right" speed={100} gradient={false}>
				<h1 className="display-1 fw-bold">
					CREATIVE FRONTEND DEVELOPER / UI DESIGNER{' '}
				</h1>
			</Marquee>
			<Marquee gradient={false}>
				<h1 className="display-1 fw-bold" speed={100}>
					CREATIVE FRONTEND DEVELOPER / UI DESIGNER{' '}
				</h1>
			</Marquee>
		</motion.div>
	);
}

export default LoadingScreen;
