import * as mongoose from 'mongoose';

const userSchema: mongoose.Schema = new mongoose.Schema({
    name: String,
});

export default mongoose.model('User', userSchema);