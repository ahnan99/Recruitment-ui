import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import { Route, withRouter } from 'react-router-dom'
import 'antd/dist/antd.css'
import routes from '../routes'
import './MainView.css'

const { Content, Footer, Sider } = Layout
class MainView extends Component {

    get routes() {
        return (
            routes.map(route => (
                <Route key={route.pathKey} exact {...route} />
            ))
        )
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
                this.props.history.push("/courseselect")
                break
            case "3":
                this.props.history.push("/certpage")
                break
            case "4":
                this.props.history.push("/userinfo")
                break
            case "5":
                this.props.history.push("/feedbackpage")
                break
            case "6":
                this.props.history.push("/messagepage")
                break
            case "7":
                this.props.history.push("/helppage")
                break
            case "8":
                this.props.actions.requestLogout()
                break
            default:
                this.props.history.push("/homepage")
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.application.loggedIn == false) {
            this.props.history.push("/login")
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



export default withRouter(MainView)