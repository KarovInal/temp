import React, { Component } from 'react'

class AddFile extends Component {
    onPrint() {
        window.print();
    }
    render() {
        return (
            <div className="add-file">
                <label className="custom-file-upload">
                    <input 
                        type="file"
                        onChange={(e)=>{this.props.onAddFile(e)}}/>
                    +
                </label>
                <label
                    className="print-file"
                    onClick={this.onPrint}>
                    <img src="./src/img/print.png" />
                </label>
            </div>
        )
    }
}

export default AddFile;