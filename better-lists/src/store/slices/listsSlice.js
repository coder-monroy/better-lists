import { createSlice } from "@reduxjs/toolkit";
import { fetchLists } from "../thunks/fetchLists";
import { addList } from "../thunks/addList";
import { editList } from "../thunks/editList";
import { removeList } from "../thunks/removeList";

const listsSlice = createSlice({
    name: "lists",
    initialState: {
        newListName: "",
        editListName: "",
        data: [],
        isLoading: false,
        error: null
    },
    reducers: {
        changeNewListName(state, action) {
            state.newListName = action.payload;
        },
        changeEditListName(state, action) {
            state.editListName = action.payload;
        }
    },
    extraReducers(builder) {
        // fetch lists cases
        builder.addCase(fetchLists.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchLists.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchLists.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        // add list cases
        builder.addCase(addList.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.newListName = "";
            state.data.push(action.payload);
        });
        builder.addCase(addList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        // patch list cases
        builder.addCase(editList.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(editList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = state.data.map(list => {
                if(list.id == action.payload.listId) {
                    return {
                        ...list,
                        name: action.payload.newName
                    }
                }
                else {
                    return list;
                }
            });
        });
        builder.addCase(editList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        // delete list cases
        builder.addCase(removeList.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(removeList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = state.data.filter(list => {
                return list.id !== action.payload;
            });
        });
        builder.addCase(removeList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
});

export const { changeNewListName, changeEditListName } = listsSlice.actions;
export const listsReducer = listsSlice.reducer;