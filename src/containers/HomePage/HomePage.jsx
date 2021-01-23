import React, { Component } from 'react'
import JobCollapse from '../../components/JobCollapse/JobCollapse'
import { actions as JobsActions } from '../../modules/jobs'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import qs from 'qs'

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

    render() {
        return (
            <div>
                <JobCollapse data={this.props.jobs.jobList} />
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