//2a
let sold = 0;
for (let i=0; i < inventory.length; i++) {
    sold += inventory[i].sold;
}

//2b
const soldTvs = document.getElementById("sold-tv");

const soldTvsTitle = document.createElement("h3");
soldTvsTitle.textContent = "Aantal verkochte tv's."

const allSoldTvs = document.createElement("h4");
allSoldTvs.textContent = sold;
allSoldTvs.setAttribute("class", "sold-color");

soldTvs.appendChild(soldTvsTitle);
soldTvs.appendChild(allSoldTvs);


// paragraph.textContent = 'Er zijn ' + sold + ' Televisies verkocht';
// console.log(sold + " Televisies zijn er verkocht");

//2c
let purchased = 0;
for (let i=0; i < inventory.length; i++) {
    purchased += inventory[i].originalStock;
}

const purchasedTvs = document.getElementById("purchased-tv");

const tvsInStock = document.createElement("h3");
tvsInStock.textContent = "Aantal tv's"

const numberTvsInStock = document.createElement("h4");
numberTvsInStock.textContent = purchased;
numberTvsInStock.setAttribute("class", "purchased-color");

purchasedTvs.appendChild(tvsInStock);
purchasedTvs.appendChild(numberTvsInStock);

// paragraph1.textContent = 'Er zijn ' + purchased + ' Televisies ingekocht';
// console.log(purchased + " Televisies zijn er ingekocht");

//2e

//let sell = purchased - sold;

//2d
const stock = document.getElementById("sell-tv");

const currentStock = document.createElement("h3");
currentStock.textContent = "Nog te verkopen tv's";

const currentStockNumber = document.createElement("h4");
currentStockNumber.textContent = `${purchased - sold}`;
currentStockNumber.setAttribute("class", "sell-tv");

stock.appendChild(currentStock);
stock.appendChild(currentStockNumber);