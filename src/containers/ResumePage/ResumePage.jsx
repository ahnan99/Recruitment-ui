import React, { Component } from 'react'
import ResumeForm from '../../components/Resume/ResumeForm'
import { connect } from 'react-redux'
import 'antd/dist/antd.css'
import { bindActionCreators } from 'redux'
import { actions as Resumeactions } from '../../modules/resume'

class ResumePage extends Component {

    render() {
        return (
            <ResumeForm
                application={this.props.application}
                resume={this.props.resume}
                actions={this.props.actions}
            />
        )
    }
}

const mapStateToProps = state => ({
    application: state.application,
    resume: state.resume
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Resumeactions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ResumePage);