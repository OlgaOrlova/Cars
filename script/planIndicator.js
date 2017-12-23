var plans = {
    "mini": [
        new CarElement("Пороги внутренние", "images/icons/пороги.svg"),
        new CarElement("Торцы дверей", "images/icons/дверь.svg"),
        new CarElement("Полка заднего бампера", "images/icons/задний_бампер.svg"),
        new CarElement("Зеркала", "images/icons/зеркало.svg"),
        new CarElement("Фары", "images/icons/фара.svg"),
        new CarElement("Ручки", "images/icons/ручка.svg")
    ],
    "standart": [
        new CarElement("Часть капота", "images/icons/капот_перед.svg"),
        new CarElement("Часть крыльев", "images/icons/передняя_часть_крыла.svg"),
        new CarElement("Передний бампер", "images/icons/передний_бампер.svg"),
        new CarElement("Зеркала", "images/icons/зеркало.svg"),
        new CarElement("Фары", "images/icons/фара.svg"),
        new CarElement("Ручки", "images/icons/ручка.svg"),
        new CarElement("Противотуманки", "images/icons/противотуманки.svg")
    ], "standart1": [
        new CarElement("Капот", "images/icons/капот.svg"),
        new CarElement("Часть крыльев", "images/icons/передняя_часть_крыла.svg"),
        new CarElement("Передний бампер", "images/icons/передний_бампер.svg"),
        new CarElement("Зеркала", "images/icons/зеркало.svg"),
        new CarElement("Фары", "images/icons/фара.svg"),
        new CarElement("Ручки", "images/icons/ручка.svg"),
        new CarElement("Противотуманки", "images/icons/противотуманки.svg")
    ], "standart2": [
        new CarElement("Капот", "images/icons/капот.svg"),
        new CarElement("Крылья полностью", "images/icons/крыло.svg"),
        new CarElement("Передний бампер", "images/icons/передний_бампер.svg"),
        new CarElement("Зеркала", "images/icons/зеркало.svg"),
        new CarElement("Фары", "images/icons/фара.svg"),
        new CarElement("Ручки", "images/icons/ручка.svg"),
        new CarElement("Противотуманки", "images/icons/противотуманки.svg")
    ], "standart3": [
        new CarElement("Капот", "images/icons/капот.svg"),
        new CarElement("Крылья полностью", "images/icons/крыло.svg"),
        new CarElement("Задний бампер", "images/icons/задний_бампер.svg"),
        new CarElement("Зеркала", "images/icons/зеркало.svg"),
        new CarElement("Фары", "images/icons/фара.svg"),
        new CarElement("Ручки", "images/icons/ручка.svg"),
        new CarElement("Противотуманки", "images/icons/противотуманки.svg"),
        new CarElement("Передний бампер", "images/icons/передний_бампер.svg")
    ], "whole": [
        new CarElement("Капот", "images/icons/капот.svg"),
        new CarElement("Крылья полностью", "images/icons/крыло.svg"),
        new CarElement("Задний бампер", "images/icons/задний_бампер.svg"),
        new CarElement("Зеркала", "images/icons/зеркало.svg"),
        new CarElement("Фары", "images/icons/фара.svg"),
        new CarElement("Ручки", "images/icons/ручка.svg"),
        new CarElement("Противотуманки", "images/icons/противотуманки.svg"),
        new CarElement("Передний бампер", "images/icons/передний_бампер.svg"),
        new CarElement("Двери", "images/icons/дверь.svg")
    ]
};

function CarElement(name, imgRes) {
    this.name = name;
    this.imgRes = imgRes;
}

