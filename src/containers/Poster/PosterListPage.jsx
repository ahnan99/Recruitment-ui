import React, { Component } from 'react'
import { connect } from 'react-redux'
import PosterList from '../../components/PosterList/PosterList'

class PosterListPage extends Component {
    render() {
        return (
            <div>
                <PosterList />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    refer: state.refer
})


export default connect(mapStateToProps, null)(PosterListPage)
