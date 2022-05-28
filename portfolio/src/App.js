import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import LandingPage from './components/LandingPage';
// Context
import { ContextFunction, ContextVar } from './Context/ContextProvider';
import { useContext } from 'react';
// Framer motion
import { motion } from 'framer-motion';

function App() {
	return (
		<ContextFunction>
			<Router>
				<div className="App">
					<Routes>
						<Route
							path="/"
							element={
								<>
									<Navbar />
									<LandingPage />
								</>
							}
						/>
						<Route path="/menu" element={<Menu />} />
					</Routes>
				</div>
			</Router>
		</ContextFunction>
	);
}

export default App;
