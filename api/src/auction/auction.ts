import * as express from "express";
import Auction from "../models/auction";
import User from "../models/user";
import { io } from "../app";

const router = express.Router();

router.get("/", async (_request, response) => {
    try {
        const auction = await Auction.find();
        response.json(auction[0]); // there is one auction, so only the first will be returned
    } catch (err) {
        response.status(500).json({message: err.message});
    }
});

router.post("/postlicit", async (_request, response) => {
    let _licit = _request.body.licit;
    let _username = _request.body.username;
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
    io.sockets.emit('licit event', `${_username} made bid: +${_licit}$`);
    response.setHeader("Content-Type", "application/json");
    response.status(200);
    response.send(_request.body);
})

router.post("/adduser", async (request, response) => {
    const username = request.body.username;
    const user = new User({name: username});
    user.save();
    io.sockets.emit('user connection', username);
    response.setHeader("Content-Type", "application/json");
    response.status(200);
    response.send(request.body);
});

router.get("/containsuser", async (request, response) => {
    const username = request.query.username;
    await User.countDocuments({name: username}, (err, count) => {
        if (count === 0) {
            response.json({containsuser: false, name: username});
        }
        else {
            response.json({containsuser: true, name: username});
        }
    });
});

export default router;