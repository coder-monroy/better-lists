import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

const ItemSearch = () => {
    const dispatch = useDispatch();

    const searchTerm = useSelector(state => {
        return state.lists.searchTerm;
    });

    const handleSearchTermChange = event => {
        dispatch(changeSearchTerm(event.target.value));
    }

    return (
        <div className="form-floating mt-2 mb-2">
            <input type="text" id="searchBar" className="form-control" placeholder="10" onChange={handleSearchTermChange} value={searchTerm} />
            <label for="searchBar">Search</label>
        </div>
    );
}

export default ItemSearch;