import { configureStore } from "@reduxjs/toolkit";
import { listsReducer, changeSearchTerm, createList, removeList, addToList, removeFromList } from "./slices/listsSlice";

const store = configureStore({
    reducer: {
        listStore: listsReducer
    }
});

export { store, changeSearchTerm, createList, removeList, addToList, removeFromList };
