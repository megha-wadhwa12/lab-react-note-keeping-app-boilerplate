import React from 'react';
import './Editor.css';

class Editor extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            value: '',
        }
    }
    handleChange = (e)=>{
        this.setState({value: e.target.value})
        // console.log("e.target.value: ", e.target.value);
    }
    

    render(){
        return (
            <div className="container grid">
                <div className="input">
                    <h3>Input</h3>
                    <textarea className="input-text" onChange={this.handleChange} defaultValue={this.state.value}/>

                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="output-text">{this.state.value}</div>
                </div>                
            </div>
        )
    }
}

export default Editor;