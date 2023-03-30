import React, { FC } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router';

const AddProjectBtn: FC = () => {
    const navigate = useNavigate();

    const addProject = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        navigate('/st/mange/add');
    };

    return (
        <Button type="primary" onClick={addProject}>创建项目</Button>
    );
};

export default AddProjectBtn;