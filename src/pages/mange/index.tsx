import React, { FC } from 'react';
import AddProjectBtn from './components/AddProjectBtn';
import './index.less';

const MangeProject: FC = () => {

    return (
        <div className='mange_main'>
            <div className='mange_header'>
                <AddProjectBtn />
            </div>
        </div>
    );
};

export default MangeProject;