import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Image, message } from 'antd'
import axios from 'axios'
import { FormProvider } from 'antd/lib/form/context'
class PosterDetailList extends Component {

    componentDidMount() {
        message.info({
            content: '请点击上面图片，然后长按，转发给朋友。',
            style: {
                color: 'red'
            },
        }, 10)
    }

    render() {
        if (!this.props.refer.poster) {
            return (<>Loading...</>)
        }
        return (
            <div>
                <Image src={axios.defaults.baseURL + this.props.refer.poster} />
                <span>请点击上面图片，然后长按，转发给朋友。</span>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    refer: state.refer
})


export default withRouter(connect(mapStateToProps, null)(PosterDetailList))
