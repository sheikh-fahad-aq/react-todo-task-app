import React from 'react';
import {Card, CardActions , CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './Styles';
import {useDispatch} from 'react-redux';
import { deleteTodo , statusUpdateTodo } from '../../../actions/todos';

import tasks from '../../../images/tasks.png';

const Todo = ({todo , setCurrentId}) => {

    const classes = useStyles();

    const dispatch = useDispatch();


    const deletetodo = (id) => {
        dispatch(deleteTodo(id));
    }

    const statustodo = (id,todo) => {

        todo.done = !todo.done;

        dispatch(statusUpdateTodo(id,todo));

    }

    return (
        
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={todo.selectedFile ? todo.selectedFile  : tasks } title={todo.title} />
            <div className={classes.overlay}>
               <Typography variant="h6">{todo.title}</Typography>   
               <Typography variant="body2">{moment(todo.createAt).fromNow()}</Typography>   
            </div>
            <div className={classes.overlay2}>
                <Button size="small" style={{color: 'white'}} onClick={()=> setCurrentId(todo._id) }>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>{todo.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
            { todo.done ? <h3 style={{color  : 'green',  fontSize : 'bold', margin : '10px'}}> Completed</h3> : 
                <Button size="small" style={{color:'blue'}} onClick={()=>{ statustodo(todo._id,todo)}}>
                    <CheckBoxIcon fontSize="small" />
                    Complete
                </Button>
            }
            <Button size="small" style={{color:'red'}} onClick={()=> deletetodo(todo._id)}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
            

        </Card>

    );
};

export default Todo;