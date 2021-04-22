import app from "./app";
import { Auction } from "./app";
import { Server } from "socket.io";
import * as http from "http";
import * as fs from "fs";
import User from "./models/user";

const port = 5000;

app.get("/", function (req, res) {
	res.sendFile("app.component.html", {root: "../app/src/app/"});
  });

app.get("/video", function (req, res) {
	// Ensure there is a range given for the video
	const range = req.headers.range;
	if (!range) {
	  res.status(400).send("Requires Range header");
	}
  
	// get video stats (about 61MB)
	const videoPath = "bigbuck.mp4";
	const videoSize = fs.statSync("bigbuck.mp4").size;
  
	// Parse Range
	// Example: "bytes=32324-"
	const CHUNK_SIZE = 10 ** 6; // 1MB
	const start = Number(range.replace(/\D/g, ""));
	const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
  
	// Create headers
	const contentLength = end - start + 1;
	const headers = {
	  "Content-Range": `bytes ${start}-${end}/${videoSize}`,
	  "Accept-Ranges": "bytes",
	  "Content-Length": contentLength,
	  "Content-Type": "video/mp4",
	};
  
	// HTTP Status 206 for Partial Content
	res.writeHead(206, headers);
  
	// create video read stream for this particular chunk
	const videoStream = fs.createReadStream(videoPath, { start, end });
  
	// Stream the video chunk to the client
	videoStream.pipe(res);
  });
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
	response.setHeader("Content-Type", "application/json");
	response.status(200);
	response.send(_request.body);
})

app.post("/api/auction/adduser", async (request, response) => {
	const username = request.body.username;
	const user = new User({name: username});
	user.save();
	response.setHeader("Content-Type", "application/json");
	response.status(200);
	response.send(request.body);
});

server.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});
