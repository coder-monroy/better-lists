import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeList = createAsyncThunk("lists/remove", async (id) => {
    const response = await axios.delete(`http://localhost:3030/lists/${id}`);

    return response.data;
});

export { removeList };