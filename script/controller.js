var cars = {
    "mini": [
        "images/cars/citroen/минимальный.jpg",
        "images/cars/citroen/стандарт.jpg",
        "images/cars/citroen/стандарт1.jpg",
        "images/cars/citroen/стандарт2.jpg",
        "images/cars/citroen/стандарт3.jpg",
        "images/cars/citroen/целиком.jpg",

        "images/cars/citroen/оптика.jpg",
        "images/cars/citroen/пороги-внутренние.jpg",
        "images/cars/citroen/пороги-наружние.jpg",
        "images/cars/citroen/двери.jpg ",
        "images/cars/citroen/задние-крылья.jpg",
        "images/cars/citroen/капот.jpg",
        "images/cars/citroen/передний-бампер.jpg",
        "images/cars/citroen/задний-бампер.jpg"
    ],
    "mazda": [
        "images/cars/mazda/минимальный.jpg",
        "images/cars/mazda/стандарт.jpg",
        "images/cars/mazda/стандарт1.jpg",
        "images/cars/mazda/стандарт2.jpg",
        "images/cars/mazda/стандарт3.jpg",
        "images/cars/mazda/целиком.jpg",

        "images/cars/mazda/оптика.jpg",
        "images/cars/mazda/пороги-внутренние.jpg",
        "images/cars/mazda/пороги-наружние.jpg",
        "images/cars/mazda/двери.jpg ",
        "images/cars/mazda/задние-крылья.jpg",
        "images/cars/mazda/капот.jpg",
        "images/cars/mazda/передний-бампер.jpg",
        "images/cars/mazda/задний-бампер.jpg"
    ],
    "mercedes": [
        "images/cars/mercedes/минимальный.jpg",
        "images/cars/mercedes/стандарт.jpg",
        "images/cars/mercedes/стандарт1.jpg",
        "images/cars/mercedes/стандарт2.jpg",
        "images/cars/mercedes/стандарт3.jpg",
        "images/cars/mercedes/целиком.jpg",

        "images/cars/mercedes/оптика.jpg",
        "images/cars/mercedes/пороги-внутренние.jpg",
        "images/cars/mercedes/пороги-наружние.jpg",
        "images/cars/mercedes/двери.jpg ",
        "images/cars/mercedes/задние-крылья.jpg",
        "images/cars/mercedes/капот.jpg",
        "images/cars/mercedes/передний-бампер.jpg",
        "images/cars/mercedes/задний-бампер.jpg"

    ],
};

function selectDefaultCar() {
    var arr = document.getElementsByClassName("triangle_red");
    for (var i = 0; i < arr.length; i++) {
        arr[i].classList.remove("active");
        arr[i].childNodes[0].classList.remove("active");
    }

    var a = document.getElementById("categorieStandart2");
    a.classList.add("active");
    a.childNodes[0].classList.add("active");
}

var currCar = 0;

document.querySelector("#citroen").addEventListener("click",
    function (index) {
        currCar = 0;
        selectDefaultCar();
        onListItemSelected(3);

    });
document.querySelector("#mazda").addEventListener("click",
    function (index) {
        currCar = 1;
        selectDefaultCar();
        onListItemSelected(3);

    });
document.querySelector("#mercedes").addEventListener("click",
    function (index) {
        currCar = 2;
        selectDefaultCar();
        onListItemSelected(3);

    });

function changeImage(index, src) {
    var a = document.getElementById("blockContent1");
    var block = document.getElementById("bigImg");
    block.src = src[index];

    a.appendChild(block);
}

function showPlanIndicator(index) {
    var container = document.getElementById("planIndicators");

    if (index > 5) {
        container.innerHTML = "";
        return;
    }
    var carElements;
    switch (index) {
        case 0:
            carElements = plans.mini;
            break;
        case 1:
            carElements = plans.standart;
            break;
        case 2:
            carElements = plans.standart1;
            break;
        case 3:
            carElements = plans.standart2;
            break;
        case 4:
            carElements = plans.standart3;
            break;
        case 5:
            carElements = plans.whole;
            break;
    }
    var template = document.getElementById("planIndicatorTemplate");
    var templateSnippet = Handlebars.compile(template.innerHTML);
    var pre = {"carElements": carElements};
    var a = templateSnippet(pre);
    container.innerHTML = a;
}

function onListItemSelected(index) {
    var currentCar = getCurrentCar();
    var src;
    switch (currentCar) {
        case 0:
            src = cars.mini;
            break;
        case 1:
            src = cars.mazda;
            break;
        case 2:
            src = cars.mercedes;
            break;
    }
    changeImage(index, src);
    showPlanIndicator(index);
}

function getCurrentCar() {
    return currCar;
}

document.querySelector("#categorieMin").addEventListener("mouseover",
    function (index) {
        onListItemSelected(0);
    });
document.querySelector("#categorieStandart").addEventListener("mouseover",
    function (index) {
        onListItemSelected(1);
    });
document.querySelector("#categorieStandart1").addEventListener("mouseover",
    function (index) {
        onListItemSelected(2);
    });
document.querySelector("#categorieStandart2").addEventListener("mouseover",
    function (index) {
        onListItemSelected(3);
    });
document.querySelector("#categorieStandart3").addEventListener("mouseover",
    function (index) {
        onListItemSelected(4);
    });
document.querySelector("#full").addEventListener("mouseover",
    function (index) {
        onListItemSelected(5);
    });

document.querySelector("#subcatOptic").addEventListener("mouseover",
    function (index) {
        onListItemSelected(6);
    });
document.querySelector("#subcatPorogInner").addEventListener("mouseover",
    function (index) {
        onListItemSelected(7);
    });
document.querySelector("#subcatPorogOuter").addEventListener("mouseover",
    function (index) {
        onListItemSelected(8);
    });
document.querySelector("#subcatDoor").addEventListener("mouseover",
    function (index) {
        onListItemSelected(9);
    });
document.querySelector("#subcatSides").addEventListener("mouseover",
    function (index) {
        onListItemSelected(10);
    });
document.querySelector("#subcatFrone").addEventListener("mouseover",
    function (index) {
        onListItemSelected(11);
    });

document.querySelector("#subcatFront").addEventListener("mouseover",
    function (index) {
        onListItemSelected(12);
    });
document.querySelector("#subcatBack").addEventListener("mouseover",
    function (index) {
        onListItemSelected(13);
    });

