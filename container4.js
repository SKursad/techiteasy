//4a
function tvName (tvObject) {
    return `${tvObject.brand} ${tvObject.type} - ${tvObject.name}`;
};
console.log(tvName(inventory[5]));

//4b
function price (tvValue) {
    return `€ ${tvValue.price},-`;
}
console.log(price(inventory[5]));

//4c
function size (screen) {
    let screenSize = "";
    for (let i = 0; i < screen.availableSizes.length; i++) {
        screenSize = screenSize + screen.availableSizes[i] + " inch " + " ("
        + Math.round(screen.availableSizes[i] * 2.54) +  " cm) | ";
    }

    return screenSize;
}
console.log(size(inventory[5]));

//4d

document.getElementById("demo1").innerHTML = tvName(inventory[4]);
document.getElementById("demo2").innerHTML = price(inventory[4]);
document.getElementById("demo3").innerHTML = size(inventory[4]);

//4e

function generateTv(megaList) {
    let televisionList = "";
    for (let i = 0; i < megaList.length; i++) {
        televisionList += `
        <div class="megaList">
        <h3>${tvName(megaList[i])}</h3>
        <p>${price(megaList[i])}</p>
        <p>${size(megaList[i])}</p>
        </div>`;
    }
    return televisionList;
}
let overviewTvList = document.getElementById("demo4");
overviewTvList.innerHTML = generateTv(inventory);

// function generateTV(tv) {
//     let televisionList = "";
//     for (let i = 0; i < tv.length; i++) {
//         televisionList += `
//     <div class="tv">
//     <h3>${tvName(tv[i])}</h3>
//     <p>${tvPrice(tv[i])}</p>
//     <p>${tvSizes(tv[i])}</p>
//     </div>`;
//     }
//
//     return televisionList;
// }
//
// let allTvsOverview = document.getElementById("tvs");
// allTvsOverview.innerHTML = generateTV(inventory);
// ------------------------------------------------------------
// ------------------------------------------------------------
// function generateTv(megaList) {
//     let televisionList = "";
//     for (let i = 0; i < megaList.length; i++) {
//         televisionList += tvName(megaList[i]) + " "
//             + price(megaList[i] + " " + size(megaList[i]));
//     }
//     return televisionList;
// }
