adnb =[];

for(i=0;i<2;i++){
    adnb[i] = (Math.floor(Math.random() * 7) + 1);
}

$("#ad1").attr("src","img/ads/"+adnb[0]+".png");
$("#ad2").attr("src","img/ads/"+adnb[1]+".png");
