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
	const firstAuction = new Auction({id: 1, name: "Auction Name From MongoDb 🔥", price: 1000, licit: 100});
	Auction.countDocuments({ id: 1 }, (err, count) => count === 0 && firstAuction.save());
}

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json())

testDb();

app.get("/", (_request, response) => {
	response.send("Hello World!");
});

app.get("/api/auction/", async (_request, response) => {
	try {
		const auction = await Auction.find();
		response.json(auction[0]); // there is one auction, so only the first will be returned
	} catch (err) {
		response.status(500).json({message: err.message});
	}
});

//app.post("/api/auction/postlicit", async (_request, response) => {
	//let _licit = _request.body.licit;
	//let price: number;
	//await Auction.findOne((err, entity) => 
	//{
		//price = entity.price;
	//});
	//await Auction.updateOne(
		//{id: 1},
		//{price: _licit + price},
	//);
	//response.sendStatus(200);
//})

export { Auction };
export default app;