import React, { Component } from 'react'
import { List } from 'antd';
import { actions as ReferActions } from '../../modules/refer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import {
    FilePptOutlined
} from '@ant-design/icons';

class PosterList extends Component {

    componentDidMount() {
        if (!this.props.application.username) {
            this.props.history.push('/login')
        } else {
            console.log(this.props.application.username)
            this.props.actions.getPosterList()
        }

    }


    onClickTitle = poster => {
        this.props.actions.updatePoster(null)
        this.props.actions.getPoster({ ID: poster.ID, username: this.props.application.username, mark: 1 })
        this.props.history.push('/posterDetail')
    }

    render() {
        if (!this.props.application.username || !this.props.refer.posterList) {
            return (<>Loading...</>)
        }
        return (
            <List
                itemLayout="horizontal"
                dataSource={this.props.refer.posterList}
                renderItem={item => (
                    <List.Item style={{ textAlign: 'left' }}>
                        <List.Item.Meta
                            onClick={() => this.onClickTitle(item)}
                            title={<div><FilePptOutlined /><span> </span><span style={{ color: 'blue' }}>
                                {item.item}</span>
                            </div>}
                        />
                    </List.Item>
                )}
            />
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



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PosterList))
