var plans = {
    "mini": [
        new CarElement("Пороги внутренние", "images/icons/rapids.svg"),
        new CarElement("Торцы дверей", "images/icons/door.svg"),
        new CarElement("Полка заднего бампера", "images/icons/back_bumper.svg"),
        new CarElement("Зеркала", "images/icons/mirror.svg"),
        new CarElement("Фары", "images/icons/lamp.svg"),
        new CarElement("Ручки", "images/icons/grip.svg")
    ],
    "standart": [
        new CarElement("Часть капота", "images/icons/hood_part.svg"),
        new CarElement("Часть крыльев", "images/icons/wing_part.svg"),
        new CarElement("Передний бампер", "images/icons/front_bumper.svg"),
        new CarElement("Зеркала", "images/icons/mirror.svg"),
        new CarElement("Фары", "images/icons/lamp.svg"),
        new CarElement("Ручки", "images/icons/grip.svg"),
        new CarElement("Противотуманки", "images/icons/nofogs.svg")
    ], "standart1": [
        new CarElement("Капот", "images/icons/hood.svg"),
        new CarElement("Часть крыльев", "images/icons/wing_part.svg"),
        new CarElement("Передний бампер", "images/icons/front_bumper.svg"),
        new CarElement("Зеркала", "images/icons/mirror.svg"),
        new CarElement("Фары", "images/icons/lamp.svg"),
        new CarElement("Ручки", "images/icons/grip.svg"),
        new CarElement("Противотуманки", "images/icons/nofogs.svg")
    ], "standart2": [
        new CarElement("Капот", "images/icons/hood.svg"),
        new CarElement("Крылья полностью", "images/icons/wing.svg"),
        new CarElement("Передний бампер", "images/icons/front_bumper.svg"),
        new CarElement("Зеркала", "images/icons/mirror.svg"),
        new CarElement("Фары", "images/icons/lamp.svg"),
        new CarElement("Ручки", "images/icons/grip.svg"),
        new CarElement("Противотуманки", "images/icons/nofogs.svg")
    ], "standart3": [
        new CarElement("Капот", "images/icons/hood.svg"),
        new CarElement("Крылья полностью", "images/icons/wing.svg"),
        new CarElement("Задний бампер", "images/icons/back_bumper.svg"),
        new CarElement("Зеркала", "images/icons/mirror.svg"),
        new CarElement("Фары", "images/icons/lamp.svg"),
        new CarElement("Ручки", "images/icons/grip.svg"),
        new CarElement("Противотуманки", "images/icons/nofogs.svg"),
        new CarElement("Передний бампер", "images/icons/front_bumper.svg")
    ], "whole": [
        new CarElement("Капот", "images/icons/hood.svg"),
        new CarElement("Крылья полностью", "images/icons/wing.svg"),
        new CarElement("Задний бампер", "images/icons/back_bumper.svg"),
        new CarElement("Зеркала", "images/icons/mirror.svg"),
        new CarElement("Фары", "images/icons/lamp.svg"),
        new CarElement("Ручки", "images/icons/grip.svg"),
        new CarElement("Противотуманки", "images/icons/nofogs.svg"),
        new CarElement("Передний бампер", "images/icons/front_bumper.svg"),
        new CarElement("Двери", "images/icons/door.svg")
    ]
};

function CarElement(name, imgRes) {
    this.name = name;
    this.imgRes = imgRes;
}

