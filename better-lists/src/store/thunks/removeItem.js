import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeItem = createAsyncThunk("items/remove", async (target) => {
    const response = await axios.delete(`http://localhost:3030/items/${target.listId}/${target.itemId}`);

    return response.data;
});

export { removeItem };