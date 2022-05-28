import React, { useContext } from 'react';
import MotionCircles from './MotionCircles';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';
import { ContextVar } from '../Context/ContextProvider';

function LandingPage() {
	const { textEnter, textLeave, cursorVariant, cursorVariants } =
		useContext(ContextVar);

	return (
		<div className="landingPage">
			<motion.div
				variants={cursorVariants}
				animate={cursorVariant}
				className="cursor"
			></motion.div>
			<div className="banner p-5 text-center">
				<div>
					<h1
						onMouseEnter={textEnter}
						onMouseLeave={textLeave}
						className="display-3 fw-bold"
					>
						Passionate to build a user-<br></br>friendly interfaces.
					</h1>

					<p className="lead">
						Hi. <b>I’m Charlito Mecarez Jr.</b> Aspiring frontend developer.
					</p>
				</div>
				<div className="circle-container">
					<MotionCircles />
				</div>
			</div>
			<div
				onMouseEnter={textEnter}
				onMouseLeave={textLeave}
				className="banner-bottom"
			>
				<Marquee speed={100} gradient={false}>
					<h1 className="display-3 fw-bold">
						CREATIVE FRONTEND DEVELOPER / UI DESIGNER{' '}
					</h1>
				</Marquee>
				<Marquee direction="right" speed={100} gradient={false}>
					<h1 className="display-3 fw-bold">
						CREATIVE FRONTEND DEVELOPER / UI DESIGNER{' '}
					</h1>
				</Marquee>
				<Marquee gradient={false}>
					<h1 className="display-1 fw-bold" speed={100}>
						CREATIVE FRONTEND DEVELOPER / UI DESIGNER{' '}
					</h1>
				</Marquee>
			</div>
			<div className="scroll-down-container">
				<div className="scroll-down">
					<div className="mouse"></div>
					<motion.div
						initial={{ y: -25 }}
						animate={{ y: 0, transition: { repeat: Infinity, duration: 1.5 } }}
						className="wheel"
					></motion.div>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
