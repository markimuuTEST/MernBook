import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    Title: String,
    Author: String,
    Description: String, 
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostBook = mongoose.model('PostBook', postSchema);

export default PostBook;