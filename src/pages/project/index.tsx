import React, { FC, useEffect, useState, useRef } from 'react';
import { GET_USER_INFO } from '@/api/api';
import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Space, Button } from 'antd';
import type { InputRef } from 'antd';
import styles from './index.module.less';

const Project: FC = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem('ST_USER_DATA')) {
            getUserInfo();
        }
    }, []);

    const getUserInfo = async () => {
        const { code, data } = await GET_USER_INFO();
        if (code === 1) {
            localStorage.setItem('ST_USER_DATA', JSON.stringify(data));
        }
    };

    const addProject = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        e.preventDefault();
    };

    return (
        <div className={styles.project_main}>
            <div className={styles.top_filter}>
                <Select
                    style={{ width: 300 }}
                    placeholder="请新建项目"
                    dropdownRender={(menu) => (
                        <>
                            {menu}
                            <Divider style={{ margin: '8px 0' }} />
                            <Space style={{ padding: '0 8px 4px' }}>
                                <Button type="text" icon={<PlusOutlined />} onClick={addProject}>
                                    新建项目
                                </Button>
                            </Space>
                        </>
                    )}
                    options={items.map((item) => ({ label: item, value: item }))}
                />
            </div>
        </div>
    );
};

export default Project;