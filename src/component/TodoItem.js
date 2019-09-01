import React,{Component} from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions'

class TodoItem extends Component{

    handleClick = (e) => {
        // console.log(e.target.name)
        (!e.target.name && this.props.doneTodo(this.props.id))
    }

    render(){
        //console.log(this.props)
        const {id,text,done} = this.props
        console.log(done)
        const markDone = done ? "done" : "undone";
        return (
            <li className={"list-group-item " + markDone} onClick={this.handleClick}>
                <h4 style={{display: 'inline'}}>{text}</h4>
                <button type="button" name="button" className="close" onClick={()=> this.props.removeTodo(id)}>&times;</button>
            </li>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: [...state.todos]
    }
}
export default connect(mapStateToProps,actions)(TodoItem);
