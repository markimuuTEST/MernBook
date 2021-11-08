import mongoose from 'mongoose';
import PostBook from "../models/postBook.js";


export const getBooks = async (req, res) => {
    try {
        const allBooks = await PostBook.find();

        res.status(200).json(allBooks);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const addBook = async (req, res) => {
    const book = req.body;
    const newBook = new PostBook(book);

    try {
        await newBook.save();

        res.status(201).json(newBook);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const editBook = async (req, res) => {
    const { id: _id } = req.params;
    const book = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No book with that id');

    const editedBook = await PostBook.findByIdAndUpdate(_id, {...book, _id}, { new: true });

    res.json(editedBook);
}

export const deleteBook = async (req, res) => {
    const { id: _id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No book with that id');

    await PostBook.findByIdAndDelete(_id);

    res.json({ message: 'Book deleted successfully' })
}