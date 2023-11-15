import { BiEditAlt } from "react-icons/bi";

const Item = ({ item }) => {

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <BiEditAlt className="text-warning me-3" size={"1.3em"} />
            <div className="d-flex flex-column justify-content-between align-items-center">
                <div>{item.text}</div>
            </div>
            <span className="badge bg-secondary rounded-pill">{item.marker}</span>
        </li>
    );
}

export default Item;