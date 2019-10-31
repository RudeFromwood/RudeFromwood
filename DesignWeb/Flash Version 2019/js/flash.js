//On positionne Flash en relative pour accéder aux déplacements X et Y
//Par défaut un élément est statique


$('#flashID').css("position","relative");


$('#leftb').click(function(){
    $('#flashID').css("left","-=100px");
});

$('#rightb').click(function(){
    $('#flashID').css("left","+=100px");
});

$('#downb').click(function(){
    $('#flashID').css("margin-top","+=100px");
});

$('#upb').click(function(){
    $('#flashID').css("margin-top","-=100px");
});



