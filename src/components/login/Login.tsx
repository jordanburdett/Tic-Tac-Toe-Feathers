import { Form, Input, Checkbox, Button } from 'antd'
import React, { useRef } from 'react'
import { User, LoginInfo } from '../../../shared/types/authentication/UserType';

import loginUser from "../../logic/login/loginUser";
import client from "../../logic/feathersConnect";
import { FeathersError } from '@feathersjs/errors';
import { useForm } from 'antd/lib/form/Form';


type Props = {
    isLoggedIn: boolean,
    user: User,
}



const Login = (props: Props) => {

    const [form] = Form.useForm();

    const onFinish = async (loginInfo: LoginInfo) => {
        // attempt to login
        let result = await loginUser(loginInfo);

        const email = loginInfo.email;
        const password = loginInfo.password;

        client.authenticate({
            strategy: 'local',
            email,
            password,
          })
          .catch((err: FeathersError)  => {
            console.error("ERROR attempting to authenitcate", err);
            if (err.className == "not-authenticated") {
                console.log("invalid login attempt");

                // rest the form with errors
                form.resetFields();
                //form.
            }
          });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const formRef = useRef();

    

    return (
        <>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                form={form}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>

    )
}

export default Login