import { useDispatch, useSelector } from "react-redux";
import { editItem, removeItem, changeEditText, changeEditMarker } from "../store";
import { useThunk } from "../hooks/use-thunk";

const EditItemForm = ({ close, index, listId, itemId }) => {
    const [doEditItem] = useThunk(editItem);
    const [doRemoveItem] = useThunk(removeItem);
    const dispatch = useDispatch();

    const { editText, editMarker } = useSelector(state => {
        return state.items;
    });

    const handleEditTextChange = event => {
        dispatch(changeEditText(event.target.value));
    }

    const handleEditMarkerChange = event => {
        dispatch(changeEditMarker(event.target.value));
    }

    const handleRemoveItem = () => {
        close(index);
        doRemoveItem({ listId: listId, itemId: itemId });
    }

    const handleEditSave = () => {
        if(editText.length === 0) {
            console.warn("Item Text field must contain input for edit to save...");
        }
        if(editText.length !== 0) {
            doEditItem({
                listId: listId,
                itemId: itemId,
                newText: editText,
                newMarker: editMarker
            });
        }
        close(index);
        dispatch(changeEditText(""));
        dispatch(changeEditMarker(""));
    }

    return (
        <div className="mt-2 mb-2">
            <div className="row g-3">
                <div className="col-lg-7 mb-3">
                    <label for="editItemText" className="form-label" >Item Text</label>
                    <input type="text" id="editItemText" className="form-control" onChange={handleEditTextChange} value={editText} />
                </div>
                <div className="col-lg-5 mb-3">
                    <label for="editMarker" className="form-label" >Marker (Optional)</label>
                    <input type="text" id="editMarker" className="form-control" onChange={handleEditMarkerChange} value={editMarker} />
                </div>
            </div>
            <div className="d-flex flex-row justify-content-between">
                <button className="btn btn-outline-danger" onClick={handleRemoveItem} >Delete</button>
                <div>
                    <button className="btn btn-outline-secondary" onClick={() => {
                        close(index);
                        dispatch(changeEditText(""));
                        dispatch(changeEditMarker(""));
                    }}>Cancel</button>
                    <button className="btn btn-outline-success ms-3" onClick={handleEditSave} >Save</button>
                </div>
            </div>
        </div>
    );
}

export default EditItemForm;