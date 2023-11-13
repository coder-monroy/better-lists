import { createSlice } from "@reduxjs/toolkit";
import { addList } from "../thunks/addList";
import { removeList } from "../thunks/removeList";
import { fetchItems } from "../thunks/fetchItems";

const itemsSlice = createSlice({
    name: "items",
    initialState: {
        text: "",
        editText: "",
        data: {},
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers(builder) {
        // create and delete item collections
        builder.addCase(addList.fulfilled, (state, action) => {
            state.data[action.payload.id] = [];
        });
        builder.addCase(removeList.fulfilled, (state, action) => {
            delete state.data[action.payload];
        });

        // fetch items cases
        builder.addCase(fetchItems.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data[action.payload.listId] = action.payload.response;
        });
        builder.addCase(fetchItems.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

    }
});

export const itemsReducer = itemsSlice.reducer;