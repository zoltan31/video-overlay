import app from "./app";
import { Auction } from "./app";
import { Server } from "socket.io";
import * as http from "http";

const port = 5000;

const server = http.createServer(app);
const io = new Server(server, {cors: {origin: "*"}});

app.post("/api/auction/postlicit", async (_request, response) => {
	let _licit = _request.body.licit;
	let _userId = _request.body.userId;
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
    io.sockets.emit('licit event', `${_userId} made bid: +${_licit}$`);
	response.sendStatus(200);
})

server.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});
