import React from 'react'
import { Button, Form, Input } from 'antd'
import { UserOutlined, KeyOutlined } from '@ant-design/icons'
import './index.scss'

class Login extends React.Component {
    formRef = React.createRef()

    handleLogin = async () => {
        const form = await this.formRef.current.validateFields()
        console.log(form)
    }

    render() {
        return <div className="login">
            <div className="login-form">
                <Form ref={this.formRef}>
                    <Form.Item name="uname" rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input addonBefore={<UserOutlined />}></Input>
                    </Form.Item>
                    <Form.Item name="pwd" rules={[{ required: true, message: 'Please input your password!' }]}>
                        <Input.Password addonBefore={<KeyOutlined/>}></Input.Password>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={this.handleLogin}>Login</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    }
}

export default Login
