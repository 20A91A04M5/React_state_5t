
import { Component } from "react"


class Counter extends Component{
    constructor(){
        super()
        this.state={
            name:"",
            count:0,
            flaginc:false,
            flagdec:false,
            item:"",
            list:[]
        }
    }

    inchandle=()=>{
        this.setState({count:this.state.count+1})
        if(this.state.count>=10){
            this.setState({count:10})
            
        }
    }
    resethandle=()=>{
        this.setState({count:0})
        this.setState({flaginc:false})
        this.setState({flagdec:false})
    }
    dechandle=()=>{
        this.setState({count:this.state.count-1})
        if(this.state.count<=0){
            this.setState({count:0})
            // this.setState({flagdec:true})
        }
    }
    names=(e)=>{
        this.setState({name:e.target.value})
    }

    

    handleadd=()=>{
        this.setState({list:[...this.state.list,this.state.item]})
    }
    
    delhandle=()=>{
        const newList = this.state.list.filter((item, index) => index !== this.state.list.indexOf(this.state.item));
        this.setState({ list: newList });
    }

    render(){
        return(
            <>
            <h1>{this.state.name}</h1>
            <input type="text" placeholder="Names" onChange={this.names}/>
            <h1>Counter:{this.state.count}</h1>
            {/* <button disabled={this.state.flaginc?this.state.flaginc:""} onClick={this.inchandle}>Inc</button> */}
            <button disabled={this.state.count>=10} onClick={this.inchandle}>Inc</button>
            <button onClick={this.resethandle}>Reset</button>
            {/* <button disabled={this.state.flagdec?this.state.flagdec:""}onClick={this.dechandle}>Dec</button> */}
            <button disabled={this.state.count<=0}onClick={this.dechandle}>Dec</button>
            <br />
            <input type="text" placeholder="enter task" onChange={(e)=>{this.setState({item:e.target.value})}}/>
            <button onClick={this.handleadd}>Add</button>
            <div style={{border:"2px groove blue"}}>
                <ul>
                    {this.state.list.map((val,ind)=>(
                        <>
                        <li style={{listStyle:"none"}}>{val}</li>
                        <button onClick={this.delhandle}>Delete</button>
                        </>
                    ))}
                </ul>
            </div>
            </>
        )
    }
}

export default Counter
