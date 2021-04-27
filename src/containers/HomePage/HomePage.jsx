import React, { Component } from 'react'
import JobCollapse from '../../components/JobCollapse/JobCollapse'
import { actions as JobsActions } from '../../modules/jobs'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import qs from 'qs'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

class HomePage extends Component {

    callback(key) {
        console.log(key);
    }

    componentDidMount() {
        if (qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).fromID) {
            this.props.actions.updateFromID(qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).fromID)
        }
        this.props.actions.getJobList();

    }

    constructor(props) {
        super(props)
        this.state = {
            search: null
        }
    }

    onChange = e => {
        this.setState({ search: e.target.value })
    };

    render() {
        return (
            <div>
                <Input placeholder=" 搜我心仪的职位 " allowClear prefix={<SearchOutlined />} onChange={this.onChange} />
                <JobCollapse data={this.props.jobs.jobList} search={this.state.search} />
            </div>
        )
    }

}

const mapStateToProps = state => ({
    jobs: state.jobs
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(JobsActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)