import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm.jsx'
import 'antd/dist/antd.css'
import './LoginPage.css'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actions as LoginActions } from '../../modules/application'


class LoginPage extends Component {


    render() {
        return (
            <Row className="form-row">
                <Col xs={2} sm={4} md={6} lg={8} xl={8}>
                </Col>
                <Col xs={20} sm={16} md={12} lg={8} xl={8} className="form-container">

                    <div className="title-div">
                        <div>

                        </div>
                        <div>
                            <b className="title"></b>
                        </div>
                    </div>

                    <LoginForm application={this.props.application} actions={this.props.actions} jobs={this.props.jobs} />

                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={8}>
                </Col>
            </Row>
        )
    }


}
const mapStateToProps = state => ({
    application: state.application,
    jobs: state.jobs
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(LoginActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
