const Item = ({ item }) => {

    return (
        <li className="list-group-item">
            <div>{item.text}</div>
        </li>
    );
}

export default Item;