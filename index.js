import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/src/views/pages/index.html");
});

app.get("/articles", (req, res) => {
    res.sendFile(__dirname + "/src/views/pages/articles.html");
});

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});