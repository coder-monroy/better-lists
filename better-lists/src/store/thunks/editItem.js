import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const editItem = createAsyncThunk("items/edit", async (edits) => {
    const response = await axios.patch(`http://localhost:3030/items/${edits.listId}`, {
        itemId: edits.itemId,
        newText: edits.newText,
        newMarker: edits.newMarker
    });

    return response.data;
});

export { editItem };