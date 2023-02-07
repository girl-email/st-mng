import React, { FC } from 'react';
import { Outlet } from 'react-router';
import styles from './index.module.less';
import TopNav from '@/components/TopNav';

const Home: FC = () => {

    return (
        <div className={styles.home_main}>
            <TopNav />
            <div className={styles.page_view}>
                <Outlet />
            </div>
        </div>
    );
};

export default Home;