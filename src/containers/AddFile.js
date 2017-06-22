import AddFile from '../components/AddFile'
import { connect } from 'react-redux'
import { readFile } from '../actions/index.js'

function mapDispatchToProps(dispatch) {
    return {
        onAddFile: onAddFile(dispatch)
    }
}

function onAddFile(dispatch) {
    return (e)=>{
        dispatch(readFile(e.target.files[0]))
    }
}

export default connect(()=>{return{}}, mapDispatchToProps)(AddFile)