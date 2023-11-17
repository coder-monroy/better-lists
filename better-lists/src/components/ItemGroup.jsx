import { useSelector } from "react-redux";
import { fetchItems } from "../store";
import { useThunk } from "../hooks/use-thunk";
import Item from "./Item";
import ItemSearch from "./ItemSearch";
import { useEffect, useState } from "react";

const ItemGroup = ({ listId }) => {
    const [doFetchItems, isFetchingItems, fetchingItemsError] = useThunk(fetchItems);
    const [expandedIndex, setExpandedIndex] = useState(-1);

    // here, items are retrieved from store, as the searchTerm var in the store changes, items displayed are filtered
    const { items } = useSelector(({ items: { data, searchTerm } }) => {
        const renderedItems = data[listId].filter(item =>
            item.text.toLowerCase().includes(searchTerm.toLowerCase()));

        return {
            items: renderedItems
        }
    });

    // fetches item data from the given list only
    useEffect(() => {
        doFetchItems(listId);
    }, [doFetchItems, listId]);

    // this function, coupled with the state expandedIndex makes sure only one item has the edit menu opened at a time
    const handleEditClick = index => {
        if(index === expandedIndex) {
            setExpandedIndex(-1);
        }
        else {
            setExpandedIndex(index);
        }
    }

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
            content = items.map((item, index) => {
                const isExpanded = index === expandedIndex;

                return <Item key={item.id} item={item} listId={listId} onEditClick={handleEditClick} index={index} expanded={isExpanded} />
            });
        }

    }

    return (
        <>
            {(items !== undefined && items.length > 0) && <ItemSearch />}
            <div className="list-group mt-3 mb-5">
                {content}
            </div>
        </>
    );
}

export default ItemGroup;