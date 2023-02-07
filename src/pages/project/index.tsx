import React, { FC, useEffect, Fragment } from 'react';
import { GET_USER_INFO } from '@/api/api';

const Project: FC = () => {
    console.log(123);
    
    useEffect(() => {
        if(!localStorage.getItem('ST_USER_DATA')) {
            getUserInfo();
        }
    }, []);

    const getUserInfo = async () => {
        const { code, data } = await GET_USER_INFO();
        if(code === 1) {
            localStorage.setItem('ST_USER_DATA', JSON.stringify(data));
        }
    };

    return (
        <Fragment>
            <div></div>
        </Fragment>
    );
};

export default Project;