import * as mongoose from 'mongoose';

// Auctions only have a name for now
const auctionSchema: mongoose.Schema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    licit: Number
});

export default mongoose.model('Auction', auctionSchema);