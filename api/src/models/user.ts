import * as mongoose from 'mongoose';

const userSchema: mongoose.Schema = new mongoose.Schema({
    name: String,
    bid: Number
});

const User = mongoose.model('User', userSchema);

export default User;