import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import SelectLists from './components/SelectLists';
import Breadcrumb from './components/Atoms/Breadcrumb/Breadcrumb';


import './App.css';

function App() {
  return (
		<div className='App'>
			<Breadcrumb
				routes={[
					{ URL: '/', text: 'Home' },
					{ URL: '/about', text: 'About' },
					{ URL: '/select', text: 'Select' },
				]}
			/>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/select' element={<SelectLists />} />
			</Routes>
		</div>
	);
}

export default App;
