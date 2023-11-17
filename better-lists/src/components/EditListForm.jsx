import { useDispatch, useSelector } from "react-redux";
import { useThunk } from "../hooks/use-thunk";
import { editList, removeList, changeEditListName } from "../store";
import { useNavigate } from "react-router-dom";

const EditListForm = ({ list, setEditedName, setNameChanged, setIsExpanded }) => {
    const [doEditList] = useThunk(editList);
    const [doRemoveList] = useThunk(removeList);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { editListName } = useSelector(state => {
        return state.lists
    });

    const handleEditNameChange = event => {
        dispatch(changeEditListName(event.target.value));
        setEditedName(event.target.value);
    }

    const handleEditNameSave = () => {
        if(editListName.length === 0) {
            console.warn("List Title field must contain input for edit to save...");
        }
        if(editListName.length !== 0) {
            setNameChanged(true);
            doEditList({ listId: list.id, newName: editListName });
        }
        setIsExpanded(false);
    }

    const handleRemoveList = () => {
        doRemoveList(list.id);
    }

    return (
        <div className="mt-4 mb-4">
            <div className="input-group">
                <button className="btn btn-outline-danger" onClick={() => {
                    handleRemoveList();
                    navigate("/");
                }} >Delete List</button>
                <input className="form-control" placeholder="New List Name" value={editListName} onChange={handleEditNameChange} />
                <button className="btn btn-outline-success" onClick={handleEditNameSave}>Save</button>
            </div>
        </div>
    );
}

export default EditListForm;