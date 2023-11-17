import { BiEditAlt } from "react-icons/bi";
import EditItemForm from "./EditItemForm";

// this component has long boolean expressions to express item tags appropriately, can possibly be condensed
const Item = ({ item, listId, onEditClick, index, expanded }) => {

    return (
        <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">          
                    <BiEditAlt className="text-warning me-3" size={"1.3em"} onClick={() => onEditClick(index)} />
                    <div className="d-flex flex-column justify-content-between align-items-center">
                        <div>{item.text}</div>
                    </div>
                </div>
                <span className="badge bg-secondary rounded-pill">{item.marker}</span>
            </div>
            <div className="d-flex justify-content-between justify-content-lg-evenly align-items-center">
                
                <div>
                    {item.tag_1 !== "" ? <div className="badge rounded-pill mt-2 me-lg-3" style={{  backgroundColor: item.tag_1.color !== "" ? item.tag_1.color : "black", color: item.tag_1.white ? "white" : "black" }}>{item.tag_1.label}</div> : null}
                    {item.tag_2 !== "" ? <div className="badge rounded-pill mt-2 me-lg-3" style={{ backgroundColor: item.tag_2.color !== "" ? item.tag_2.color : "black", color: item.tag_2.white ? "white" : "black" }}>{item.tag_2.label}</div> : null}
                    {item.tag_3 !== "" ? <div className="badge rounded-pill mt-2" style={{ backgroundColor: item.tag_3.color !== "" ? item.tag_3.color : "black", color: item.tag_3.white ? "white" : "black" }}>{item.tag_3.label}</div> : null}
                </div>

            </div>
            {expanded && <EditItemForm close={onEditClick} index={index} listId={listId} itemId={item.id} />}
        </li>
    );
}

export default Item;