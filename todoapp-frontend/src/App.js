import React,{useState, useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {getTodos} from './actions/todos.js';


import Form from './components/Form/Form';
import Todos from './components/Todos/Todos';
import tasks from './images/tasks.png';
import useStyles from './styles'

import './index.css'

const App = () =>{

    const [currentId,setCurrentId] = useState(null);

    const classes = useStyles();
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getTodos());
    },[currentId,dispatch])

    return (

        <Container maxidth='lg'>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography  className={classes.heading} variant="h2" align="center">Task App</Typography>
                <img src={tasks}  className={classes.image} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Todos setCurrentId={setCurrentId}  />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>


    )
}

export default App;