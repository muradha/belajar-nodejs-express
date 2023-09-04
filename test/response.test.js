import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
	res.send(`Hello Response`);
});

test("test express js", async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe("Hello Response");
});
