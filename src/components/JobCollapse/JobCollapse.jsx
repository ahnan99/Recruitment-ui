import React, { Component } from 'react'
import { List } from 'antd';
import { actions as JobsActions } from '../../modules/jobs'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'


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
                            onClick={() => this.onClickTitle(item)}
                            title={<div><span style={{ textAlign:'right', marginLeft:100 }}>{item.jobName}</span><span style={{textAlign:'right', marginLeft:50, color:'blue',fontSize:'0.85em'}}>详情&gt;&gt;</span></div>}
                            description={<div>
                                <span>发布日期: {item.issueDate}</span>
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