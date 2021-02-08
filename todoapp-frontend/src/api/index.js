import axios from 'axios';

const url = 'https://react-todo-task-app.herokuapp.com/api/todos';



export const fetchTodos = () => axios.get(url);

export const createTodo = (newTodo) => axios.post(url ,newTodo);

export const updateTodo = (id,updateTodo) => axios.patch(`${url}/${id}`, updateTodo);


export const deleteTodo = (id) => axios.delete(`${url}/${id}`);

export const statusUpdateTodo = (id,statusUpdateTodo) => axios.patch(`${url}/${id}/statusupdate`, statusUpdateTodo);