import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeEditListName } from "../store";
import { useLocation } from "react-router-dom";
import EditListForm from "../components/EditListForm";
import CreateItemForm from "../components/CreateItemForm";
import ItemGroup from "../components/ItemGroup";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai"

const List = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showItemForm, setShowItemForm] = useState(false);
    const dispatch = useDispatch();
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
        setIsExpanded(false);
        setShowItemForm(false);
    }, [path]);


    const handleEditClick = () => {
        setIsExpanded(!isExpanded);
        dispatch(changeEditListName(""));
    }

    const handleShowItemForm = () => {
        setShowItemForm(true);
    }

    const handleItemFormClose = () => {
        setShowItemForm(false);
    }


    return (
        <>
        <div className="d-flex flex-row align-items-center justify-content-between mt-4">
            <h1> {nameChanged ? editedName : list.name} </h1>
            <button className="btn btn-outline-warning" onClick={handleEditClick}>Edit</button>
        </div>

        {isExpanded ? <EditListForm list={list} setEditedName={setEditedName} setNameChanged={setNameChanged} setIsExpanded={setIsExpanded} /> : null}

        <hr />

        {showItemForm && <CreateItemForm listId={list.id} close={handleItemFormClose} />}

        <ItemGroup listId={list.id} />

        <div className="position-fixed" style={{ bottom: "5%", right: "3%" }} >
            {showItemForm ? 
                <AiFillMinusCircle className="text-secondary" size={"4em"} onClick={handleItemFormClose} /> :
                <AiFillPlusCircle className="text-secondary" size={"4em"} onClick={handleShowItemForm} />
            }
        </div>

        </>
    );
}

export default List;