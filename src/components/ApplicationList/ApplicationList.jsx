import React, { Component } from 'react'
import { Button, List, message, Popconfirm } from 'antd';
import { withRouter } from 'react-router-dom'


class ApplicationList extends Component {

    componentDidMount() {
        if (!this.props.application.username) {
            this.props.history.push('/login')
        } else {
            this.props.actions.getMyApplication({ username: this.props.application.username })
        }
    }

    componentDidUpdate = prevProps => {
        if (!prevProps.myApplication.postApplicationCancel && this.props.myApplication.postApplicationCancel) {
            if (this.props.myApplication.postApplicationCancel.status === 0) {
                message.success('撤销完成')
            } else {
                message.error(this.props.myApplication.postApplicationCancel.msg)
            }
            this.props.actions.updatePostApplicationCancel(null)
            this.props.actions.getMyApplication({ username: this.props.application.username })
        }
    }

    onClick = item => {
        this.props.actions.postApplicationCancel({ ID: item.ID })
    }

    render() {
        const data = this.props.myApplication.myApplication;
        if (!data) {
            return (<h3>载入中...</h3>)
        }

        return (
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item style={{ textAlign: 'left' }}
                        actions={[item.status === 0 ? <Popconfirm
                            title="确定要撤销吗？"
                            onConfirm={() => this.onClick(item)}
                            onCancel={null}
                            okText="确定"
                            cancelText="取消"
                            placement="topRight"
                        ><Button type='primary'>撤销</Button>
                        </Popconfirm> : null]}>
                        <List.Item.Meta
                            title={<div>
                                <span>{item.jobName}</span>
                            </div>}
                            description={<div>
                                <span>状态: {item.statusName}</span>&nbsp;&nbsp;<span>日期: {item.regDate}</span>
                            </div>}
                        />
                    </List.Item>
                )}
            />
        )
    }
}

export default withRouter(ApplicationList)