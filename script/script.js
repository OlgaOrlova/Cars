$(document).ready(function () {
    $("#citroen").click(function () {
        $("#mainDropdown").hide();
        $("#mainDropdown").show();
    });
    $("#mazda").click(function () {
        $("#mainDropdown").hide();
        $("#mainDropdown").show();
    });
    $("#mercedes").click(function () {
        $("#mainDropdown").hide();
        $("#mainDropdown").show();
    });
});

$(document).ready(function () {
    $("#citroen").click(function () {
        $(".currentCarIndecator").hide();

        $("#triangle-downMini").show();
    });

    $("#mazda").click(function () {
        $(".currentCarIndecator").hide();
        $("#triangle-downMidle").show();
    });
    $("#mercedes").click(function () {
        $(".currentCarIndecator").hide();
        $("#triangle-downPremium").show();
    });

    $('li.triangle_red').mouseenter(function () {
        $('li.triangle_red').removeClass("active");
        $('a.rectangleRed').removeClass("active");
        $(this).addClass("active");
        $(this).children(":first").addClass("active");
    });
});