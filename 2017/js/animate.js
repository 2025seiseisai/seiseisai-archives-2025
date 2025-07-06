function doAnim(numDrops) {
    TweenLite.set("#wrapper",{perspective:1500})

    var warp = document.getElementById("wrapper");
    var w = window.innerWidth;
    var h = 1700;

    for (i=0; i<numDrops; i++){
        var Div = document.createElement('div');
        Div.style.zIndex = 1000 + i;

        var theClass = 'img' + Math.floor((Math.random() * 12));
        var theID = 'x' + i;

		TweenLite.set(Div,{attr:{class: theClass, id: theID},
			               x:R(0,w), y:R(-200, -150), z:R(-200, 200)});
        warp.appendChild(Div);

        animm(Div, h);
    }
}

 function animm(elm, h){
   TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
   TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
   TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
 };

function R(min,max) {return min+Math.random()*(max-min)};
