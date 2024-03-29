import React,{Component} from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions'
import TodoItem from './TodoItem'

const TodoList = (props) => {
    
    return (
        <ul className="list-group">
            {
                props.todos.map((item,index) => {
                    return <TodoItem  id={item.id} text={item.text} 
                                      done={item.done}
                                      index={index}
                            />
                })
            }
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: [...state.todos]
    }
}

export default connect(mapStateToProps,actions)(TodoList);
