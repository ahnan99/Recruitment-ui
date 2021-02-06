import React, { Component } from 'react'
import { List, Button, message, Popconfirm } from 'antd';
import SkillModal from './SkillModal'
import JobModal from './JobModal'
import EducationModal from './EducationModal'

export default class ResumeDetailList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            skillVisible: false,
            jobVisible: false,
            educationVisible: false,
            loading: false,
            editingItem: null
        }
    }

    confirm = item => {
        console.log('post delete')
        this.props.actions.deleteResumeDetail({ ID: item.ID, registerID: this.props.application.username })
    }

    onClickEdit = item => {
        switch (this.props.kind) {
            case "skill":
                this.setState({ editingItem: item, skillVisible: true });
                break;
            case "job":
                this.setState({ editingItem: item, jobVisible: true });
                break;
            case "education":
                this.setState({ editingItem: item, educationVisible: true });
                break;
            default:
                break;
        }
    }
    onClick = () => {
        switch (this.props.kind) {
            case "skill":
                this.setState({ editingItem: null, skillVisible: true });
                break;
            case "job":
                this.setState({ editingItem: null, jobVisible: true });
                break;
            case "education":
                this.setState({ editingItem: null, educationVisible: true });
                break;
            default:
                break;
        }
    }

    onCancel = () => {
        this.setState({ skillVisible: false, educationVisible: false, jobVisible: false, editingItem: null })
    }

    submitSkill = (values, editingItem) => {
        console.log(values)
        this.setState({ loading: true })
        this.props.actions.postResumeDetail({
            ...values,
            kind: "skill",
            ID: editingItem ? editingItem.ID : "0",
            registerID: this.props.application.username,
            username: this.props.application.username,
            dateStart: "",
            dateEnd: "",
        })

    }

    submitJob = (values, editingItem) => {
        console.log(values)
        this.setState({ loading: true })
        this.props.actions.postResumeDetail({
            ...values,
            kind: "job",
            ID: editingItem ? editingItem.ID : "0",
            registerID: this.props.application.username,
            username: this.props.application.username,
            years: "",
            memo: "",
        })

    }

    submitEducation = (values, editingItem) => {
        console.log(values)
        this.setState({ loading: true }, () => {
            this.props.actions.postResumeDetail({
                ...values,
                kind: "education",
                ID: editingItem ? editingItem.ID : "0",
                registerID: this.props.application.username,
                username: this.props.application.username,
                years: "",
                memo: "",
            })
        })
    }


    componentDidUpdate = prevProps => {

        if (!prevProps.resume.postResumeDetail && this.props.resume.postResumeDetail) {
            if (this.props.resume.postResumeDetail.status === 0) {
                this.setState({ loading: false, skillVisible: false, jobVisible: false, educationVisible: false, editingItem: null }, () => {
                    this.props.actions.getResumeDetail({ username: this.props.application.username })
                    if (this.props.kind === "skill") {
                        message.success("更新成功")
                    }
                })
            } else {
                this.setState({ loading: false })
                message.error(this.props.resume.postResumeDetail.msg)
            }
            this.props.actions.updatePostResumeDetail(null)
        }

        else if (!prevProps.resume.deleteResumeDetail && this.props.resume.deleteResumeDetail) {
            if (this.props.resume.deleteResumeDetail.status === 0) {
                this.props.actions.getResumeDetail({ username: this.props.application.username })
                if (this.props.kind === "skill") {
                    message.success("删除成功")
                }
            } else {
                message.error(this.props.resume.deleteResumeDetail.msg)
            }
            this.props.actions.updateDeleteResumeDetail(null)
        }

    }

    render() {
        return (
            <div>
                <SkillModal visible={this.state.skillVisible}
                    submit={(values, editingItem) => this.submitSkill(values, editingItem)}
                    confirmLoading={this.state.loading}
                    editingItem={this.state.editingItem}
                    onCancel={this.onCancel} />
                <EducationModal visible={this.state.educationVisible}
                    submit={(values, editingItem) => this.submitEducation(values, editingItem)}
                    confirmLoading={this.state.loading}
                    editingItem={this.state.editingItem}
                    onCancel={this.onCancel} />
                <JobModal visible={this.state.jobVisible}
                    submit={(values, editingItem) => this.submitJob(values, editingItem)}
                    confirmLoading={this.state.loading}
                    editingItem={this.state.editingItem}
                    onCancel={this.onCancel} />
                <List
                    itemLayout="vertical"
                    dataSource={this.props.data}
                    header={<div style={{ textAlign: 'right' }}><Button type="primary" size="small" onClick={() => this.onClick()}>添加</Button></div>}
                    renderItem={item => (
                        <List.Item style={{ textAlign: 'left' }} actions={[<a key="list-loadmore-edit" onClick={() => this.onClickEdit(item)}>编辑</a>,
                        <Popconfirm
                            placement="topRight"
                            title={"确认要删除么？"}
                            onConfirm={() => this.confirm(item)}
                            okText="确定"
                            cancelText="放弃"
                        ><a key="list-loadmore-more">删除</a>
                        </Popconfirm>]}>
                            < List.Item.Meta
                                title={<p>{item.item}</p>}
                                description={this.props.kind === "skill" ?
                                    item.detail + "   " + item.years + " 年" :
                                    item.detail + "   " + item.dateStart + " ~ " + item.dateEnd}
                            />
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}
