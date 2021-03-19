import * as express from "express";

const app = express();
const port = 5000;

// enabling 'http://localhost:4200' to use the api
var cors = require('cors');
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 
};
app.use(cors(corsOptions));

// connect to DB
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/auction-dev", {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

const Auction = require('./models/auction');

// insert new object into DB
// I don't know how to delete objects from previous sessions 😅
// But it works for now
const first_auction = new Auction ({name: "Auction Name From MongoDB🔥"});
try {
	first_auction.save();
} catch (error) {
	console.error(error.message);
}

app.get("/", (_request, response) => {
	response.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});

app.get("/api/auction/", async (_request, response) => {
	try {
		const auction = await Auction.find();
		response.json(auction[0]); // there is one auction, so only the first will be returned
	} catch (err) {
		response.status(500).json({message: err.message});
	}
});