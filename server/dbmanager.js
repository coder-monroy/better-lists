import * as fs from 'node:fs';

// returns a list of the user's existing lists represented as Javascript objects
const fetchLists = (dbpath) => {
    try {
        if(fs.existsSync(dbpath)) {
            let data = fs.readFileSync(dbpath);
            let list_data = JSON.parse(data);
            return list_data["lists"];
        }
    }
    catch(e) {
        console.log(`Error fetching lists from file: ${e}`);
    }
}

// creates a list from the given Javascript object in the local db
const createList = (dbpath, newList) => {
    try {
        if(fs.existsSync(dbpath)) {
            let content = fs.readFileSync(dbpath);
            let data = JSON.parse(content);
            data["lists"].push(newList);
            fs.writeFileSync(dbpath, JSON.stringify(data, null, 4));
        }
    }
    catch(e) {
        console.log(`Error creating ${newList.name} list: ${e}`);
    }
}

// modifies information in an existing list 
const editList = (dbpath, edits) => {
    const { listId, newName } = edits;
    try {
        if(fs.existsSync(dbpath)) {
            let content = fs.readFileSync(dbpath);
            let data = JSON.parse(content);
            data["lists"] = data["lists"].map(list => {
                if(list.id == listId) {
                    return {
                        ...list,
                        name: newName
                    }
                }
                else {
                    return list;
                }
            });
            fs.writeFileSync(dbpath, JSON.stringify(data, null, 4));
        }
    }
    catch(e) {
        console.log(`Error trying to patch list with id ${listId}: ${e}`);
    }
}

// deletes the list from the local db
const deleteList = (dbpath, id) => {
    try {
        if(fs.existsSync(dbpath)) {
            let content = fs.readFileSync(dbpath);
            let data = JSON.parse(content);
            data["lists"] = data["lists"].filter(list => {
                return list.id !== id
            });
            fs.writeFileSync(dbpath, JSON.stringify(data, null, 4));
        }
    }
    catch(e) {
        console.log(`Error trying to delete list with id ${id}: ${e}`);
    }
}

const addToList = (dbpath, name, item) => {
    try {
        if(fs.existsSync(dbpath)) {
            let content = fs.readFileSync(dbpath);
            let data = JSON.parse(content);
            data[name].push(item);
            fs.writeFileSync(dbpath, data);
        }
    }
    catch(e) {
        console.log(`Error trying to add item: ${item} to list: ${e}`);
    }
}

const deleteFromList = (dbpath, name, id) => {
    try {
        if(fs.existsSync(dbpath)) {
            let content = fs.readFileSync(dbpath);
            let data = JSON.parse(content);
            let filteredData = data[name].filter(item => {
                return item.id !== id;
            });
            data[name] = filteredData;
            fs.writeFileSync(dbpath, data);
        }
    }
    catch(e) {
        console.log(`Error trying to delete item with id: ${id} from list: ${e}`);
    }
}

export { fetchLists, createList, editList, deleteList, addToList, deleteFromList };