import {createSlice } from "@reduxjs/toolkit";

const listsSlice = createSlice({
    name: "lists",
    initialState: {
        searchTerm: "",
        data: {}
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        createList(state, action) {
            state.data[action.payload] = [];
        },
        removeList(state, action) {
            delete state.data[action.payload];
        },
        addToList(state, action) {
            state.data[action.payload.name].push(action.payload.item);
        },
        removeFromList(state, action) {
            const updated = state.data[action.payload.name].filter(item => {
                return item.id !== action.payload.id;
            });
            state.data[action.payload.name] = updated;
        }
    }
});

export const { changeSearchTerm, createList, removeList, addToList, removeFromList } = listsSlice.actions;
export const listsReducer = listsSlice.reducer;