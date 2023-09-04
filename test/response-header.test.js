import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
    res.set({
        'X-Powered-By' : 'Rizki Adha',
        "X-Author": "Rizki Adha"
    });
	res.send(`Hello Response`);
});

test("test express js", async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe("Hello Response");
    expect(response.get('x-powered-by')).toBe("Rizki Adha");
    expect(response.get('x-author')).toBe("Rizki Adha");
});
