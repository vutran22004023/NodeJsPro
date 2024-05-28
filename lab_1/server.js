import express from "express";
const app = express();
const port = 3002;

app.use('/', (req, res) => {
    res.status(200).send('Hello World');
});

app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
});