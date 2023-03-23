import React, { FC } from 'react';
import { Layout } from 'antd';
import CustomAvatar from './components/Avatar';
import './index.less';

const LayoutHeader: FC = () => {
    const { Header } = Layout;

    return (
        <Header className='st_layout_header'>
            <div className='st_header_opt'>
                <CustomAvatar />
            </div>
        </Header>
    );
};

export default LayoutHeader;