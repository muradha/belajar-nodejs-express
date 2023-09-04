import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
	res.send(`Hello ${req.query.firstName} ${req.query.lastName}`);
});

test("test express js", async () => {
    const response = await request(app).get('/').query({firstName: "Rizki", lastName: "Adha"});
    expect(response.text).toBe("Hello Rizki Adha");
});
