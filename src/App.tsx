import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Breadcrumb from './components/Atoms/Breadcrumb/Breadcrumb';


import './App.css';

function App() {
  return (
		<div className='App'>
			<Breadcrumb
				routes={[
					{ URL: '/', text: 'Home' },
					{ URL: '/about', text: 'About' },
					{ URL: '/projects', text: 'Projects' },
				]}
			/>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
			</Routes>
		</div>
	);
}

export default App;
