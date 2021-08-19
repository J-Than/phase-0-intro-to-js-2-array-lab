// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat (name) {
    return cats.push(name);
}

function destructivelyPrependCat (name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat (name) {
    return cats.pop(name);
}

function destructivelyRemoveFirstCat (name) {
    return cats.shift(name);
}

function appendCat (name) {
    const newCatList = [...cats, name];
    return newCatList;
}

function prependCat (name) {
    const newCatList = [name, ...cats];
    return newCatList;
}

function removeLastCat (name) {
    return cats.slice(0, -1);
}

function removeFirstCat (name) {
    return cats.slice(1);
}

