import React, {FC} from 'react';
import { Outlet } from 'react-router-dom';

const ProjectLayout: FC = () => {

    return (
        <Outlet />
    );
};

export default ProjectLayout;