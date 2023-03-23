import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import LeftMenu from './components/LeftMenu';

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
		// 这里不用 Layout 组件原因是切换页面时样式会先错乱然后在正常显示，造成页面闪屏效果
		<section className="container">
			<Sider trigger={null} width={220} theme="dark">
				<LeftMenu />
			</Sider>
			<Layout>
				<Content>
					<Outlet></Outlet>
				</Content>
			</Layout>
		</section>
	);
};

export default LayoutIndex;
