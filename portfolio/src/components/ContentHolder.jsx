import React, { useContext } from 'react';
// Components
import LandingPage from './LandingPage';
import Navbar from './Navbar';
import LoadingScreen from './LoadingScreen';
import Projects from './Projects';
// Context
import { ContextVar } from '../Context/ContextProvider';
// Framer motion
import { motion } from 'framer-motion';

function ContentHolder() {
	const { loading } = useContext(ContextVar);

	const landingPageVariant = {
		initial: {
			opacity: 0,
			y: -200,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
			},
		},
	};

	return (
		<>
			{loading ? (
				<LoadingScreen />
			) : (
				<>
					<motion.div
						variants={landingPageVariant}
						initial="initial"
						animate="animate"
					>
						<Navbar />
						<LandingPage />
						<Projects />
					</motion.div>
				</>
			)}
		</>
	);
}

export default ContentHolder;
