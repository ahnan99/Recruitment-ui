import React, { Component } from 'react'
import { List } from 'antd';
import { actions as JobsActions } from '../../modules/jobs'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import {
    PlaySquareOutlined
} from '@ant-design/icons';

class JobCollapse extends Component {

    onClickTitle = job => {
        this.props.actions.updateJobSelected(job.jobID)
        this.props.history.push('/jobdetail?jobID=' + job.jobID)
    }

    render() {
        const { data } = this.props
        if (!data) {
            return (<h3>载入中...</h3>)
        }

        const filtered = data.filter(obj => obj.jobName.indexOf(this.props.search) >= 0)

        return (
            <List
                itemLayout="horizontal"
                dataSource={this.props.search ? filtered : data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            onClick={() => this.onClickTitle(item)}
                            title={<div>
                                <span style={{  float: 'left' }}>{item.jobName}</span>
                                <span style={{ float: 'right', color: 'blue', fontSize: '1.15em' }}><PlaySquareOutlined /></span>
                            </div>}
                            description={<div>
                                <br/>
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