import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const addList = createAsyncThunk("lists/add", async (name) => {
    const response = await axios.post("http://localhost:3030/lists", {
        id: uuidv4(),
        name: name,
        items: []
    });

    return response.data;
});

export { addList }