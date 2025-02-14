
import { Component } from "react";

class Toggle extends Component{
    constructor (){
        super()
        this.state={
            name:"tirumala",
            flag:true
        }
    }

    handle=()=>{
        this.setState({flag:!this.state.flag})
    }
    render(){
        return (
            <>
            <h1>Toggle:</h1>
            {/* <input type="password" placeholder="password" value={this.name} />
             */}
            <h3>{this.state.flag&&this.state.name}</h3>
            
            <button onClick={this.handle}>{this.state.flag?"hide":"show"}</button>

            </>
        )
    }
}

export default Toggle