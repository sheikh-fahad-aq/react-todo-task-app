const reducers = ( todos = [] , action ) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [ ...todos, action.payload ];
        case 'UPDATE':
        case 'STATUS_UPDATE':
                return todos.map((todo) => todo._id  === action.payload._id  ? action.payload : todo);
        case 'DELETE':
            return todos.filter((todo) => todo._id  !== action.payload._id );          
        default:
           return todos
    }
}

export default reducers;