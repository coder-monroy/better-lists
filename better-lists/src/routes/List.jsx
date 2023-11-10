import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useThunk } from "../hooks/use-thunk";
import { editList, removeList, changeEditListName } from "../store";
import { useLocation, useNavigate } from "react-router-dom";

const List = () => {
    const [doEditList, loadingEditList, editListError] = useThunk(editList);
    const [doRemoveList, isremovingList, removeListError] = useThunk(removeList);
    const [isExpanded, setIsExpanded] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { list } = location.state;
    const path = location.pathname;

    // These states are for correcting an issue of the List Name not being updated
    // due to the list reference being used not being linked to the listsSlice store.
    // The list var being used here is from the location state passed from a Link.
    const [nameChanged, setNameChanged] = useState(false);
    const [editedName, setEditedName] = useState("");

    useEffect(() => {
        setNameChanged(false);
        setEditedName("");
    }, [path]);
    

    const { editListName } = useSelector(state => {
        return state.lists
    });

    const handleEditClick = () => {
        setIsExpanded(!isExpanded);
        dispatch(changeEditListName(""));
    }

    const handleEditNameChange = event => {
        dispatch(changeEditListName(event.target.value));
        setEditedName(event.target.value);
    }

    const handleEditNameSave = () => {
        setNameChanged(true);
        doEditList({ listId: list.id, newName: editListName });
        setIsExpanded(false);
    }

    const handleRemoveList = () => {
        doRemoveList(list.id);
    }

    return (
        <>
        <div className="d-flex flex-row align-items-center justify-content-between">
            <h1> {nameChanged ? editedName : list.name} </h1>
            <button className="btn btn-outline-warning" onClick={handleEditClick}>Edit</button>
        </div>
        {isExpanded ? <div className="mt-4 mb-4">
                <div className="input-group">
                    <button className="btn btn-outline-danger" onClick={() => {
                        handleRemoveList();
                        navigate("/");
                    }} >Delete List</button>
                    <input className="form-control" placeholder="New List Name" value={editListName} onChange={handleEditNameChange} />
                    <button className="btn btn-outline-success" onClick={handleEditNameSave}>Save</button>
                </div>
            </div> : null}
        <hr />
        </>
    );
}

export default List;