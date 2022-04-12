import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));

app.use(cors());

const CONNECTION_URL =  'mongodb://127.0.0.1/socialMediaDataBase';
const PORT = process.env.PORT || 5000;
app.use('/posts', postRoutes);

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log("Server Running on Port 5000")))
.catch((error) => console.log(error));
