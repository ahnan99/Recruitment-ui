import React, { Component } from 'react'
import { Descriptions, Row, Col, Button, Modal, message, Affix } from 'antd'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions as JobsActions } from '../../modules/jobs'
import qs from 'qs'


class JobDetail extends Component {



    constructor(props) {
        super(props)
        this.state = {
            isModalVisible: false,
            loading: false
        }
    }


    setIsModalVisible = isModalVisible => {
        this.setState({ isModalVisible })
    }

    showModal = () => {
        this.setIsModalVisible(true);
    };

    handleOk = () => {
        this.setState({ loading: true })
        this.props.actions.postApplyJob({
            username: this.props.application.username,
            jobID: this.props.jobs.jobSelected,
            fromID: this.props.jobs.fromID ? this.props.jobs.fromID : '',
            memo: ''
        })
    };

    handleCancel = () => {
        this.setIsModalVisible(false);
    };

    componentDidMount() {
        if (this.props.jobs.jobSelected) {
            this.props.actions.getJobInfo({ jobID: this.props.jobs.jobSelected })
            this.props.actions.getJobRequirement({ jobID: this.props.jobs.jobSelected })
        } else if (qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).jobID) {
            this.props.actions.updateJobSelected(qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).jobID)
        }
    }

    componentDidUpdate = prevProps => {
        if (prevProps.jobs.jobSelected === null && this.props.jobs.jobSelected) {
            this.props.actions.getJobInfo({ jobID: this.props.jobs.jobSelected })
            this.props.actions.getJobRequirement({ jobID: this.props.jobs.jobSelected })
        }
        if (prevProps.jobs.jobApplyStatus === null && this.props.jobs.jobApplyStatus) {
            this.setState({ loading: false })
            if (this.props.jobs.jobApplyStatus.status !== 0) {
                message.error(this.props.jobs.jobApplyStatus.msg)
            } else {
                message.success('申请成功')
                this.setIsModalVisible(false);
            }
            this.props.actions.updateApplyJob(null)
        }
    }

    onClickBack = () => {
        this.props.actions.updateJobSelected(null)
        this.props.history.push('/homepage')
    }

    onClickApply = () => {
        if (this.props.application.loggedIn) {
            this.showModal()
        } else {
            message.info('请先登录')
            this.props.history.push('/login')
        }
    }

    render() {
        const { jobInfo, jobRequirement } = this.props.jobs
        const { isModalVisible, loading } = this.state
        if (!jobRequirement || !jobInfo) {
            return (<h3>载入中...</h3>)
        }
        return (
            <div>
                <Row gutter={[16, 32]}>
                    <Col span={24}>
                        <Descriptions title={<a>{jobInfo[0].jobName}</a>}
                            extra={<Affix offsetTop={20}><Button type="primary" onClick={this.onClickApply}>我要申请</Button></Affix>}>
                            <Descriptions.Item label="岗位名称" labelStyle={{ fontWeight: 'bolder' }}>{jobInfo[0].jobName}</Descriptions.Item>
                            <Descriptions.Item label="发布日期" labelStyle={{ fontWeight: 'bolder' }}>{jobInfo[0].issueDate}</Descriptions.Item>
                            <Descriptions.Item label="录用条件" labelStyle={{ fontWeight: 'bolder' }}></Descriptions.Item><Descriptions.Item><ul>{jobRequirement.map(req => <li style={{ textAlign: 'left' }} key={req.ID}>{req.item}</li>)}</ul></Descriptions.Item>
                            <Descriptions.Item label="薪资范围" labelStyle={{ fontWeight: 'bolder' }}><span style={{ textAlign: 'left' }}>{jobInfo[0].payMin + " - " + jobInfo[0].payMax}元/月</span></Descriptions.Item>
                            <Descriptions.Item label="薪资结构" labelStyle={{ fontWeight: 'bolder' }}><span style={{ textAlign: 'left' }}>{jobInfo[0].payStructure}</span></Descriptions.Item>
                            <Descriptions.Item label="福利待遇" labelStyle={{ fontWeight: 'bolder' }}><span style={{ textAlign: 'left' }}>{jobInfo[0].benefit}</span></Descriptions.Item>
                            <Descriptions.Item label="说明" labelStyle={{ fontWeight: 'bolder' }}><span style={{ textAlign: 'left' }}>{jobInfo[0].memo}</span></Descriptions.Item>
                        </Descriptions>
                    </Col>
                </Row>
                <Modal title="确认申请" visible={isModalVisible}
                    footer={[
                        <Button key="cancel" onClick={this.handleCancel}>
                            取消
                        </Button>,
                        <Button key="confirm" type="primary" loading={loading} onClick={this.handleOk}>
                            确定
                        </Button>,
                    ]}>
                    <p>确认要申请这个职位么</p>
                </Modal>
                <Row gutter={[16, 32]}>
                    <Col span={24}>
                        <Button type="primary" onClick={this.onClickBack}>返回列表</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    jobs: state.jobs,
    application: state.application
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(JobsActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JobDetail));