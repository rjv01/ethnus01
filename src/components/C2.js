import { Component } from "react"
import C3 from './C3';
class C2 extends Component{
    
    constructor() {
        super();
            console.log("I am constuctor");
            this.state = {brand:"nike",toggle:true}
    }

    static getDerivedStateFromProps(){
        console.log("I am getDerivedStateFromProps")
        return null;
    }
    
    componentDidMount(){
        console.log("I am componentDidMount method");
    }

    render(){
        console.log("I am render method");
        return(
            <div>
                <h1>LifeCycle methods</h1>
                <p>{this.state.brand} </p>
                <button onClick={()=>{this.setState({brand:"addidas"})}}>Click</button>
                {
                    (this.state.toggle)? <C3 />:null
                }
                <button onClick={()=>{this.setState({toggle:false})}}>Unmount</button>
            </div>
        )
    }
}

export default C2