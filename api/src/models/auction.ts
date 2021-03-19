const mongoose = require("mongoose")

// Auctions only have a name for now
const auctionSchema = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model('Auction', auctionSchema)