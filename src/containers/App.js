import React, {Component} from 'react'
import ShowData from './ShowData'
import InputContainer from './InputContainer'
import AddFile from './AddFile'

class App extends Component {
    render() {
        return (
            <div>
                <AddFile />
                <InputContainer />
                <ShowData />
            </div>
        )
    }
}

export default App