import { configureStore } from "@reduxjs/toolkit";
import { listsReducer } from "./slices/listsSlice";
import { itemsReducer } from "./slices/itemsSlice";
import { changeNewListName, changeEditListName } from "./slices/listsSlice";
import { changeText, changeMarker, changeTag1, changeTag2, changeTag3 } from "./slices/itemsSlice";

const store = configureStore({
    reducer: {
        lists: listsReducer,
        items: itemsReducer
    }
});

export * from "./thunks/fetchLists";
export * from "./thunks/addList";
export * from "./thunks/editList";
export * from "./thunks/removeList";
export * from "./thunks/fetchItems";
export * from "./thunks/addItem";
export { store, changeNewListName, changeEditListName, changeText, changeMarker, changeTag1, changeTag2, changeTag3 };