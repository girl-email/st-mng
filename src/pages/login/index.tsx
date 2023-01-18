import React, { FC } from 'react';
import { USER_LOGIN } from '@/api/api';
import styles from './index.module.less';

const Login: FC = () => {

    const handleLogin = async () => {
        // const { code, data } = await USER_LOGIN(null);
        window.location.href = 'http://st.mawenqing.net/api/user/login';
    };

    return (
        <div className={styles.login_main}>
            <div className={styles.login_left}>
                <div className={styles.st_logo}>
                    <span>闪调</span>
                </div>
                <div className={styles.login_box}>
                    <p>欢迎登录闪调系统</p>
                    <div className={styles.login_method_box}>
                        <i className="iconfont icon-dingding" onClick={handleLogin}></i>
                    </div>
                </div>
            </div>
            <div className={styles.login_right}></div>
        </div>
    );
};

export default Login;