import React, { Component } from 'react'
import AccountInfo from '../../components/Resume/AccountInfo'
import { actions as AccountActions } from '../../modules/account'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



class AccountPage extends Component {


    render() {
        return (
            <div>
                <AccountInfo application={this.props.application} account={this.props.account} actions={this.props.actions}/>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    account: state.account,
    application: state.application
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AccountActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)