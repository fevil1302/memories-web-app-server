import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();


app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use('/posts',postRoutes);

// const CONNECTION_URL = 'mongodb+srv://fevilpatel1302:fevupatel1302@cluster0.bhmzp.mongodb.net/MemoriesDB?retryWrites=true&w=majority';

const PORT = process.env.PORT || 6000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser:true , useUnifiedTopology:true})
    .then(()=>{app.listen(PORT,()=> console.log(`Server is running on port:${PORT}`))})
    .catch((error)=>{console.log(error.message)});

mongoose.set('useFindAndModify',false);