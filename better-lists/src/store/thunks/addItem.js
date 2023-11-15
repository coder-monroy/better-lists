import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const addItem = createAsyncThunk("items/add", async (form) => {
    const response = await axios.post(`http://localhost:3030/items/${form.listId}`, {
        id: uuidv4(),
        text: form.text,
        marker: form.marker,
        tag_1: form.tag_1,
        tag_2: form.tag_2,
        tag_3: form.tag_3
    });

    return response.data;
});

export { addItem };