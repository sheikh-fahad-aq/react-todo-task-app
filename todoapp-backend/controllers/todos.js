import Todo from '../models/todo.js';
import mongoose from 'mongoose';

export const getTodos = async (req,res) => {

     try {
        const todos = await Todo.find();
        res.status(200).json(todos);

     } catch (error) {
        res.status(404).json({'message':error.message});   
     }

}


export const createTodo = async (req,res) => {
    const todo = req.body;

    const newTodo = new Todo(todo);
    
    try {

       await newTodo.save();
       res.status(201).json(newTodo);

    } catch (error) {
       res.status(409).json({'message':error.message});   
    }

}

export const updateTodo = async (req,res) => {
   const { id  : _id } = req.params;

   const post = req.body;


   if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No todo with that id");

   try {

      const updateTodo = await Todo.findByIdAndUpdate(_id, post , {new : true } );

      res.status(200).json(updateTodo);  

   } catch (error) {

      res.status(409).json({'message':error.message});   
   }

}

export const deleteTodo = async (req,res) => {
   const { id  : _id } = req.params;

   if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No todo with that id");

   try {

      await Todo.findByIdAndRemove(_id);

      res.status(200).json({'message' : 'Post Deleted'});  

   } catch (error) {

      res.status(409).json({'message':error.message});   
   }

}

export const statusTodo = async (req,res) => {
   
   const { id  : _id } = req.params;

   const post = req.body;


   if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No todo with that id");

   try {

      const updateTodo = await Todo.findByIdAndUpdate(_id, post , {new : true } );

      res.status(200).json(updateTodo);  

   } catch (error) {

      res.status(409).json({'message':error.message});   
   }

}