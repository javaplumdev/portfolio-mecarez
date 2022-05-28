import { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { ContextVar } from '../Context/ContextProvider';

function Menu() {
	const { cursorVariant, cursorVariants } = useContext(ContextVar);
	const { animateMenu, listMenu } = useContext(ContextVar);

	return (
		<>
			<motion.div
				variants={cursorVariants}
				animate={cursorVariant}
				className="cursorWhite"
			></motion.div>
			<motion.div
				variants={animateMenu}
				initial="initial"
				animate="animate"
				className="menu text-light"
			>
				<motion.h3 variants={listMenu} className="links display-1 fw-bold">
					Works
				</motion.h3>
				<motion.h3 variants={listMenu} className="links display-1 fw-bold">
					About
				</motion.h3>
				<motion.h3 variants={listMenu} className="links display-1 fw-bold">
					Contact
				</motion.h3>
				<motion.h3 variants={listMenu} className="links display-1 fw-bold">
					Blog
				</motion.h3>
			</motion.div>
		</>
	);
}

export default Menu;
