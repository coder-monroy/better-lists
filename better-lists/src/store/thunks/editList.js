import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const editList = createAsyncThunk("lists/edit", async (edits) => {
    const response = await axios.patch(`http://localhost:3030/lists/${edits.listId}`, {
        newName: edits.newName
    });

    return response.data;
});

export { editList };