import { configureStore } from "@reduxjs/toolkit";
import { listsReducer } from "./slices/listsSlice";
import { itemsReducer } from "./slices/itemsSlice";
import { changeNewListName, changeEditListName } from "./slices/listsSlice";
import { changeText, changeMarker, changeTag1, changeTag2, changeTag3, changeEditText, changeEditMarker, changeSearchTerm } from "./slices/itemsSlice";

// although it seems like storing items inside list objects makes sense, I decided to split the data
// that way, when lists are retrieved upon initial app load, all items are not being retrieved as well
// instead, only list titles are retrieved, and when lists are opened, only items for that list are retrieved
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
export * from "./thunks/editItem";
export * from "./thunks/removeItem";
export { store, changeNewListName, changeEditListName, changeText, changeMarker, changeTag1, changeTag2, changeTag3, changeEditText, changeEditMarker, changeSearchTerm };