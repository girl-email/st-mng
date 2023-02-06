import React from 'react';
import './App.less';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import router from '@/router/index';

function App() {
	return (
		<ConfigProvider locale={zhCN}>
			<RouterProvider router={router} />
		</ConfigProvider>
	);
}

export default App;
