import express from 'express';
import { getBooks, addBook, editBook, deleteBook } from '../controllers/books.js';

const router = express.Router();

router.get('/', getBooks);
router.post('/', addBook);
router.patch('/:id', editBook);
router.delete('/:id', deleteBook);

export default router;