import React,{Component} from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions'

class AddForm extends Component{
  
 state = {
     text: ""
 }

 handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
 }
 handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.text)
 }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-inline" >
            <input type="text" name="text" className="form-control" value={this.state.text} onChange={this.handleChange}  />
            <button type="submit" className="btn btn-secondary">ADD</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: [...state.todos]
  }
}

export default connect(mapStateToProps,actions)(AddForm);
