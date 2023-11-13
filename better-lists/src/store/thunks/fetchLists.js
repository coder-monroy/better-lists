import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchLists = createAsyncThunk("lists/fetch", async () => {
    const response = await axios.get("http://localhost:3030/lists");
    
    return response.data;
});

export { fetchLists };