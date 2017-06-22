import React, {Component} from 'react'
import Input from '../components/Input'
import { connect } from 'react-redux'
import getData from '../actions/index.js'

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        clickButton: function(value) {
            dispatch(getData(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)