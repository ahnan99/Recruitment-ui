import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Image, message, Affix } from 'antd'
import axios from 'axios'
import { FormProvider } from 'antd/lib/form/context'
class PosterDetailList extends Component {

    componentDidMount() {
        message.info({
            content: '请点击上面图片，然后长按，转发给朋友。',
            style: {
                color: 'red'
            },
        }, 30)


    }



    constructor(props) {
        super(props)
        this.state = {
            visible: true
        }
    }

    render() {
        if (!this.props.refer.poster) {
            return (<>Loading...</>)
        }
        return (
            <div>
                <Image src={axios.defaults.baseURL + this.props.refer.poster} onClick={() => { this.setState({ visible: false }) }} />
                <span>请点击上面图片，然后长按，转发给朋友。</span>
                {this.state.visible ? <Affix style={{ marginTop: '10vh', paddingTop:'10px', paddingBottom:'10px' }} offsetBottom={10}>
                    <div style={{ backgroundColor: 'orange', width: '100%', height:'50px', paddingTop:'12px', fontSize: "1.3em", fontWeight: 'bold', color: "red" }}>
                        <>转发推荐岗位成功有奖励</>
                    </div>
                </Affix> : null}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    refer: state.refer
})


export default withRouter(connect(mapStateToProps, null)(PosterDetailList))
