import React from 'react';
import './App.less';
import { RouterProvider } from 'react-router-dom';
import router from '@/router/index';

function App() {
	return <RouterProvider router={router} />;
}

export default App;
