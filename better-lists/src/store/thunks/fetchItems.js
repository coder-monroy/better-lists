import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchItems = createAsyncThunk("items/fetch", async (listId) => {
    // console.log("Attempting fetch items thunk");

    const response = await axios.get(`http://localhost:3030/items/${listId}`);

    // console.log("fetchItems thunk: ", response.data);
    // await pause(1000);

    return {
        response: response.data,
        listId: listId
    }
});

const pause = duration => {
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    });
}

export { fetchItems };