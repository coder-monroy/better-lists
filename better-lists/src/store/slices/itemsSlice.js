import { createSlice } from "@reduxjs/toolkit";
import { addList } from "../thunks/addList";
import { removeList } from "../thunks/removeList";
import { fetchItems } from "../thunks/fetchItems";
import { addItem } from "../thunks/addItem";

const itemsSlice = createSlice({
    name: "items",
    initialState: {
        text: "",
        editText: "",
        marker: "",
        editMarker: "",
        data: {},
        isLoading: false,
        error: null,
        tag_1: { label: "", color: "", white: false },
        tag_2: { label: "", color: "", white: false },
        tag_3: { label: "", color: "", white: false },
        editTag_1: { label: "", color: "", white: false },
        editTag_2: { label: "", color: "", white: false },
        editTag_3: { label: "", color: "", white: false }
    },
    reducers: {
        changeText(state, action) {
            state.text = action.payload;
        },
        changeMarker(state, action) {
            state.marker = action.payload;
        },
        changeTag1(state, action) {
            state.tag_1 = {
                ...state.tag_1,
                ...action.payload
            }
        },
        changeTag2(state, action) {
            state.tag_2 = {
                ...state.tag_2,
                ...action.payload
            }
        },
        changeTag3(state, action) {
            state.tag_3 = {
                ...state.tag_3,
                ...action.payload
            }
        }
    },
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

        // add item cases
        builder.addCase(addItem.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addItem.fulfilled, (state, action) => {
            state.isLoading = false;
            state.text = "";
            state.marker = "";
            state.tag_1 = { label: "", color: "", white: false };
            state.tag_2 = { label: "", color: "", white: false };
            state.tag_3 = { label: "", color: "", white: false };
            state.data[action.payload.listId].push(action.payload.body);
        });
        builder.addCase(addItem.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

    }
});

export const { changeText, changeMarker, changeTag1, changeTag2, changeTag3 } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;