import React, { FC, useState } from 'react';
import SelectProject from './components/SelectProject';
import styles from './index.module.less';

const Project: FC = () => {

    return (
        <div className={styles.project_main}>
            <div className={styles.top_filter}>
                <SelectProject />
            </div>
            <div className={styles.main_view}>
                
            </div>
        </div>
    );
};

export default Project;