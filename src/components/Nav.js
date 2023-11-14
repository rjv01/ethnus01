import {Component} from 'react';

export class Nav extends Component{
    render(){
        return(
            <div>
                <h1>Age {this.props.age}</h1>
            </div>
        )
    }
}