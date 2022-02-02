// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// 1a
// let tvNames = inventory.map((brandName)  => {
//  return brandName.name;
// });
//
// console.log(tvNames);

// //1b
// let soldOut = inventory.filter((out) => {
//   if (out.sold - out.originalStock === 0) {
//     return out.name;
//   }
// });
//
// console.log(soldOut);
//
// //1c
// let hasAmbilight = inventory.filter((light) => {
// if( light.options.ambiLight === true ) {
//   return light.name;
// }
// });

// console.log(hasAmbilight);

// //1d
// function sortArray(sortAb) {
//   return sortAb.sort((a, b) => a.price - b.price)
// }
//
// // inventory.sort((a, b) => {
// //   return a.price - b.price;
// // });
// //
// console.log(sortArray(inventory));

// //2a
// let sold = 0;
//   for (let i=0; i < inventory.length; i++) {
//     sold += inventory[i].sold;
// }
//
// //2b
// const soldTvs = document.getElementById("sold-tv");
//
// const soldTvsTitle = document.createElement("h3");
// soldTvsTitle.textContent = "Aantal verkochte tv's."
//
// const allSoldTvs = document.createElement("h4");
// allSoldTvs.textContent = sold;
// allSoldTvs.setAttribute("class", "sold-color");
//
// soldTvs.appendChild(soldTvsTitle);
// soldTvs.appendChild(allSoldTvs);
//
//
// // paragraph.textContent = 'Er zijn ' + sold + ' Televisies verkocht';
// // console.log(sold + " Televisies zijn er verkocht");
//
// //2c
// let purchased = 0;
//   for (let i=0; i < inventory.length; i++) {
//     purchased += inventory[i].originalStock;
//   }
//
// const purchasedTvs = document.getElementById("purchased-tv");
//
// const tvsInStock = document.createElement("h3");
// tvsInStock.textContent = "Aantal tv's"
//
// const numberTvsInStock = document.createElement("h4");
// numberTvsInStock.textContent = purchased;
// numberTvsInStock.setAttribute("class", "purchased-color");
//
// purchasedTvs.appendChild(tvsInStock);
// purchasedTvs.appendChild(numberTvsInStock);
//
// // paragraph1.textContent = 'Er zijn ' + purchased + ' Televisies ingekocht';
// // console.log(purchased + " Televisies zijn er ingekocht");
//
// //2e
//
// //let sell = purchased - sold;
//
// //2d
// const stock = document.getElementById("sell-tv");
//
// const currentStock = document.createElement("h3");
// currentStock.textContent = "Nog te verkopen tv's";
//
// const currentStockNumber = document.createElement("h4");
// currentStockNumber.textContent = `${purchased - sold}`;
// currentStockNumber.setAttribute("class", "sell-tv");
//
// stock.appendChild(currentStock);
// stock.appendChild(currentStockNumber);

// paragraph2.textContent = 'Er moeten nog ' + sell + ' Televisies verkocht worden';
// console.log(sell + " Televisies moeten verkocht worden")

// Opdracht 3a: Gebruik een array-methode om alle tv-merken
// (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven.
// Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan.
// Dat er dubbele namen in zitten, is niet erg.

// Opdracht 3b: Schrijf de code uit 3a om naar een
// functie die een array met tv-objecten verwacht.
// Het is handig om onze scripts als functies op te zetten,
// zodat we ze gemakkelijk kunnen hergebruiken.
// Tip: vergeet deze functie -declaratie niet aan te roepen!

// function brandsTv(tvBrand) {
//
//   const tvList = document.getElementById("list");
//
//   const listTitle = document.createElement("h3");
//   listTitle.textContent = "Tv merken"
//   listTitle.setAttribute("class", "title");
//
//   tvList.appendChild(listTitle);
//
//   inventory.map((listTv) => {
//     const newList = document.createElement("li");
//     newList.textContent = listTv.brand;
//     tvList.setAttribute("class", "brands");
//
//     return tvList.appendChild(newList);
//   });
// }






