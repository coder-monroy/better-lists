import { useDispatch, useSelector } from "react-redux";
import { addItem, changeText, changeMarker, changeTag1, changeTag2, changeTag3 } from "../store";
import { useThunk } from "../hooks/use-thunk";

const CreateItemForm = ({ listId, close }) => {
    const [doAddItem] = useThunk(addItem);
    const dispatch = useDispatch();

    const { text, marker, tag_1, tag_2, tag_3 } = useSelector(state => {
        return state.items;
    });

    const handleTextChange = event => {
        dispatch(changeText(event.target.value));
    }

    const handleMarkerChange = event => {
        dispatch(changeMarker(event.target.value));
    }

    const handleTag1Change = event => {
        if(event.target.id === "tagInput1") {
            dispatch(changeTag1({ label: event.target.value }));
        }
        else if(event.target.id === "colorPicker1") {
            dispatch(changeTag1({ color: event.target.value }));
        }
        else if(event.target.id === "tagTextColor1") {
            dispatch(changeTag1({ white: event.target.checked }));
        }
    }

    const handleTag2Change = event => {
        if(event.target.id === "tagInput2") {
            dispatch(changeTag2({ label: event.target.value }));
        }
        else if(event.target.id === "colorPicker2") {
            dispatch(changeTag2({ color: event.target.value }));
        }
        else if(event.target.id === "tagTextColor2") {
            dispatch(changeTag2({ white: event.target.checked }));
        }
    }

    const handleTag3Change = event => {
        if(event.target.id === "tagInput3") {
            dispatch(changeTag3({ label: event.target.value }));
        }
        else if(event.target.id === "colorPicker3") {
            dispatch(changeTag3({ color: event.target.value }));
        }
        else if(event.target.id === "tagTextColor3") {
            dispatch(changeTag3({ white: event.target.checked }));
        }
    }

    const handleClose = () => {
        dispatch(changeText(""));
        close();
    }

    const handleItemAdd = () => {
        if(text.length !== 0) {
            doAddItem({
                listId: listId, 
                text: text,
                marker: marker,
                tag_1: tag_1,
                tag_2: tag_2,
                tag_3: tag_3
            });
        }
        close();
    }

    return (
        <>
        <div className="mt-4 mb-4">

            <div className="row g-3">
                <div className="col-lg-7 mb-3">
                    <label for="textInput" className="form-label" >Item Text</label>
                    <input type="text" id="textInput" className="form-control" onChange={handleTextChange} value={text} />
                </div>
                <div className="col-lg-5">
                    <label for="markerInput" className="form-label" >Marker (Optional)</label>
                    <input type="text" id="markerInput" className="form-control" onChange={handleMarkerChange} value={marker}  />
                    <div className="form-text">Example: "Last Read: Ch 4", "Last Seen: Ep 25", "Watched on 12/11/2024"</div>
                </div>
            </div>

            <div className="row g-3 mt-3 mb-3">

                <div className="col-lg-4">
                    <label for="tagInput1" className="form-label">Tag 1 (Optional)</label>
                    <input type="text" id="tagInput1" className="form-control" onChange={handleTag1Change} value={tag_1.label} />
                    <div className="row align-items-center mt-2">
                        <div className="col-3">
                            Color:
                        </div>
                        <div className="col-4">
                            <input type="color" id="colorPicker1" className="form-control form-control-color" onChange={handleTag1Change} value={tag_1.color} />
                        </div>
                        <div className="col-5 form-check">
                            <input type="checkbox" id="tagTextColor1" className="form-check-input" onChange={handleTag1Change} value={tag_1.white} />
                            <label for="tagTextColor1" >White Text</label>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <label for="tagInput2" className="form-label">Tag 2 (Optional)</label>
                    <input type="text" id="tagInput2" className="form-control" onChange={handleTag2Change} value={tag_2.label} />
                    <div className="row align-items-center mt-2">
                        <div className="col-3">
                            Color:
                        </div>
                        <div className="col-4">
                            <input type="color" id="colorPicker2" className="form-control form-control-color" onChange={handleTag2Change} value={tag_2.color} />
                        </div>
                        <div className="col-5 form-check">
                            <input type="checkbox" id="tagTextColor2" className="form-check-input" onChange={handleTag2Change} value={tag_2.white} />
                            <label for="tagTextColor2" >White Text</label>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <label for="tagInput3" className="form-label">Tag 3 (Optional)</label>
                    <input type="text" id="tagInput3" className="form-control" onChange={handleTag3Change} value={tag_3.label} />
                    <div className="row align-items-center mt-2">
                        <div className="col-3">
                            Color:
                        </div>
                        <div className="col-4">
                            <input type="color" id="colorPicker3" className="form-control form-control-color" onChange={handleTag3Change} value={tag_3.color} />
                        </div>
                        <div className="col-5 form-check">
                            <input type="checkbox" id="tagTextColor3" className="form-check-input" onChange={handleTag3Change} value={tag_3.white} />
                            <label for="tagTextColor3" >White Text</label>
                        </div>
                    </div>
                </div>

            </div>
            <div className="d-flex flex-row justify-content-end">
                <button className="btn btn-outline-danger" onClick={handleClose}>Cancel</button>
                <button className="btn btn-outline-success ms-3" onClick={handleItemAdd} >Add</button>
            </div>
        </div>
        <hr />
        </>
    );
}

export default CreateItemForm;