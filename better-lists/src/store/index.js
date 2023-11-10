import { configureStore } from "@reduxjs/toolkit";
import { listsReducer } from "./slices/listsSlice";
import { changeNewListName, changeEditListName } from "./slices/listsSlice";

const store = configureStore({
    reducer: {
        lists: listsReducer
    }
});

export * from "./thunks/fetchLists";
export * from "./thunks/addList";
export * from "./thunks/editList";
export * from "./thunks/removeList";
export { store, changeNewListName, changeEditListName };