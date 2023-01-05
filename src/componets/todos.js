import React from 'react'
import Icon from 'react-icons-kit';
import {trashO} from 'react-icons-kit/fa/trashO'
import { pencil } from 'react-icons-kit/fa/pencil';
import { useSelector, useDispatch } from 'react-redux';
import {handleCheckbox, removeTodo} from '../redux/todoapp/actions';


export const Todos = ({handleEditClick, editFormVisible}) => {
  const dispatch = useDispatch();
    const todos = useSelector((state) =>state.operationsReducers);
    
    console.log("todos", todos);
  return todos.map((todo) =>(
    (
        <div key={todo.id} className='todo-box'>
        <div className='content'> 
        {editFormVisible === false && (<input type='checkbox' checked={todo.completed} 
        onChange={()=> dispatch(handleCheckbox(todo.id))}/>)}     
        <p className='todo-texts' style={todo.completed===true ? {textDecoration:'line-through'}:{textDecoration:'none'}}>
        {todo.todo}
        </p> 
        {editFormVisible === false && ( 
          <div className='action-box pull-right'>
        <span onClick={()=> handleEditClick(todo)}><Icon icon={pencil} /></span>
        <span onClick={()=>dispatch(removeTodo(todo.id))}><Icon icon={trashO} /></span>
        </div> )} 
            
        </div>      

        </div>
      )
  ))
}
