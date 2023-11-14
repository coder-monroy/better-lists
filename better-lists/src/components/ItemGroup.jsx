import { useSelector } from "react-redux";
import { fetchItems } from "../store";
import { useThunk } from "../hooks/use-thunk";
import Item from "./Item";
import { useEffect } from "react";

const ItemGroup = ({ listId }) => {
    const [doFetchItems, isFetchingItems, fetchingItemsError] = useThunk(fetchItems);

    const items = useSelector(state => {
        // console.log("ItemGroup full state data", state.items.data);
        // console.log("ItemGroup expected result", state.items.data[listId]);
        return state.items.data[listId];
    });

    useEffect(() => {
        doFetchItems(listId);
    }, [doFetchItems, listId]);

    let content;

    if(isFetchingItems) {
        content = <div>Loading...</div>
    }
    else if(fetchingItemsError) {
        content = <div>Error fetching items...</div>
    }
    else {

        if(items === undefined) {
            content = <div>Please wait...</div>
        }
        else if(!items.length) {
            content = <div>No items in this list yet...</div>
        }
        else {
            content = items.map(item => {
                return <Item key={item.id} item={item} />
            });
        }

    }

    return (
        <div className="list-group mt-4">
            {content}
        </div>
    );
}

export default ItemGroup;