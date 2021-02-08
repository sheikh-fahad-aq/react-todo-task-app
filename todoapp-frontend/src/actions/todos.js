import * as api from '../api';

// Actions Todos

export const getTodos = () => async (dispatch) => {

    try {
        const {data} = await api.fetchTodos();
        dispatch({type : 'FETCH_ALL' , payload : data })

    } catch(error){

        console.log(error)

    }

}

export const createTodo = (todo) => async (dispatch) => {

    try {
        
        const {data} = await api.createTodo(todo);
        dispatch({type : 'CREATE' , payload : data })

    } catch(error){

        console.log(error)

    }

}

export const updateTodo = (id,todo) => async (dispatch) => {

    try {
        
        const {data} = await api.updateTodo(id,todo);

        dispatch({type : 'UPDATE' , payload : data })

    } catch(error){

        console.log(error)
    }

}

export const deleteTodo = (id) => async (dispatch) => {

    try {
        
        await api.deleteTodo(id);

        dispatch({type : 'DELETE' , payload : { _id : id } })

    } catch(error){

        console.log(error)
    }

}

export const statusUpdateTodo = (id,todo) => async (dispatch) => {

    try {
        
        const {data} = await api.statusUpdateTodo(id,todo);

        dispatch({type : 'STATUS_UPDATE' , payload : data })

    } catch(error){

        console.log(error)
    }

}
