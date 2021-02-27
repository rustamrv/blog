import mongoose from 'mongoose'; 
import { port, mongoUri } from '../config/default.json'
import PostController from './controllers/PostController';
import BodyParser from 'body-parser';
import express from 'express';  

const app = express();
const PORT = port || 5000

const Post = new PostController();

mongoose.connect(mongoUri);

app.use(BodyParser.urlencoded({extended:true}));
app.use(BodyParser.json());
 
app.get('/posts', Post.index);    
app.post('/posts', Post.create);
app.get('/posts/:id', Post.read); 
app.delete('/posts/:id', Post.delete); 
app.put('/posts/:id', Post.update);

app.listen(PORT);
