import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div className="d-flex justify-content-between align-items-center p-3">
			<p className="fw-bold fs-4">CM JR.</p>
			<Link to="/menu">Menu</Link>
		</div>
	);
}

export default Navbar;
