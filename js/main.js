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
    className: "Люди",
    not:
      "поместить на склад/улучшить вставкой предметов/выставить на продажу на рынке/отправить по почте/хранить на складе/менять/продать в магазине",
    spellEffect: "Можно улучшить у Кузнеца.",
    itemEffect: "Здоровье +5 Ловкость + 5 Интеллект + 5 Сила + 5",
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
    className: "Люди",
    not:
      "поместить на склад/разыграть в лотерею/запечатать/улучшить вставкой предметов/улучшить магией духа/зачаровать/выставить на продажу на рынке/отправить по почте/хранить на складе/менять/продать в магазине",
    spellEffect: "Нет данных",
    itemEffect: "Нет данных",
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
    className: "Люди",
    not:
      "улучшить вставкой предметов/выставить на продажу на рынке/отправить по почте/менять/продать в магазине",
    spellEffect: "Можно улучшить у Кузнеца.",
    itemEffect: "Нет данных",
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
    className: "Люди",
    not: "улучшить вставкой предметов",
    spellEffect: "Можно улучшить у Кузнеца.",
    itemEffect: "Защ +7 МЗащ +5",
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
    className: "Люди",
    not: "улучшить вставкой предметов/продать в магазине",
    spellEffect: "Можно улучшить у Кузнеца.",
    itemEffect: "Защ +4 МЗащ +2",
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
    className: "Люди",
    not: "продать в магазине",
    spellEffect: "Можно улучшить у Кузнеца.",
    itemEffect: "ОЗ +325 Защ +65 МЗащ +36",
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
    className: "Еретик",
    not: "улучшить магией духа/зачаровать",
    spellEffect: "Нет данных",
    itemEffect:
      "Макс. физ. атака +30 Мин. физ. атака +27 Макс. маг. атака +41 Мин. маг. атака +36",
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
    className: "Чемпион",
    not: "улучшить магией духа/зачаровать",
    spellEffect: "Нет данных",
    itemEffect:
      " Макс. физ. атака +42 Мин. физ. атака +33 Макс. маг. атака +16 Мин. маг. атака +14",
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
    className: "Люди",
    not: "Нет данных",
    spellEffect: "Можно улучшить у Кузнеца.",
    itemEffect: "Защ +25 МЗащ +21 Восст-е ОМ +40%",
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
    className: "Люди",
    not: "улучшить вставкой предметов/продать в магазине",
    spellEffect: "Можно улучшить у Кузнеца.",
    itemEffect: "Защ +3 МЗащ +5",
  },
};
// end database//

//render function//
let renderBlock = function (ElemnName, className) {
  let block = document.createElement(ElemnName);
  block.classList.add(className);
  return block;
};
//render function//

//start items filling наполнение предметов//
let resultNumber = document.querySelector(".armory-result-number");
resultNumber.textContent = Object.keys(database).length;

