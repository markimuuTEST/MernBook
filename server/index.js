import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bookRoutes from './routes/books.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true}));
app.use(express.urlencoded({ limit: '30mb', extended: true}));
app.use(cors());
app.use('/books', bookRoutes);

const CONNECTION_URL = "mongodb+srv://Books:nGnTP4MAPjmO25CU@bookcluster.r6agk.mongodb.net/BookCluster?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3001;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));