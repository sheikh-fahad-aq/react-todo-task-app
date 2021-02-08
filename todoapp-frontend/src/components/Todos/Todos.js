import React from 'react';
import {useSelector} from 'react-redux';
import {Grid, CircularProgress} from '@material-ui/core';


import Todo from './Todo/Todo';
import useStyles from './Styles'


    
const Todos = ({setCurrentId}) => {
    const todos = useSelector((state)=> state.todos);

    const classes = useStyles();

    return (
        !todos.length ? <CircularProgress />: (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {todos.map((todo) => (
                        <Grid key={todo._id} item xs={12} sm={6}>
                            <Todo todo={todo} setCurrentId={setCurrentId} />
                        </Grid>
                ))}

            </Grid>
        ) 
    );
};

export default Todos;