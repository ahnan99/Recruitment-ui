import React, { Component } from 'react'
import { Form, Input, Button, Select, Radio, message, Upload, AutoComplete } from 'antd'
import checkIDcard from '../../modules/function/checkID'
import { withRouter } from 'react-router-dom'


const props = {
    name: 'avatar',
    headers: {
        authorization: 'authorization-text',
    }
};

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
const { Option } = Select
class RegisterForm extends Component {
    formRef = React.createRef()
    constructor(props) {
        super(props)
        this.checkIDcard = checkIDcard
        this.state = { kindID: "0" }
    }


    componentDidUpdate = prevProps => {
        if (this.props.application.registered) {
            message.success('注册成功')
            this.props.history.push('login')
            this.props.actions.resetRegisterStatus()
        } else if (this.props.application.registerError) {
            message.error(this.props.application.registerError)
            this.props.actions.resetRegisterStatus()
        }
    }


    onFinish = values => {
        this.props.actions.requestRegister({
            username: values.username,
            name: values.name,
            mobile: values.mobile,
            registerID: values.username,
            fromID: this.props.jobs.fromID ? this.props.jobs.fromID : '',
            password: values.password
        })
        console.log('Success:', values)
    }



    render() {
        const { kindID } = this.state
        return (
            <Form
                {...formItemLayout}
                onFinish={this.onFinish}
                scrollToFirstError
                initialValues={{ kindID: "0" }}
                onValuesChange={this.onValuesChange}
                ref={this.formRef}
            >
                <Form.Item
                    name="username"
                    label="身份证"
                    rules={[
                        {
                            required: true,
                            message: '请输入身份证号',
                        },
                        {
                            validator: (rule, value) => {
                                console.log(this.checkIDcard(value))
                                if (!value || this.checkIDcard(value) === 1) {
                                    return Promise.resolve();
                                } else if (this.checkIDcard(value) === 2) {
                                    return Promise.reject('身份证号码位数不对');
                                } else if (this.checkIDcard(value) === 3) {
                                    return Promise.reject('身份证号码出生日期超出范围或含有非法字符');
                                } else if (this.checkIDcard(value) === 4) {
                                    return Promise.reject('身份证号码校验错误');
                                } else if (this.checkIDcard(value) === 5) {
                                    return Promise.reject('身份证地区非法');
                                } else
                                    return Promise.reject('身份证号码校验错误');
                            },
                        }

                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="name"
                    label="姓名"
                    rules={[
                        {
                            required: true,
                            message: '请输入姓名',
                        },

                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="密码"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码',
                        },
                        {
                            min: 6,
                            message: '密码至少六位'
                        }
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="confirm"
                    label="确认密码"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: '请确认密码',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('两次输入不匹配');
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="mobile"
                    label="手机号码"
                    rules={[
                        {
                            required: true,
                            message: '请输入手机号码',
                        },
                        {
                            validator: (rule, value) => {
                                console.log(this.checkIDcard(value))
                                if (!value || value.length === 11) {
                                    return Promise.resolve();
                                } else {
                                    return Promise.reject('手机号不合法')
                                }
                            },
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">注册</Button>
                    <span> </span>
                    <span> </span>
                    <a href="/login">取消</a>
                </Form.Item>
            </Form>

        )
    }
}
export default withRouter(RegisterForm)