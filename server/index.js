import express from "express";
import * as fs from 'node:fs';
import { createFile, readList, createList, addToList, deleteFromList, deleteList } from "./dbmanager";

const app = express();
const port = 3030;
const dbpath = "./db.json";

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get("/message", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));