//On positionne Flash en relative pour accéder aux déplacements X et Y
//Par défaut un élément est statique

var tips = ["Put the IO Shield","Computer","Computer 2","Turn off your GTX 480 rig","Use Tunnel Bear","Linus","PADORU PADORU","Plug in the graphics card","If your pc is in airplane mode it'll fly","Use Windows defender","Download more ram","Eat the thermal paste","Duck","Watercool","LTT water bottle at lttstore.com","ALT + F4","Delete System32 for better performance","Pain","Minecraft","I think you need a camera for skype","SLI","Bigger doesn't mean better","Don't forget your tweezers","Drink cum","Windows XP","Paint your PC black for better FPS","RGB means more FPS","Blue LEDs make your PC run cooler","linusCatTips","Remember to plug in the front IO","More RGB","Cheap out on the power supply","Don't put all the screws in","Pentium G4560 + RTX 2080Ti","No fans equals silent PC","Mix metals in waterloop for better temps","Solid State Disk Drives","The more ram the faster","VGA yields higher resolution","Windows 98","Windows Vista"];





$('#flashID').css("position","relative");


$('#leftb').click(function(){
    $('#flashID').css("left","-=100px");
});

$('#rightb').click(function(){
    $('#flashID').css("left","+=100px");
});

$('#downb').click(function(){
    $('#flashID').css("top","+=100px");
});

$('#upb').click(function(){
    $('#flashID').css("top","-=100px");
});




$('#techtips').click(function(){
    nb1 = (Math.floor(Math.random() * tips.length));
    $('#tipsdiv').prepend('<br>'+tips[nb1]);
});



