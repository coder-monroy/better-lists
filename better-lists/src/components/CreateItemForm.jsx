

const CreateItemForm = ({ close }) => {
    return (
        <>
        <div className="input-group mt-4 mb-4">
            <button className="btn btn-outline-danger" onClick={close}>Cancel</button>
            <input type="text" className="form-control" placeholder="Item Text" />
            <button className="btn btn-outline-success">Add</button>
        </div>
        <hr />
        </>
    );
}

export default CreateItemForm;