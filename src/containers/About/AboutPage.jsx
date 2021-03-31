import React, { Component } from 'react'
import axios from 'axios'

export default class AboutPage extends Component {
    render() {
        return (

            <div style={{ textAlign: 'left' }}>
                <h3 style={{ color: 'gray' }}>人力资源机构介绍</h3>
                <p style={{ color: 'gray' }}>上海用勤人力资源公司总部位于上海，是上海市人力资源和社会保障局审批通过后备案的专业人力资源公司，拥有为各类企业服务的丰富经验，可以为企业提供全方面的专业、务实、个性各选的人力资源服务方案。</p>
                <h3 style={{ color: 'gray' }}>培训机构介绍</h3>
                <p style={{ color: 'gray' }}>上海智能消防学校是办学质量最高等级A级学校，学校党支部被静安区党工委评定为5星级党组织。学校职业能力培训资质齐全，有：消防、电工、焊工、制冷、弱电、电梯、水电工、物业管理等职业工种。
                学校实训设施设备齐全，师资力量强大，长期为企业培养和输送专业技术人才。</p>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ color: 'orange' }}>联系我们</p>
                    <img src={axios.defaults.baseURL + "/public/images/QR_weixin.jpg"} style={{ width: 100 }} />
                </div>
            </div>

        )
    }
}
