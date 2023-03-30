import React, { FC, useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ADD_PROJECT } from '@/api/api';

const AddForm: FC = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
	const [loading, setLoading] = useState<boolean>(false);

    const onFinish = async (projectForm: any) => {
		console.log(projectForm);
	};

	const onFinishFailed = (errorInfo: any) => {
		setLoading(false);
		message.success(`创建失败：${errorInfo}`);
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
				<Input autoComplete="" placeholder="请输入手机号" />
			</Form.Item>
			<Form.Item name="pwd" rules={[{ required: true, message: '请输入密码' }]}>
				<Input.Password autoComplete="new-password" placeholder="密码：888888" />
			</Form.Item>
			<Form.Item className="login-btn">
				<Button
					onClick={() => {
						form.resetFields();
					}}
				>
					取消
				</Button>
				<Button type="primary" htmlType="submit" loading={loading}>
					创建项目
				</Button>
			</Form.Item>
		</Form>
    );
};

export default AddForm;