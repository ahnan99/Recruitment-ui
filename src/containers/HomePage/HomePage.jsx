import React, { Component } from 'react'
import JobCollapse from '../../components/JobCollapse/JobCollapse'
import { Collapse } from 'antd';

const { Panel } = Collapse;
class HomePage extends Component {

    callback(key) {
        console.log(key);
      }


    render() {
        return (
            <div>
                <JobCollapse/>
            </div>
        )
    }

}

export default HomePage