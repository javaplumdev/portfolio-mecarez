import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ContextVar } from '../Context/ContextProvider';

function Navbar() {
	const { textEnter, textLeave, cursorVariant, cursorVariants } =
		useContext(ContextVar);

	return (
		<>
			<div className="d-flex justify-content-between align-items-center p-3 container">
				<p className="fw-bold fs-4">CM JR.</p>
				<Link to="/menu">
					<p>Menu</p>
				</Link>
			</div>
		</>
	);
}

export default Navbar;
