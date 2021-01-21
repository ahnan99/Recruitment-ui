import React, { Component } from 'react'
import { Collapse } from 'antd';

const { Panel } = Collapse;

class JobCollapse extends Component {

    render() {
        return (
            <Collapse onChange={this.callback}>
                <Panel header="This is panel header with arrow icon" key="1">
                    <p>Descriptition</p>
                </Panel>
                <Panel header="This is panel header with arrow icon" key="2">
                    <p>Descriptition</p>
                </Panel>
                <Panel header="This is panel header with arrow icon" key="3">
                    <p>Descriptition</p>
                </Panel>
                <Panel header="This is panel header with arrow icon" key="4">
                    <p>Descriptition</p>
                </Panel>
                <Panel header="This is panel header with arrow icon" key="5">
                    <p>Descriptition</p>
                </Panel>
            </Collapse>
        )
    }
}

export default JobCollapse;