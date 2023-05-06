const cats =  ["Milo", "Otis", "Garfield"];
function appendCat (name){
    const newCats = [...cats,name];
    return newCats;
}
function prependCat (name){
    const newCats = [name,...cats];
    return newCats;
}
function removeLastCat (name){
    const newCats = cats.slice(0,cats.length-1);
    return newCats;
}
function removeFirstCat (name){
    const newCats = cats.slice(1);
    return newCats;
}
function destructivelyAppendCat (name){
    const newCats = cats.push("Ralph");
    return newCats;
}
function destructivelyPrependCat (name){
    const newCats = cats.unshift("Bob");
    return newCats;
}
function destructivelyRemoveFirstCat (name){
    const newCats = cats.shift();
    return newCats;
}
function destructivelyRemoveLastCat (name){
    const newCats = cats.pop();
    return newCats;
}