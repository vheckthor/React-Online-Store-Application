import React from "react"
import {getFunName} from "../helpers"

class StorePicker extends React.Component{

    clientInput = React.createRef();
    
  
  goToStore= event => {
        event.preventDefault();
        
        const NewPage = this.clientInput.current.value;

        this.props.history.push(`/store/${NewPage}`);
    };

    render(){
        return(
            // <>
            <form className = "store-selector" onSubmit = {this.goToStore}>
                <h2>Please Select a Store</h2>
                <input 
                    type = "text" 
                    ref = {this.clientInput}
                    required
                    // id="num"
                    placeholder="Store Name" 
                    defaultValue={getFunName()}
                />
                <button type="submit">Visit Store =></button>
            </form>
            // </>
        )
    }
}

export default StorePicker;