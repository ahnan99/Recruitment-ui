import React, { Component } from 'react'
import { Row, Col } from 'antd'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import { connect } from 'react-redux'
import 'antd/dist/antd.css'
import './Register.css'
import { bindActionCreators } from 'redux'
import { actions as RegisterActions } from '../../modules/application'

class Register extends Component {

    render() {
        return (
            <Row className="form-row">
                <Col xs={2} sm={4} md={6} lg={8} xl={8}>
                </Col>
                <Col xs={20} sm={16} md={12} lg={8} xl={8} className="form-container">
                    <RegisterForm
                        application={this.props.application}
                        actions={this.props.actions}
                        jobs={this.props.jobs}
                    />
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
    actions: bindActionCreators(RegisterActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
