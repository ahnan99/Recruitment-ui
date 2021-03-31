import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Image } from 'antd'
import axios from 'axios'
import { FormProvider } from 'antd/lib/form/context'
class PosterDetailList extends Component {
    render() {
        if (!this.props.refer.poster) {
            return (<>Loading...</>)
        }
        return (
            <div>
                <Image src={axios.defaults.baseURL + this.props.refer.poster} />
                <span>请点击图片，然后长按，转发给微信里的朋友。</span>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    refer: state.refer
})


export default withRouter(connect(mapStateToProps, null)(PosterDetailList))
