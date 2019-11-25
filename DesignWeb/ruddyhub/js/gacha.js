var pull1;
var pull2;
var pull3;
var pull4;
var pull5;
var pull6;
var pull7;
var pull8;
var pull9;
var pull10;
var pull11;

var rarity = ["ur","sr","sr","sr","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r"];

var card = ["1","2","3","4","5","6","7","8","9"];

var box = 2;

pull1 = (Math.floor(Math.random() * card.length)) + 1;
pull2 = (Math.floor(Math.random() * card.length)) + 1;
pull3 = (Math.floor(Math.random() * card.length)) + 1;
pull4 = (Math.floor(Math.random() * card.length)) + 1;
pull5 = (Math.floor(Math.random() * card.length)) + 1;
pull6 = (Math.floor(Math.random() * card.length)) + 1;
pull7 = (Math.floor(Math.random() * card.length)) + 1;
pull8 = (Math.floor(Math.random() * card.length)) + 1;
pull9 = (Math.floor(Math.random() * card.length)) + 1;
pull10 = (Math.floor(Math.random() * card.length)) + 1;
pull11 = (Math.floor(Math.random() * card.length)) + 1;

rar1 = (Math.floor(Math.random() * rarity.length));
rar2 = (Math.floor(Math.random() * rarity.length));
rar3 = (Math.floor(Math.random() * rarity.length));
rar4 = (Math.floor(Math.random() * rarity.length));
rar5 = (Math.floor(Math.random() * rarity.length));
rar6 = (Math.floor(Math.random() * rarity.length));
rar7 = (Math.floor(Math.random() * rarity.length));
rar8 = (Math.floor(Math.random() * rarity.length));
rar9 = (Math.floor(Math.random() * rarity.length));
rar10 = (Math.floor(Math.random() * rarity.length));
rar11 = (Math.floor(Math.random() * rarity.length));

console.log(rar1);

$("#pull").click(function(){
    $("#pull1").attr("src","img/gacha/"+box+"/"+rarity[rar1]+"/"+pull1+".png");
    $("#pull2").attr("src","img/gacha/"+box+"/"+rarity[rar2]+"/"+pull2+".png");
    $("#pull3").attr("src","img/gacha/"+box+"/"+rarity[rar3]+"/"+pull3+".png");
    $("#pull4").attr("src","img/gacha/"+box+"/"+rarity[rar4]+"/"+pull4+".png");
    $("#pull5").attr("src","img/gacha/"+box+"/"+rarity[rar5]+"/"+pull5+".png");
    $("#pull6").attr("src","img/gacha/"+box+"/"+rarity[rar6]+"/"+pull6+".png");
    $("#pull7").attr("src","img/gacha/"+box+"/"+rarity[rar7]+"/"+pull7+".png");
    $("#pull8").attr("src","img/gacha/"+box+"/"+rarity[rar8]+"/"+pull8+".png");
    $("#pull9").attr("src","img/gacha/"+box+"/"+rarity[rar9]+"/"+pull9+".png");
    $("#pull10").attr("src","img/gacha/"+box+"/"+rarity[rar10]+"/"+pull10+".png");
    $("#pull11").attr("src","img/gacha/"+box+"/"+rarity[rar11]+"/"+pull11+".png");
});


