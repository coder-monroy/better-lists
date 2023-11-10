import { useDispatch, useSelector } from "react-redux";
import { addList, changeNewListName } from "../store";
import { useThunk } from "../hooks/use-thunk";

const CreateListForm = () => {
    const [doAddList, isAddingList, addingListError] = useThunk(addList);
    const dispatch = useDispatch();

    const { newListName } = useSelector(state => {
        return state.lists;
    })

    const handleNameChange = event => {
        dispatch(changeNewListName(event.target.value));
    }

    const handleListAdd = () => {
        doAddList(newListName);
    }

    return (
        <div className="input-group">
            <input type="text" className="form-control" placeholder="New List" onChange={handleNameChange} value={newListName}  />
            <button className="btn btn-secondary" onClick={handleListAdd}>Add</button>
        </div>
    );
}

export default CreateListForm;