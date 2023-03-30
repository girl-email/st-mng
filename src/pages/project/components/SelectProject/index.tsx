import React, { FC, useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Divider, Select, Space, Button } from 'antd';
import { GET_PROJECT_LIST } from '@/api/api';

const SelectProject: FC = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getProjectList();
    }, []);

    const getProjectList = async () => {
        const {code, data} = await GET_PROJECT_LIST();
        if(code === 1) {
            console.log(data);
        }
    };

    const addProject = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        e.preventDefault();
    };

    return (
        <Select
            style={{ width: 300 }}
            placeholder="请新建项目"
            // dropdownRender={(menu) => (
            //     <>
            //         {menu}
            //         <Divider style={{ margin: '8px 0' }} />
            //         <Space style={{ padding: '0 8px 4px' }}>
            //             <Button type="text" icon={<PlusOutlined />} onClick={addProject}>
            //                 新建项目
            //             </Button>
            //         </Space>
            //     </>
            // )}
            options={items.map((item) => ({ label: item, value: item }))}
        />
    );
};

export default SelectProject;