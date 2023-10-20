import * as fs from 'node:fs';

const createFile = (dbpath, name) => {
    let data = {};
    data[name] = [];
    fs.writeFile(dbpath, data);
}

const readList = (dbpath, name) => {
    try {
        if(fs.existsSync(dbpath)) {
            let data = fs.readFileSync(dbpath);
            return JSON.parse(data)[name];
        }
    }
    catch(e) {
        console.log(`Error reading ${name} list from file: ${e}`);
    }
}

const createList = (dbpath, name) => {
    try {
        if(fs.existsSync(path)) {
            let content = fs.readFileSync(dbpath);
            let data = JSON.parse(content);
            data[name] = [];
            fs.writeFileSync(dbpath, data);
        }
        else {
            createFile(name);
        }
    }
    catch(e) {
        console.log(`Error creating ${name} list: ${e}`);
    }
}

const addToList = (dbpath, name, item) => {
    // assume item = { content: "", rating: "", etc }
    try {
        if(fs.existsSync(path)) {
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
        if(fs.existsSync(path)) {
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

const deleteList = (dbpath, name) => {
    try {
        if(fs.existsSync(path)) {
            let content = fs.readFileSync(dbpath);
            let data = JSON.parse(content);
            delete data[name];
            fs.writeFileSync(dbpath, data);
        }
    }
    catch(e) {
        console.log(`Error trying to delete ${name} list: ${e}`);
    }
}

export { createFile, readList, createList, addToList, deleteFromList, deleteList };
