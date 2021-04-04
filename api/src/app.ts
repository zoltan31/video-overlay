import * as express from "express";
import * as cors from "cors";
import * as mongoose from "mongoose";
import Auction from "./models/auction";

const app = express();

async function testDb() {
	// connect to DB
	mongoose.connect("mongodb://localhost/auction-dev", {useNewUrlParser: true, useUnifiedTopology: true});
	const db = mongoose.connection;
	db.on('error', (error) => console.error(error));
	db.once('open', () => console.log('Connected to Database'));
	// insert new object into DB
	const firstAuction = new Auction({name: "Auction Name From MongoDB🔥"});
	Auction.countDocuments({ name: "Auction Name From MongoDB🔥" }, (err, count) => count === 0 && firstAuction.save());
}

const corsOptions = {
  origin: 'http://localhost:5000',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.get("/", (_request, response) => {
	response.send("Hello World!");
});

app.get("/api/auction/", async (_request, response) => {
	try {
		await testDb();
		const auction = await Auction.find();
		response.json(auction[0]); // there is one auction, so only the first will be returned
	} catch (err) {
		response.status(500).json({message: err.message});
	}
});

export default app;
