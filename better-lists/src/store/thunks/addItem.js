import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const addItem = createAsyncThunk("items/add", async (form) => {
    const response = await axios.post(`http://localhost:3030/items/${form.listId}`, {
        id: uuidv4(),
        text: form.text
    });

    return response.data;
});

export { addItem };