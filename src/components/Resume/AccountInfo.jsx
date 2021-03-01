import React, { Component } from 'react'
import { Form, Input, Button, Select, message } from 'antd';
import { withRouter } from 'react-router-dom'
import axios from 'axios'


const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
class AccountInfo extends Component {

    onFinish = values => {
        this.props.actions.postAccountInfo({
            username: values.username,
            password: values.password,
            mobile: values.mobile
        })
    }

    componentDidMount() {
        if (this.props.application.username) {
            this.props.actions.getAccountInfo({ username: this.props.application.username })
            this.props.actions.getQRCode({ mark: 'h', size: '5', username: this.props.application.username })
        } else {
            this.props.history.push('/login')
        }
    }

    componentDidUpdate = prevProps => {
        if (!prevProps.account.postAccountInfo && this.props.account.postAccountInfo) {
            if (this.props.account.postAccountInfo.status === 0) {
                message.success("保存成功")
            } else {
                message.error(this.props.account.postAccountInfo.msg)
            }
            this.props.actions.updatePostAccountInfo(null)
        }
    }

    render() {
        if (!this.props.account.accountInfo) {
            return (<div>Loading</div>)
        }
        return (
            <Form
                {...formItemLayout}
                name="account"
                onFinish={this.onFinish}
                initialValues={{ ...this.props.account.accountInfo[0] }}
            >
                <Form.Item
                    label="身份证"
                    name="username"
                    rules={[{ message: 'Please input your username!' }]}
                >
                    <Input disabled />
                </Form.Item>
                <Form.Item
                    label="姓名"
                    name="name"
                >
                    <Input disabled/>
                </Form.Item>
                <Form.Item
                    label="手机"
                    name="mobile"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="密码"
                    name="password"
                >
                    <Input type="password" />
                </Form.Item>
                <Form.Item
                    label="二维码"
                    name="qrcode"
                >
                    <img src={axios.defaults.baseURL + "/public/get_user_qr?mark=H&size=4&username=" + this.props.application.username} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        保存
                </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default withRouter(AccountInfo)