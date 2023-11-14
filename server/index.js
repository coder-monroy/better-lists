import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { fetchLists, createList, editList, deleteList, fetchItems, createItem, deleteItem } from "./dbmanager.js";

const app = express();
const port = 3030;
const dbpath = "./db.json";

// middleware
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// returns all lists from db
app.get("/lists", (req, res) => {
    let response = fetchLists(dbpath);
    res.send(response);
});

// posts a new list in the db
app.post("/lists", (req, res) => {
    createList(dbpath, req.body);
    res.send(req.body);
});

// patches/edits the name of a list in the db
app.patch("/lists/:listId", (req, res) => {
    let edits = {
        listId: req.params.listId,
        newName: req.body.newName
    }

    editList(dbpath, edits);
    res.send(edits);
});

// deletes the target list from the db
app.delete("/lists/:listId", (req, res) => {
    deleteList(dbpath, req.params.listId);
    res.send(req.params.listId);
});

// returns all items in a list from the db
app.get("/items/:listId", (req, res) => {
    let response = fetchItems(dbpath, req.params.listId);
    res.send(response);
});

// posts a new item in the given list to the db
app.post("/items/:listId", (req, res) => {
    createItem(dbpath, req.body, req.params.listId);
    let response = {
        body: req.body,
        listId: req.params.listId
    }
    res.send(response);
});


app.listen(port, () => console.log(`Server listening on port ${port}`));