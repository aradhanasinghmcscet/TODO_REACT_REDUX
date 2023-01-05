import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, handleEditSubmit } from '../redux/todoapp/actions'

export const Form = ({editFormVisible, editTodo, cancelUpdate}) => {
  const dispatch = useDispatch()
  const [todoValues, setTodoValues] = useState('')
  const [editValue, setEditValue] = useState('')

  useEffect(() => {
    setEditValue(editTodo.todo)
  }, [editTodo])
  const handleSubmit = (e) => {
    e.preventDefault()
    let date = new Date()
    let time = date.getTime()
    let todoObj = {
      id: time,
      todo: todoValues,
      completed: false,
    }
    setTodoValues('')
    dispatch(addTodo(todoObj))
  }
  const editSubmit = (e) => {
    e.preventDefault()
    let editObj = {
      id: editTodo.id,
      todo: editValue,
      completed: false,
    }
    dispatch(handleEditSubmit(editObj))
  }

  return (
    <div>
      {editFormVisible === false ? (
        <form className="form-group custom-form" onSubmit={handleSubmit}>
          <label className="custom-form">Add TODOs</label>
          <input
            type="text"
            className="form-control custom-control controls"
            required
            value={todoValues}
            onChange={(e) => setTodoValues(e.target.value)}
          />
          <button type="submit" className="btn btn-secondary btn-md controls">
            Add
          </button>
        </form>
      ) : (
        <form className="form-group custom-form" onSubmit={editSubmit}>
          <label className="custom-form">Update TODOs</label>
          <input
            type="text"
            className="form-control custom-control controls"
            required
            value={editValue || ''}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button type="submit" className="btn btn-secondary btn-md controls">
            Update
          </button>
          <button className='btn btn-primary' onClick={cancelUpdate}>Back</button>
        </form>
      )}
    </div>
  )
}
