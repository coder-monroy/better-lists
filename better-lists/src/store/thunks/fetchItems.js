import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchItems = createAsyncThunk("items/fetch", async (listId) => {
    const response = await axios.get(`http://localhost:3030/items/${listId}`);

    return {
        response: response.data,
        listId: listId
    }
});

export { fetchItems };