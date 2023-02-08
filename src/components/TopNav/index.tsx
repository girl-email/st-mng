import React, { FC, useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router';
import styles from './index.module.less';

const items: MenuProps['items'] = [
    {
        label: '首页',
        key: 'home',
    },
    {
        label: '项目',
        key: 'project'
    }
];

const TopNav: FC = () => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState<string>('project');

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
        navigate(`/st/${e.key}`);
    };

    return (
        <div className={styles.top_menu}>
            <div className={styles.st_logo}>闪调</div>
            <Menu onClick={handleMenuClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </div>
    );
};

export default TopNav;