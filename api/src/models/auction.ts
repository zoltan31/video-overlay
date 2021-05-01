import * as mongoose from 'mongoose';

// Auctions only have a name for now
const auctionSchema: mongoose.Schema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    licit: Number
});

const Auction = mongoose.model("Auction", auctionSchema);

export default Auction;