var cars = {
    "images": [
                    "images/cars/citroen/mainCitroen.jpg ",
                    "images/cars/mazda/mainMazda.jpg",
                    "images/cars/mercedes/mainMercedes.jpg"
                ],
    "mini": [
        "images/cars/citroen/минимальный.jpg",
        "images/cars/citroen/стандарт.jpg",
        "images/cars/citroen/стандарт1.jpg",
        "images/cars/citroen/стандарт2.jpg",
        "images/cars/citroen/стандарт3.jpg",
        "images/cars/citroen/целиком.jpg",
        "images/cars/citroen/двери.jpg ",
        "images/cars/citroen/задние-крылья.jpg",
        "images/cars/citroen/задний-бампер.jpg",
        "images/cars/citroen/капот.jpg",
        "images/cars/citroen/оптика.jpg",
        "images/cars/citroen/передний-бампер.jpg",
        "images/cars/citroen/пороги-внутренние.jpg",
        "images/cars/citroen/пороги-наружние.jpg"
    ],
    "mazda": [
        "images/cars/mazda/минимальный.jpg",
        "images/cars/mazda/стандарт.jpg",
        "images/cars/mazda/стандарт1.jpg",
        "images/cars/mazda/стандарт2.jpg",
        "images/cars/mazda/стандарт3.jpg",
        "images/cars/mazda/целиком.jpg",
        "images/cars/mazda/двери.jpg ",
        "images/cars/mazda/задние-крылья.jpg",
        "images/cars/mazda/задний-бампер.jpg",
        "images/cars/mazda/капот.jpg",
        "images/cars/mazda/оптика.jpg",
        "images/cars/mazda/передний-бампер.jpg",
        "images/cars/mazda/пороги-внутренние.jpg",
        "images/cars/mazda/пороги-наружние.jpg"
    ],
    "mercedes": [
        "images/cars/mercedes/минимальный.jpg",
        "images/cars/mercedes/стандарт.jpg",
        "images/cars/mercedes/стандарт1.jpg",
        "images/cars/mercedes/стандарт2.jpg",
        "images/cars/mercedes/стандарт3.jpg",
        "images/cars/mercedes/целиком.jpg",
        "images/cars/mercedes/двери.jpg ",
        "images/cars/mercedes/задние-крылья.jpg",
        "images/cars/mercedes/задний-бампер.jpg",
        "images/cars/mercedes/капот.jpg",
        "images/cars/mercedes/оптика.jpg",
        "images/cars/mercedes/передний-бампер.jpg",
        "images/cars/mercedes/пороги-внутренние.jpg",
        "images/cars/mercedes/пороги-наружние.jpg"

    ],
        }

        function insertImg(index) {
   var a = document.getElementById("blockContent1");
           var block = document.getElementById("bigImg");
            block.src = cars.images[index];
           a.appendChild(block);
           currCar = index;
        }

        var currCar=0;

document.querySelector("#citroen").addEventListener("click",
    function (index) {
    insertImg(0);
});
document.querySelector("#mazda").addEventListener("click",
function (index) {
    insertImg(1);
});
document.querySelector("#mercedes").addEventListener("click",
function (index) {
    insertImg(2);
});

function changeImage(index, src) {
    var a = document.getElementById("blockContent1");
    var block = document.getElementById("bigImg");
    block.src = src[index];

    a.appendChild(block);
}

function changePackImage(index) {
    var currentCar = getCurrentCar();
    var src;
    switch (currentCar){
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
}

function getCurrentCar(){
    return currCar;
}

document.querySelector("#categorieMin").addEventListener("mouseover",
    function (index) {
        changePackImage(0);
    });
document.querySelector("#categorieStandart").addEventListener("mouseover",
    function (index) {
        changePackImage(1);
    });
document.querySelector("#categorieStandart1").addEventListener("mouseover",
    function (index) {
        changePackImage(2);
    });
document.querySelector("#categorieStandart2").addEventListener("mouseover",
    function (index) {
        changePackImage(3);
    });
document.querySelector("#categorieStandart3").addEventListener("mouseover",
    function (index) {
        changePackImage(4);
    });
document.querySelector("#full").addEventListener("mouseover",
    function (index) {
        changePackImage(5);
    });

