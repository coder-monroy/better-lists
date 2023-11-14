import { useDispatch, useSelector } from "react-redux";
import { addItem, changeText } from "../store";
import { useThunk } from "../hooks/use-thunk";

const CreateItemForm = ({ listId, close }) => {
    const [doAddItem] = useThunk(addItem);
    const dispatch = useDispatch();

    const { text } = useSelector(state => {
        return state.items;
    });

    const handleTextChange = event => {
        dispatch(changeText(event.target.value));
    }

    const handleClose = () => {
        dispatch(changeText(""));
        close();
    }

    const handleItemAdd = () => {
        if(text.length !== 0) {
            doAddItem({ listId: listId, text: text });
        }
        close();
    }

    return (
        <>
        <div className="input-group mt-4 mb-4">
            <button className="btn btn-outline-danger" onClick={handleClose}>Cancel</button>
            <input type="text" className="form-control" placeholder="Item Text" onChange={handleTextChange} value={text} />
            <button className="btn btn-outline-success" onClick={handleItemAdd} >Add</button>
        </div>
        <hr />
        </>
    );
}

export default CreateItemForm;