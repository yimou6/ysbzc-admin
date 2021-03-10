import React from 'react'
import { Button, Form, Input, message } from 'antd'
import { UserOutlined, KeyOutlined } from '@ant-design/icons'
import './index.scss'
import HttpHelper from '../../plugins/axios'
import { withRouter } from 'react-router-dom'

async function login(params, history) {
    const res = await HttpHelper.post('/admin/login', params)
    if (res.code === 0) {
        history.push('/home')
    } else {
        message.error('Login fail!')
    }
}

class Login extends React.Component {
    formRef = React.createRef()

    handleLogin = async () => {
        const form = await this.formRef.current.validateFields()
        await login(form, this.props.history)
    }

    render() {
        return <div className="login">
            <div className="login-form">
                <Form ref={this.formRef}>
                    <Form.Item name="uname" rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input addonBefore={<UserOutlined/>}/>
                    </Form.Item>
                    <Form.Item name="pwd" rules={[{ required: true, message: 'Please input your password!' }]}>
                        <Input.Password addonBefore={<KeyOutlined/>}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={this.handleLogin}>Login</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    }
}

export default withRouter(Login)
