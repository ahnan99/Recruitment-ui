import React, { Component } from 'react'
import ApplicationList from '../../components/ApplicationList/ApplicationList'
import { actions as myApplicationActions } from '../../modules/myapplication'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class ApplicationPage extends Component {
    render() {
        return (
            <div>
                <ApplicationList
                    application={this.props.application}
                    myApplication={this.props.myApplication}
                    actions={this.props.actions} />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    myApplication: state.myApplication,
    application: state.application
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(myApplicationActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(ApplicationPage)
