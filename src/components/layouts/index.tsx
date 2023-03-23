import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import LeftMenu from './components/LeftMenu';
import LayoutHeader from './components/LayoutHeader';
import './index.less';

const LayoutIndex = () => {
	const { Sider, Content } = Layout;

	// 监听窗口大小变化
	const listeningWindow = () => {
		window.onresize = () => {
			return (() => {
				const screenWidth = document.body.clientWidth;
				// if (!isCollapse && screenWidth < 1200) updateCollapse(true);
				// if (!isCollapse && screenWidth > 1200) updateCollapse(false);
			})();
		};
	};

	useEffect(() => {
		listeningWindow();
	}, []);

	return (
		<section className="container">
			<Sider trigger={null} width={220} theme="dark">
				<LeftMenu />
			</Sider>
			<Layout>
				<LayoutHeader />
				<Content>
					<Outlet></Outlet>
				</Content>
			</Layout>
		</section>
	);
};

export default LayoutIndex;
