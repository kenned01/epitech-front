import { useRouter } from '@uirouter/react';
import { Card, Form, Input, Button } from 'antd';
import React from 'react';
import { makeLogin } from '../../Providers/LoginProvider'
import { TransformData } from '../../Providers/TransformProvider'

const Login = () => {
    return (
        <section id="login">
            <Card className="login_card">
                <FormLogin />
            </Card>
        </section>
    );
};

const FormLogin = () => {

    const router = useRouter()

    const login = (values) => {
        makeLogin(
            TransformData(values),
            () => router.stateService.go('dashboard')
        )
    }

    return (
        <>
            <Form
                onFinish={login}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Enter
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default Login;