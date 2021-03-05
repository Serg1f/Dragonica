// start show top overlay || показывается верхний овелей
let topOverlay = document.querySelector(".top-overlay");

window.onload = function () {
  return setTimeout(showOverlay, 3000);
};

let showOverlay = function () {
  topOverlay.style.transform = "translateY(0)";
};
// end show top overlay || показывается верхний овелей

// start switch languge || смена языка
let rusBtn = document.querySelector(".rus-btn");
let engBtn = document.querySelector(".eng-btn");
let rusText = document.querySelectorAll(".rus-text");
let engText = document.querySelectorAll(".eng-text");
let rusImg = document.querySelectorAll(".rus-img");

rusBtn.onclick = function () {
  rusBtn.classList.add("hidden");
  engBtn.classList.remove("hidden");
  for (let numbersOfText = 0; numbersOfText < rusText.length; numbersOfText++) {
    rusText[numbersOfText].classList.add("hidden");
    engText[numbersOfText].classList.remove("hidden");
  }
  for (let numbersOfImg = 0; numbersOfImg < rusImg.length; numbersOfImg++) {
    rusImg[numbersOfImg].classList.remove("rus-img");
    rusImg[numbersOfImg].classList.add("eng-img");
  }
};

engBtn.onclick = function () {
  engBtn.classList.add("hidden");
  rusBtn.classList.remove("hidden");
  for (let numbersOfText = 0; numbersOfText < rusText.length; numbersOfText++) {
    engText[numbersOfText].classList.add("hidden");
    rusText[numbersOfText].classList.remove("hidden");
  }
  for (let numbersOfImg = 0; numbersOfImg < rusImg.length; numbersOfImg++) {
    rusImg[numbersOfImg].classList.remove("eng-img");
    rusImg[numbersOfImg].classList.add("rus-img");
  }
};
// end switch languge || смена языка

// start database//
let database = {
  1: {
    xy: "-240px -160px",
    imgUrl: 'url("img/sprite-1.png")',
    name: "Шарик дружбы",
    lvl: "1",
    firstClass: "img/woman.gif",
    secondClass: "img/man.gif",
    slot: "Прочее",
    set: "24765",
  },
  2: {
    xy: "-160px -280px",
    imgUrl: 'url("img/sprite-2.png")',
    name: "Шальной ящер",
    lvl: "1",
    firstClass: "img/woman.gif",
    secondClass: "img/man.gif",
    slot: "Зверь",
    set: "15957",
  },
  3: {
    xy: "-320px -360px",
    imgUrl: 'url("img/sprite-3.png")',
    name: "Знак Братства дракона",
    lvl: "20",
    firstClass: "img/woman.gif",
    secondClass: "img/man.gif",
    slot: "Шея",
    set: "9295",
  },
  4: {
    xy: "-0px -0px",
    imgUrl: 'url("img/sprite-4.png")',
    name: "Кольцо силы I",
    lvl: "7",
    firstClass: "img/woman.gif",
    secondClass: "img/man.gif",
    slot: "Палец",
    set: "8212",
  },
  5: {
    xy: "-240px -320px",
    imgUrl: 'url("img/sprite-5.png")',
    name: "Редкое клеверное кольцо",
    lvl: "5",
    firstClass: "img/woman.gif",
    secondClass: "img/man.gif",
    slot: "Палец",
    set: "6861",
  },
  6: {
    xy: "-360px -440px",
    imgUrl: 'url("img/sprite-6.png")',
    name: "Противогаз",
    lvl: "19",
    firstClass: "img/woman.gif",
    secondClass: "img/man.gif",
    slot: "Шлем",
    set: "5897",
  },
  7: {
    xy: "-240px -0px",
    imgUrl: 'url("img/sprite-7.png")',
    name: "Посох ученика",
    firstClass: false,
    secondClass: false,
    lvl: "1",
    slot: "Оружие",
    set: "4977",
  },
  8: {
    xy: "-240px -0px",
    imgUrl: 'url("img/sprite-8.png")',
    name: "Бронзовый меч",
    firstClass: false,
    secondClass: false,
    lvl: "1",
    slot: "Оружие",
    set: "4899",
  },
  9: {
    xy: "-120px -400px",
    imgUrl: 'url("img/sprite-9.png")',
    name: "Ремень Фаррелла",
    lvl: "21",
    firstClass: "img/woman.gif",
    secondClass: "img/man.gif",
    slot: "Пояс",
    set: "4726",
  },
  10: {
    xy: "-280px -320px",
    imgUrl: 'url("img/sprite-10.png")',
    name: "Редкие клеверные серьги",
    lvl: "5",
    firstClass: "img/woman.gif",
    secondClass: "img/man.gif",
    slot: "Уши",
    set: "4711",
  },
};
// end database//

let resultNumber = document.querySelector(".armory-result-number");
resultNumber.textContent = Object.keys(database).length;

let rows = document.querySelectorAll(".armory-items-row");
let itemImg = document.querySelectorAll(".name-img");
let itemName = document.querySelectorAll(".name");
let itemLvl = document.querySelectorAll(".armory-item-lvl");
let firstClass = document.querySelectorAll(".first-class");
let secondClass = document.querySelectorAll(".second-class");
let itemSlot = document.querySelectorAll('.armory-item-slot');
let itemSet = document.querySelectorAll('.armory-item-set');

for (let numbersOfRows = 0; numbersOfRows < rows.length; numbersOfRows++) {
  itemImg[numbersOfRows].style.backgroundImage = Object.values(database)[
    numbersOfRows
  ].imgUrl;
  itemImg[numbersOfRows].style.backgroundPosition = Object.values(database)[
    numbersOfRows
  ].xy;
  itemName[numbersOfRows].textContent = Object.values(database)[
    numbersOfRows
  ].name;
  itemLvl[numbersOfRows].textContent = Object.values(database)[
    numbersOfRows
  ].lvl;
  if (Object.values(database)[numbersOfRows].firstClass === false) {
    firstClass[numbersOfRows].classList.add('hidden');
    secondClass[numbersOfRows].classList.add('hidden');
  } else {
    firstClass[numbersOfRows].src = Object.values(database)[
      numbersOfRows
    ].firstClass;
    secondClass[numbersOfRows].classList.remove("hidden");
    secondClass[numbersOfRows].src = Object.values(database)[
      numbersOfRows
    ].secondClass;
  }
  itemSlot[numbersOfRows].textContent = Object.values(database)[numbersOfRows].slot;
  itemSet[numbersOfRows].textContent = Object.values(database)[numbersOfRows].set;
}
