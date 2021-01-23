import React, { Component } from 'react'
import { List } from 'antd';
import { actions as JobsActions } from '../../modules/jobs'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

class JobCollapse extends Component {

    onClickTitle = job => {
        this.props.actions.updateJobSelected(job.jobID)
        this.props.history.push('/jobdetail?jobID=' + job.jobID)
    }

    render() {
        const { data } = this.props;
        if (!data) {
            return (<h3>载入中...</h3>)
        }
        return (
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={<a onClick={() => this.onClickTitle(item)}>{item.jobName}</a>}
                            description={<div>
                                <span>发布日期: {item.issueDate}</span>
                                &nbsp;&nbsp;
                                <span>招聘人数: {item.qty}</span>
                            </div>}
                        />
                    </List.Item>
                )}
            />
        )
    }
}


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(JobsActions, dispatch)
})


export default withRouter(connect(null, mapDispatchToProps)(JobCollapse));