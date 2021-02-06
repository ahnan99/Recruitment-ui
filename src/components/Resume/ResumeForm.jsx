import React, { Component } from 'react'
import { Form, Input, Button, Select, message } from 'antd';
import { withRouter } from 'react-router-dom'
import ResumeDetailList from './ResumeDetailList'

const { Option } = Select
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
class ResumeForm extends Component {

    onFinish = values => {
        this.props.actions.postUpdateResume({
            ...values,
            registerID: this.props.application.username
        })
    }

    componentDidMount() {
        if (this.props.application.username) {
            this.props.actions.getResume({ username: this.props.application.username })
            this.props.actions.getResumeDetail({ username: this.props.application.username })
            this.props.actions.getEmploymentList()
            this.props.actions.getEducationList()
        } else {
            this.props.history.push('/login')
        }
    }

    componentDidUpdate = prevProps => {
        if (!prevProps.resume.postResume && this.props.resume.postResume) {
            if (this.props.resume.postResume.status === 0) {
                message.success("保存成功")
            } else {
                message.error(this.props.resume.postResume.msg)
            }
            this.props.actions.updatePostResume(null)
        }
    }

    render() {
        if (!this.props.resume.resume || !this.props.resume.resumeDetail) {
            return (<div>Loading</div>)
        }
        return (
            <Form
                {...formItemLayout}
                name="resume"
                onFinish={this.onFinish}
                initialValues={{ ...this.props.resume.resume[0] }}
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
                    <Input disabled />
                </Form.Item>
                <Form.Item
                    label="手机"
                    name="mobile"
                >
                    <Input disabled />
                </Form.Item>
                <Form.Item
                    label="住址"
                    name="address"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="微信"
                    name="weixin"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="邮箱"
                    name="email"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="学历"
                    name="education"
                >
                    <Select>
                        {this.props.resume.educationList ? this.props.resume.educationList.map(item => (
                            <Option key={item.ID} value={Number(item.ID)}>{item.item}</Option>
                        )) : null
                        }
                    </Select>
                </Form.Item>
                <Form.Item
                    label="状态"
                    name="job_status"
                >
                    <Select>
                        {this.props.resume.employmentList ? this.props.resume.employmentList.map(item => (
                            <Option key={item.ID} value={Number(item.ID)}>{item.item}</Option>
                        )) : null
                        }
                    </Select>
                </Form.Item>
                <Form.Item
                    label="目标岗位"
                    name="hopeJob"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="期望薪资"
                    name="hopePay"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="技能特长"
                    name="skillHistory"
                >
                    <ResumeDetailList kind="skill"
                        data={this.props.resume.resumeDetail.filter(item => { return item.kind === "skill" })}
                        actions={this.props.actions}
                        application={this.props.application}
                        resume={this.props.resume}
                    />
                </Form.Item>
                <Form.Item
                    label="教育经历"
                    name="educationHistory"
                >
                    <ResumeDetailList kind="education"
                        data={this.props.resume.resumeDetail.filter(item => { return item.kind === "education" })}
                        actions={this.props.actions}
                        application={this.props.application}
                        resume={this.props.resume}
                    />
                </Form.Item>
                <Form.Item
                    label="工作经历"
                    name="workHistory"
                >
                    <ResumeDetailList kind="job"
                        data={this.props.resume.resumeDetail.filter(item => { return item.kind === "job" })}
                        actions={this.props.actions}
                        application={this.props.application}
                        resume={this.props.resume} />
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

export default withRouter(ResumeForm)