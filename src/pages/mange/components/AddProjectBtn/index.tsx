import React, { FC } from 'react';
import { Button } from 'antd';

const AddProjectBtn: FC = () => {
    const addProject = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        e.preventDefault();
    };

    return (
        <Button type="primary" onClick={addProject}>创建项目</Button>
    );
};

export default AddProjectBtn;