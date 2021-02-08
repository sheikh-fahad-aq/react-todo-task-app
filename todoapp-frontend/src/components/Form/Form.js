import React, {useState,useEffect} from 'react';
import { TextField , Button , Typography , Paper} from '@material-ui/core'
import FileBase from 'react-file-base64';
import {useDispatch,useSelector} from 'react-redux';
import {createTodo,updateTodo} from '../../actions/todos';


import useStyles from './Styles';

const Form = ({currentId , setCurrentId}) => {


    const todo = useSelector((state)=>  currentId ? state.todos.find((t) => t._id === currentId) : null);

    const [todoData,setTodoData] = useState({
        title : "" , description : "", selectedFile : "" , done : false
    })


    const classes = useStyles();
    const dispatch = useDispatch();
    
    
    useEffect(()=>{
        if(todo){
            setTodoData(todo);
        }
    },[todo])


    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId){
            dispatch(updateTodo(currentId,todoData))
        }else{
            dispatch(createTodo(todoData))
        }
        
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setTodoData({
            title : "" , description : "", selectedFile : "" , done : false
        });
    }


    return (

        <Paper className = {classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Edit': 'Create' } Task</Typography>
                <TextField name="title" variant="outlined" required label="Title" fullWidth value={todoData.title} onChange={(e) => setTodoData({...todoData , title : e.target.value})} />
                <TextField name="description" variant="outlined" required label="Description" fullWidth value={todoData.description} onChange={(e) => setTodoData({...todoData , description : e.target.value})} />
                <div className={classes.fileInput}><FileBase type="file" required multiple={false} onDone={({base64}) => setTodoData({...todoData , selectedFile : base64})} /></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>

        </Paper>
    );
};

export default Form;