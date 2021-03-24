import React, { Component } from 'react'
import { actions as ReferActions } from '../../modules/refer'
import { connect } from 'react-redux'
import { List, Descriptions } from 'antd'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

class ReferralsList extends Component {
    componentDidMount() {
        if (!this.props.application.username) {
            this.props.history.push('/login')
        } else {
            this.props.actions.getMyReferrals({ username: this.props.application.username, mark: 1 })
            this.props.actions.getReferralsCount({ username: this.props.application.username, mark: 1 })
        }

    }

    render() {
        if (!this.props.application.username || !this.props.refer.referralsCount || !this.props.refer.myReferrals) {
            return (<>Loading...</>)
        }
        return (<>
            <Descriptions title="我推荐的人">
                <Descriptions.Item label='注册人数'>{this.props.refer.referralsCount[0].registered}</Descriptions.Item>
                <Descriptions.Item label='录用人数'>{this.props.refer.referralsCount[0].employed}</Descriptions.Item>
                <Descriptions.Item label='奖励人数'>{this.props.refer.referralsCount[0].rewarded}</Descriptions.Item>
                <Descriptions.Item label='奖励金额'>{this.props.refer.referralsCount[0].reward}</Descriptions.Item>
                <Descriptions.Item label='奖励次数'>{this.props.refer.referralsCount[0].rewardCount}</Descriptions.Item>
            </Descriptions>
            <List
                itemLayout="horizontal"
                dataSource={this.props.refer.myReferrals}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={<div><span style={{ color: 'blue' }}>
                                {item.item}</span>
                            </div>}
                            description={<div>
                                <span>{item.name}</span>
                                <span>&nbsp;&nbsp;注册日期: {item.regDate}</span>
                                <span>&nbsp;&nbsp;状态: {item.status}</span>
                            </div>}
                        />
                    </List.Item>
                )}
            /></>
        )
    }
}

const mapStateToProps = state => ({
    refer: state.refer,
    application: state.application
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ReferActions, dispatch)
})



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReferralsList))
