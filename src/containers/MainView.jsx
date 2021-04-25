import React, { Component } from 'react'
import { Button, Layout, Menu, message, Row, Col } from 'antd'
import { Route, withRouter } from 'react-router-dom'
import 'antd/dist/antd.css'
import routes from '../routes'
import './MainView.css'
import { actions as LoginActions } from '../modules/application'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    MenuOutlined
} from '@ant-design/icons';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/HomeOutlined'
import BookIcon from '@material-ui/icons/Book';
import InfoIcon from '@material-ui/icons/Info';
import FeedbackIcon from '@material-ui/icons/Feedback';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PanToolIcon from '@material-ui/icons/PanTool';
import DescriptionIcon from '@material-ui/icons/Description';
import GroupIcon from '@material-ui/icons/Group';

const drawerWidth = `100%`;
const { Header, Content, Footer, Sider } = Layout
const links = [{
    key: "1",
    text: `主页`,
    icon: <HomeIcon />
},
{
    key: "4",
    text: `个人简历`,
    icon: <DescriptionIcon />
},
{
    key: '6',
    text: `我的应聘`,
    icon: <PanToolIcon />
},
{
    key: '9',
    text: `我要推广`,
    icon: <BookIcon />
},
{
    key: '10',
    text: `我推荐的`,
    icon: <GroupIcon />
},
{
    key: '5',
    text: `账号信息`,
    icon: <AccountBoxIcon />
},
{
    key: '8',
    text: `我的消息`,
    icon: <InboxIcon />
},
{
    key: '7',
    text: `反馈`,
    icon: <FeedbackIcon />
},
{
    key: '11',
    text: `关于我们`,
    icon: <InfoIcon />
}]


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

    componentDidUpdate = prevProps => {
        if(prevProps.application.loggedIn && !this.props.application.loggedIn){
            this.toggleDrawer('top', false)
            message.info('登出成功')
        }

        if(!prevProps.application.loggedIn && this.props.application.loggedIn){
            this.toggleDrawer('top', false)
            message.success('登录成功')
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            top: false
        }
    }

    onClick = e => {
        this.toggleDrawer('top', false)
        switch (e) {
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
            case "5":
                this.props.history.push("/accountInfo")
                break
            case "6":
                this.props.history.push("/myApplication")
                break
            case "7":
                this.props.history.push("/feedbackpage")
                break
            case "8":
                this.props.history.push("/messagepage")
                break
            case "9":
                this.props.history.push("/posterList")
                break
            case "10":
                this.props.history.push("/refer")
                break
            case "11":
                this.props.history.push("/about")
                break
            default:
                this.props.history.push("/homepage")
        }
    }


    setCollapseContent = () => {
        this.toggleDrawer('top', false)
    }

    toggleDrawer = (anchor, open) => {
        this.setState({ ...this.state, [anchor]: open });
    };
    render() {
        return (
            <Layout onClick={message.destroy()}>
                <Header style={{ backgroundColor: '#1976d2', textAlign: 'left', color: 'white', fontSize: '1.5em' }}>
                    <Row gutter={16} onClick={() => this.toggleDrawer('top', true)}>
                        <Col className="gutter-row" span={2} >
                            <MenuOutlined style={{ fontWeight: 'bolder' }} />
                        </Col>
                        <Col className="gutter-row" span={2}>

                        </Col>
                        <Col className="gutter-row" span={20}>
                            <span>个人中心</span>
                        </Col>
                    </Row>
                </Header>
                <Drawer
                    className={`drawer`}
                    variant="persistent"
                    anchor="top"
                    open={this.state.top}
                    classes={{
                        paper: `drawPaper`,
                    }}

                    onClose={() => this.toggleDrawer('top', false)}
                >
                    <Divider />
                    <List>
                        {links.map(link => (
                            <ListItem button key={link.key} onClick={() => this.onClick(link.key)}>
                                <ListItemIcon>{link.icon}</ListItemIcon>
                                <ListItemText primary={link.text} />
                            </ListItem>
                        ))}

                    </List>
                    <Divider />
                    {this.props.application.loggedIn ? <ListItem button key={'2'} onClick={() => this.onClick('2')}>
                        <ListItemIcon> <InboxIcon /></ListItemIcon>
                        <ListItemText primary={`登出`} />
                    </ListItem> :
                        <ListItem button key={'3'} onClick={() => this.onClick('3')}>
                            <ListItemIcon><InboxIcon /> </ListItemIcon>
                            <ListItemText primary={`登录/注册`} />
                        </ListItem>}
                </Drawer>
                {/* <Sider
                    breakpoint="md"
                    collapsedWidth="0"
                    style={{ height: "100vh", position: "fixed", zIndex: 99 }}
                    collapsed={this.state.collapsed}
                    onClick={this.setCollapse}
                >
                    <div className="logo">
                        <b style={{ color: 'white' }}></b>
                    </div>
                    <Menu onClick={this.onClick} theme="dark" mode="inline" expandIcon={<AppstoreOutlined />}>
                        <Menu.Item key="1" icon={<AppstoreOutlined />} title={""}>
                            主页
                        </Menu.Item>
                        <Menu.Item key="4" icon={<AppstoreOutlined />} title={""}>
                            个人简历
                        </Menu.Item>
                        <Menu.Item key="6" icon={<AppstoreOutlined />} title={""}>
                            我的应聘
                        </Menu.Item>
                        <Menu.Item key="9" icon={<AppstoreOutlined />} title={""}>
                            我要推广
                        </Menu.Item>
                        <Menu.Item key="10" icon={<AppstoreOutlined />} title={""}>
                            我推荐的
                        </Menu.Item>
                        <Menu.Item key="5" icon={<AppstoreOutlined />} title={""}>
                            账号信息
                        </Menu.Item>
                        <Menu.Item key="8" icon={<MailOutlined />} title={""}>
                            我的消息
                        </Menu.Item>
                        <Menu.Item key="7" icon={<InfoCircleOutlined />} title={""}>
                            反馈
                        </Menu.Item>
                        <Menu.Item key="11" icon={<InfoCircleOutlined />} title={""}>
                            关于我们
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
                </Sider> */}
                <Layout className="site-layout" style={{ padding: 0 }} onClick={this.setCollapseContent}>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }} >
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