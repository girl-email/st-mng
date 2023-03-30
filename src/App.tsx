import React, { Suspense } from 'react';
import './App.less';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import router from '@/router/index';
import LoadingPage from './components/Loading';

function App() {
	return (
		<ConfigProvider locale={zhCN} theme={{token: {colorPrimary: '#3073ff'}}}>
			<Suspense fallback={<LoadingPage />}>
				<RouterProvider router={router} />
			</Suspense>
		</ConfigProvider>
	);
}

export default App;
