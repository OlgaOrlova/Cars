var plans = {
    "mini": [
        new CarElement("Пороги внутренние", "images/icons/пороги.svg"),
        new CarElement("Торцы дверей", "images/icons/дверь.svg"),
        new CarElement("Полка заднего бампера", "images/icons/задний_бампер.svg"),
        new CarElement("Зеркала", "images/icons/зеркало.svg"),
        new CarElement("Фары", "images/icons/фара.svg"),
        new CarElement("Ручки", "images/icons/ручка.svg")
    ]
};

function CarElement(name, imgRes) {
    this.name = name;
    this.imgRes = imgRes;
}