let rows = document.querySelectorAll(".armory-items-row");
let itemImg = document.querySelectorAll(".name-img");
let itemName = document.querySelectorAll(".name");
let itemLvl = document.querySelectorAll(".armory-item-lvl");
let firstClass = document.querySelectorAll(".first-class");
let secondClass = document.querySelectorAll(".second-class");
let itemSlot = document.querySelectorAll(".armory-item-slot");
let itemSet = document.querySelectorAll(".armory-item-set");
let hoverItems = document.querySelectorAll(".item-hover");
let hoverImg = document.querySelectorAll(".hover-title-img");
let hoverName = document.querySelectorAll(".hover-title-name");
let hoverClass = document.querySelectorAll(".hover-class");

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
    firstClass[numbersOfRows].classList.add("hidden");
    secondClass[numbersOfRows].classList.add("hidden");
  } else {
    firstClass[numbersOfRows].src = Object.values(database)[
      numbersOfRows
    ].firstClass;
    secondClass[numbersOfRows].classList.remove("hidden");
    secondClass[numbersOfRows].src = Object.values(database)[
      numbersOfRows
    ].secondClass;
  }
  itemSlot[numbersOfRows].textContent = Object.values(database)[
    numbersOfRows
  ].slot;
  itemSet[numbersOfRows].textContent = Object.values(database)[
    numbersOfRows
  ].set;
  //start filling hover blocks//
  hoverImg[numbersOfRows].style.backgroundImage = Object.values(database)[
    numbersOfRows
  ].imgUrl;
  hoverImg[numbersOfRows].style.backgroundPosition = Object.values(database)[
    numbersOfRows
  ].xy;
  hoverName[numbersOfRows].textContent = Object.values(database)[
    numbersOfRows
  ].name;
  hoverClass[numbersOfRows].textContent = `[${
    Object.values(database)[numbersOfRows].slot
  }]`;
  let hoverMain = hoverItems[numbersOfRows].querySelector(".hover-main");

  let mainLvl = renderBlock("div", "simple-hover-text");
  mainLvl.textContent =
    "Треб. Ур.: " + Object.values(database)[numbersOfRows].lvl;
  hoverMain.appendChild(mainLvl);

  let mainClass = renderBlock("div", "simple-hover-text");
  mainClass.textContent =
    "Класс: " + Object.values(database)[numbersOfRows].className;
  hoverMain.appendChild(mainClass);

  let not = renderBlock("div", "hover-not");
  let notTitle = renderBlock("div", "not-title");
  notTitle.textContent = "Нельзя:";
  let notText = renderBlock("div", "not-text");

  notText.classList.add("simple-hover-text");
  notText.textContent = Object.values(database)[numbersOfRows].not;

  not.appendChild(notTitle);
  not.appendChild(notText);
  hoverMain.appendChild(not);

  let spell = renderBlock("div", "spell");
  let spellTitle = renderBlock("div", "red-text");
  let spellText = renderBlock("div", "simple-hover-text");

  spellTitle.textContent = "Воздействие чар";
  spellText.textContent = Object.values(database)[numbersOfRows].spellEffect;

  spell.appendChild(spellTitle);
  spell.appendChild(spellText);
  hoverMain.appendChild(spell);

  let itemEffect = renderBlock("div", "item-effect");
  let effectTitle = renderBlock("div", "red-text");
  let effectText = renderBlock("div", "simple-hover-text");

  effectTitle.textContent = "Эффект от надетого предмета:";
  effectText.textContent = Object.values(database)[numbersOfRows].itemEffect;
  effectText.style.width = "180px";

  itemEffect.appendChild(effectTitle);
  itemEffect.appendChild(effectText);
  hoverMain.appendChild(itemEffect);

  //start filling hover blocks//
}

let armoryItems = document.querySelector(".armory-items");
let headL = document.querySelector(".armory-items-title");

for (let numbersOfName = 0; numbersOfName < itemName.length; numbersOfName++) {}
//end items filling наполнение предметов//

// start show hover block//

for (let numbersOfName = 0; numbersOfName < itemName.length; numbersOfName++) {
  let click = 0;
  itemName[numbersOfName].onclick = function () {
    headL.classList.add("hidden");
    for (let r = 0; r < rows.length; r++) {
      rows[r].classList.add("hidden");
    }
    let hoverItem = hoverItems[numbersOfName];
    hoverItem.style.position = "relative";
    hoverItem.style.left = "25px";
    hoverItem.style.top = "25px";
    hoverItem.style.marginBottom = "45px";
    hoverItem.classList.remove("hidden");
    armoryItems.appendChild(hoverItem);
    click++;
    return click;
  };
  itemName[numbersOfName].onmouseover = function () {
    hoverItems[numbersOfName].classList.remove("hidden");
  };
  itemName[numbersOfName].onmouseout = function () {
    if (click === 0) {
      hoverItems[numbersOfName].classList.add("hidden");
    }
  };
}

//end show hover block//
