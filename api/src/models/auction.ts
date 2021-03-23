import * as mongoose from 'mongoose';

// Auctions only have a name for now
const auctionSchema: mongoose.Schema = new mongoose.Schema({
    name: String
});

export default mongoose.model('Auction', auctionSchema);