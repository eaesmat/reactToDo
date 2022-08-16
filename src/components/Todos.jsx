import React, { Component } from 'react'
import TodoForm from './TodoForm'
import shortid from 'shortid'

class Todos extends Component {
  state = {
    error:'',
    todo:'',
    todos: [
      {
        id:1,
        item: 'Go to work',
        isEdited:true,
        isComplete: false,
      },
      {
        id:2,
        item: 'Finish project',
        isEdited:false,
        isComplete: false,
      },
      {
        id:3,
        item: 'Visit family',
        isEdited:false,
        isComplete: false,
      },
    ]
  }

   // change event method
   handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]:value
    })
  }

  // submit event method
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.todo === ''){
      this.setState({
        error:'please add your todo item!'
      })
      setTimeout(() => {
        this.setState({
          error:''
        })
      }, 2000);
    }else {
      const newItem = {
        id: shortid.generate(),
        item: this.state.todo,
        isEdited:false,
        isComplete:false
      }
      this.addNewTodo(newItem)
      this.setState({
        todo:''
      })
    }
  }

  addNewTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  handleDelete = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !==id)
    this.setState({
      todos
    })
  }

  handleEdit = (id) => {
    const todo = this.state.todos.find(todo => todo.id === id);
    this.setState({
      todo: todo.item
    })
    this.handleDelete(id);
  }

  handleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
        }
        return todo
      })
    })
  }

  handleClear = () => {
    this.setState({
      todos:[]
    })
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <li className='border p-2 d-flex justify-content-between my-2' key={todo.id}>
            <div>
            <input type="checkbox" className='me-2' onChange={()=>this.handleComplete(todo.id)} checked={todo.isComplete}/>
            <span className={todo.isComplete? "text-decoration-line-through": "text-decoration-none"}>{todo.item}</span>
            </div>
            <span>
            <i className="fa-solid fa-pen text-success me-2 list-icons" onClick={()=>this.handleEdit(todo.id)}></i>
            <i className="fa-solid fa-trash text-danger list-icons" onClick={()=> this.handleDelete(todo.id)}></i>
            </span>
      </li>
    ))
    return (
      <div>
        {/* form conponent */}
        <TodoForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} todo={this.state.todo} error={this.state.error}/>
        <h2 className='fw-bold text-center my-4'>
          {this.state.todos.length?"Available Todos":"No todos Available!"}
        </h2>
        <ul className='list-unstyled'>
          {todos}
        </ul>
        <button className='form-control bg-danger text-white' onClick={this.handleClear}>Clear todos</button>
      </div>
    )
  }
}

export default Todos