// 1a
let tvNames = inventory.map((brandName)  => {
    return brandName.name;
});

console.log(tvNames);

//1b
let soldOut = inventory.filter((out) => {
    if (out.sold - out.originalStock === 0) {
        return out.name;
    }
});

console.log(soldOut);

//1c
let hasAmbilight = inventory.filter((light) => {
    if( light.options.ambiLight === true ) {
        return light.name;
    }
});

console.log(hasAmbilight);

//1d
function sortArray(sortAb) {
    return sortAb.sort((a, b) => a.price - b.price)
}

// inventory.sort((a, b) => {
//   return a.price - b.price;
// });
//
console.log(sortArray(inventory));