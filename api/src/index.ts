import app from "./app";
import { Auction } from "./app";
import { Server } from "socket.io";
import * as http from "http";

const port = 5000;

const server = http.createServer(app);
const io = new Server(server, {cors: {origin: "*"}});

//io.on('connection', async (socket) => {
	//console.log('a user connected');
	//let price: number;
	//await Auction.findOne((err, entity) => 
	//{
		//price = entity.price;
	//});
	//console.log(price);
	//socket.emit('price', price);
//});

app.post("/api/auction/postlicit", async (_request, response) => {
	let _licit = _request.body.licit;
	let price: number;
	await Auction.findOne((err, entity) => 
	{
		price = entity.price;
	});
	await Auction.updateOne(
		{id: 1},
		{price: _licit + price},
	);
	io.sockets.emit('price', price + _licit);
	response.sendStatus(200);
})

server.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});
