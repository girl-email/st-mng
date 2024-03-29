import React from 'react';
import LoginForm from './components/LoginForm';
import SwitchDark from '@/components/SwitchDark';
import loginLeft from '@/assets/images/login_left.png';
import './index.less';

const Login = () => {

	const handleSPA = () => {
		window.location.href = 'http://st.mawenqing.net/api/user/login';
	};

	return (
		<div className='login-container'>
			<SwitchDark />
			<div className='login-box'>
				<div className='login-left'>
					<img src={loginLeft} alt='login' />
				</div>
				<div className='login-form'>
					<div className='login-logo'>
						<img className='login-icon' src="/icon.svg" alt='logo' />
						<span className='logo-text'>闪调</span>
					</div>
					<LoginForm />
					<div className='login-fast'>
						<i className='iconfont icon-dingding' onClick={handleSPA}></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
