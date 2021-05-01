import * as express from "express";
import * as cors from "cors";
import * as mongoose from "mongoose";
import Auction from "./models/auction";
import * as http from "http";
import VideoRouter from "./video/video";
import AuctionRouter from "./auction/auction";
import { Server } from "socket.io";

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

export const server = http.createServer(app);
export const io = new Server(server, {cors: {origin: "*"}});

app.use("/api/auction", AuctionRouter);
app.use("/video", VideoRouter);
app.get("/", (_request, response) => {
	response.send("Hello World!");
});

export default app;