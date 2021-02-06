import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import { Route, withRouter } from 'react-router-dom'
import 'antd/dist/antd.css'
import routes from '../routes'
import './MainView.css'
import { actions as LoginActions } from '../modules/application'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    AuditOutlined,
    QuestionCircleOutlined,
    InfoCircleOutlined,
    UserOutlined,
    LogoutOutlined,
    MailOutlined,
    AppstoreOutlined,
    ScheduleOutlined
} from '@ant-design/icons';
const { Content, Footer, Sider } = Layout
class MainView extends Component {

    get routes() {
        return (
            routes.map(route => (
                <Route key={route.pathKey} exact {...route} />
            ))
        )
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.props.actions.confirmLogin()
    }


    state = {
        collapsed: true,
    }

    onClick = e => {
        this.setState({ collapsed: true })
        switch (e.key) {
            case "1":
                this.props.history.push("/homepage")
                break
            case "2":
                this.props.actions.requestLogout()
                break
            case "3":
                this.props.history.push("/login")
                break
            case "4":
                this.props.history.push("/resume")
                break
            default:
                this.props.history.push("/homepage")
        }
    }


    setCollapse = () => {
        this.setState({ collapsed: !this.state.collapsed })
    }

    render() {
        return (
            <Layout>
                <Sider
                    breakpoint="md"
                    collapsedWidth="0"
                    style={{ height: "100vh", position: "fixed", zIndex: 99 }}
                    collapsed={this.state.collapsed}
                    onClick={this.setCollapse}
                >
                    <div className="logo">
                        <b style={{ color: 'white' }}></b>
                    </div>
                    <Menu onClick={this.onClick} theme="dark" mode="inline">
                        <Menu.Item key="1" icon={<AppstoreOutlined />} title={""}>
                            主页
                        </Menu.Item>
                        <Menu.Item key="4" icon={<AppstoreOutlined />} title={""}>
                            个人简历
                        </Menu.Item>
                        {this.props.application.loggedIn ?
                            <Menu.Item key="2" icon={<LogoutOutlined />} title={""}>
                                登出
                            </Menu.Item> :
                            <Menu.Item key="3" icon={<InfoCircleOutlined />} title={""}>
                                登录/注册
                         </Menu.Item>
                        }

                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{ padding: 0 }}>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360, textAlign: 'center' }}>
                            {this.routes}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>NetBlue @2020</Footer>
                </Layout>
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    application: state.application
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(LoginActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainView))