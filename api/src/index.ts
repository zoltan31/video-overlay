import * as express from "express";

const app = express();
const port = 5000;

app.get("/", (_request, response) => {
	response.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});