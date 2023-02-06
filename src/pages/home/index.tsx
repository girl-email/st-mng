import React, { FC } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import styles from './index.module.less';

const items: MenuProps['items'] = [
    {
        label: '首页',
        key: 'home'
    },
    {
        label: '项目',
        key: 'project'
    }
];

const Home: FC = () => {

    return (
        <div className={styles.home_main}>
            <div className={styles.top_menu}>
                <div className={styles.st_logo}>闪调</div>
                <Menu mode="horizontal" items={items} />
            </div>
        </div>
    );
};

export default Home;