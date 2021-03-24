import app from "../src/app";
import * as request from "supertest";

test("It should response the GET method", async () => {
	const response = await request(app).get("/");
	expect(response.status).toBe(200);
});

