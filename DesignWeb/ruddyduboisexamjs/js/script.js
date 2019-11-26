$("#i1").hide();
$("#i2").hide();
$("#i3").hide();
$("#i4").hide();
$("#i5").hide();
$("#i6").hide();
$("#i7").hide();
$("#i8").hide();
$("#i9").hide();
$("#i10").hide();
$("#i11").hide();
$("#i12").hide();
$("#i13").hide();



$('#enter').click(function(){

    $("#i1").hide();
    $("#i2").hide();
    $("#i3").hide();
    $("#i4").hide();
    $("#i5").hide();
    $("#i6").hide();
    $("#i7").hide();
    $("#i8").hide();
    $("#i9").hide();
    $("#i10").hide();
    $("#i11").hide();
    $("#i12").hide();

    text = $('#text1').val().toUpperCase();

    if(text.length < 3){
        alert("Le mot doit faire au moins 3 lettres")
    }
    if(text.length >= 3){
        $("#i1").show();
        $("#i2").show();
        $("#i3").show();
    }
    if(text.length >= 3){
        $("#i3").show();
    }
    if(text.length >= 4){
        $("#i4").show();
    }
    if(text.length >= 5){
        $("#i5").show();
    }
    if(text.length >= 6){
        $("#i6").show();
    }
    if(text.length >= 7){
        $("#i7").show();
    }
    if(text.length >= 8){
        $("#i8").show();
    }
    if(text.length >= 9){
        $("#i9").show();
    }
    if(text.length >= 10){
        $("#i10").show();
    }
    if(text.length >= 11){
        $("#i11").show();
    }
    if(text.length >= 12){
        $("#i12").show();
    }
    if(text.length > 12){
        $("#i1").hide();
        $("#i2").hide();
        $("#i3").hide();
        $("#i4").hide();
        $("#i5").hide();
        $("#i6").hide();
        $("#i7").hide();
        $("#i8").hide();
        $("#i9").hide();
        $("#i10").hide();
        $("#i11").hide();
        $("#i12").hide();
        alert("votre mot ne peux pas être plus grand que 13")
    }

    $("#i1").attr("src","img/letters/"+text[0]+"/"+text[0]+"1.jpg");
    $("#i2").attr("src","img/letters/"+text[1]+"/"+text[1]+"1.jpg");
    $("#i3").attr("src","img/letters/"+text[2]+"/"+text[2]+"1.jpg");
    $("#i4").attr("src","img/letters/"+text[3]+"/"+text[3]+"1.jpg");
    $("#i5").attr("src","img/letters/"+text[4]+"/"+text[4]+"1.jpg");
    $("#i6").attr("src","img/letters/"+text[5]+"/"+text[5]+"1.jpg");
    $("#i7").attr("src","img/letters/"+text[6]+"/"+text[6]+"1.jpg");
    $("#i8").attr("src","img/letters/"+text[7]+"/"+text[7]+"1.jpg");
    $("#i9").attr("src","img/letters/"+text[8]+"/"+text[8]+"1.jpg");
    $("#i10").attr("src","img/letters/"+text[9]+"/"+text[9]+"1.jpg");
    $("#i11").attr("src","img/letters/"+text[10]+"/"+text[10]+"1.jpg");
    $("#i12").attr("src","img/letters/"+text[11]+"/"+text[11]+"1.jpg");

});

$('#c1').click(function() {
    $("#c").attr("class","col-12 text-center bg1");
});
$('#c2').click(function() {
    $("#c").attr("class","col-12 text-center bg2");
});
$('#c3').click(function() {
    $("#c").attr("class","col-12 text-center bg3");
});
$('#c4').click(function() {
    $("#c").attr("class","col-12 text-center bg4");
});
$('#c5').click(function() {
    $("#c").attr("class","col-12 text-center bg5");
});
$('#c6').click(function() {
    $("#c").attr("class","col-12 text-center bg6");
});
$('#c7').click(function() {
    $("#c").attr("class","col-12 text-center bg7");
});




text = [0];

//bruh