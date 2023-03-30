import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserOutlined, LockOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { USER_LOGIN } from '@/api/api';

interface LoginForm {
	mobile: string
	pwd: string
}

const LoginForm = () => {
	const navigate = useNavigate();
	const [form] = Form.useForm();
	const [loading, setLoading] = useState<boolean>(false);

	const onFinish = async (loginForm: LoginForm) => {
		setLoading(true);
		const { code, data } = await USER_LOGIN(loginForm);
		if(code === 1) {
			setLoading(false);
			message.success('登录成功');
			localStorage.setItem('ST_USER_DATA', JSON.stringify(data));
			navigate('/st');
		}
	};

	const onFinishFailed = (errorInfo: any) => {
		setLoading(false);
		message.success(`登录失败：${errorInfo}`);
	};

	return (
		<Form
			form={form}
			name="basic"
			labelCol={{ span: 5 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			size="large"
			autoComplete="off"
		>
			<Form.Item name="mobile" rules={[{ required: true, message: '请输入手机号' }]}>
				<Input autoComplete="" placeholder="请输入手机号" prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item name="pwd" rules={[{ required: true, message: '请输入密码' }]}>
				<Input.Password autoComplete="new-password" placeholder="密码：888888" prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item className="login-btn">
				<Button
					onClick={() => {
						form.resetFields();
					}}
					icon={<CloseCircleOutlined />}
				>
					重置
				</Button>
				<Button type="primary" htmlType="submit" loading={loading} icon={<UserOutlined />}>
					登录
				</Button>
			</Form.Item>
		</Form>
	);
};
export default LoginForm;
