$(document).ready(function () {

    /* Cambiar color texto */
$(".Elegir1").click(function(){

    $("#p1").css('color','fuchsia');
    $("#p2").css('color','white');
    $("#p3").css('color','white');

    $("#p1").show();
    $("#p2").hide();
    $("#p3").hide();
}
);

$(".Elegir2").click(function(){

    $("#p1").css('color','white');
    $("#p2").css('color','fuchsia');
    $("#p3").css('color','white');

    $("#p1").hide();
    $("#p2").show();
    $("#p3").hide();
}
);

$(".Elegir3").click(function(){

    $("#p1").css('color','white');
    $("#p2").css('color','white');
    $("#p3").css('color','fuchsia');

    $("#p1").hide();
    $("#p2").hide();
    $("#p3").show();
}
);

/* Efecto de seleccion de personaje */
$(".Img1, .Elegir1").mouseenter(function(){
    $(".Img1").css('transform','scale(110%)');
    $(".Img1").css('filter','brightness(100%)');
}
);

$(".Img1, .Elegir1").mouseleave(function(){
    $(".Img1").css('transform','scale(100%)');
    $(".Img1").css('filter','brightness(60%)');
}
);

$(".Img2,.Elegir2").mouseenter(function(){
    $(".Img2").css('transform','scale(110%)');
    $(".Img2").css('filter','brightness(100%)');
}
);

$(".Img2, .Elegir2").mouseleave(function(){
    $(".Img2").css('transform','scale(100%)');
    $(".Img2").css('filter','brightness(60%)');
}
);

$(".Img3, .Elegir3").mouseenter(function(){
    $(".Img3").css('transform','scale(110%)');
    $(".Img3").css('filter','brightness(100%)');
}
);

$(".Img3, .Elegir3").mouseleave(function(){
    $(".Img3").css('transform','scale(100%)');
    $(".Img3").css('filter','brightness(60%)');
}
);




}
);