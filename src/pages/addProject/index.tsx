import React, { FC } from 'react';
import AddForm from './components/ProjectForm';
import './index.less';

const AddProject: FC = () => {

    return (
        <div className="add_project_view">
            <AddForm />
        </div>
    );
};

export default AddProject;