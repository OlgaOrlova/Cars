var cars = {
    "mini": [
        "images/cars/citroen/min.jpg",
        "images/cars/citroen/st.jpg",
        "images/cars/citroen/st1.jpg",
        "images/cars/citroen/st2.jpg",
        "images/cars/citroen/st3.jpg",
        "images/cars/citroen/whole.jpg",

        "images/cars/citroen/optic.jpg",
        "images/cars/citroen/rapids_inner.jpg",
        "images/cars/citroen/rapids_outer.jpg",
        "images/cars/citroen/doors.jpg ",
        "images/cars/citroen/back_wing.jpg",
        "images/cars/citroen/hood.jpg",
        "images/cars/citroen/front_bumper.jpg",
        "images/cars/citroen/back_bumper.jpg"
    ],
    "mazda": [
        "images/cars/mazda/min.jpg",
        "images/cars/mazda/st.jpg",
        "images/cars/mazda/st1.jpg",
        "images/cars/mazda/st2.jpg",
        "images/cars/mazda/st3.jpg",
        "images/cars/mazda/whole.jpg",

        "images/cars/mazda/optic.jpg",
        "images/cars/mazda/rapids_inner.jpg",
        "images/cars/mazda/rapids_outer.jpg",
        "images/cars/mazda/doors.jpg ",
        "images/cars/mazda/back_wing.jpg",
        "images/cars/mazda/hood.jpg",
        "images/cars/mazda/front_bumper.jpg",
        "images/cars/mazda/back_bumper.jpg"
    ],
    "mercedes": [
        "images/cars/mercedes/min.jpg",
        "images/cars/mercedes/st.jpg",
        "images/cars/mercedes/st1.jpg",
        "images/cars/mercedes/st2.jpg",
        "images/cars/mercedes/st3.jpg",
        "images/cars/mercedes/whole.jpg",

        "images/cars/mercedes/optic.jpg",
        "images/cars/mercedes/rapids_inner.jpg",
        "images/cars/mercedes/rapids_outer.jpg",
        "images/cars/mercedes/doors.jpg ",
        "images/cars/mercedes/back_wing.jpg",
        "images/cars/mercedes/hood.jpg",
        "images/cars/mercedes/front_bumper.jpg",
        "images/cars/mercedes/back_bumper.jpg"

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

