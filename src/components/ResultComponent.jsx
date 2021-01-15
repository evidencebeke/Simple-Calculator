import React, { Component } from 'react'; 
class ResultComponent extends Component {
    state = {  }
    render() { 
        let {result} = this.props
        return (
            <div className = 'result'>
                <p>{result}</p>
            </div>
        );
    }
}
 
export default ResultComponent;