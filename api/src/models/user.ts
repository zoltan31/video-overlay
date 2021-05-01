import * as mongoose from 'mongoose';

const userSchema: mongoose.Schema = new mongoose.Schema({
    name: String,
});

const User = mongoose.model('User', userSchema);

export default User;