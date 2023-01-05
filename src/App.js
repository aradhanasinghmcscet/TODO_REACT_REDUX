import React, { useState } from 'react'
import { Form } from './componets/form'
import { Todos } from './componets/todos'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAll } from './redux/todoapp/actions'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.operationsReducers)
  const [editFormVisible, setEditFormVisble] = useState(false)
  const [editTodo, setEditTodo] = useState('')

  const handleEditClick = (todo) => {
    setEditFormVisble(true)
    setEditTodo(todo)
  }
  const cancelUpdate = () => {
    setEditFormVisble(false)
  }
  return (
    <div className="App">
      <h1>React-Redux TODOS App</h1>
      <Form
        editFormVisible={editFormVisible}
        editTodo={editTodo}
        cancelUpdate={cancelUpdate}
      />
      <br />
      <Todos
        handleEditClick={handleEditClick}
        editFormVisible={editFormVisible}
      />
      {todos.length > 1 && (
        <button
          className="btn btn-danger btn-md delete-all"
          onClick={() => dispatch(deleteAll())}
        >
          Delete All
        </button>
      )}
    </div>
  )
}

export default App
