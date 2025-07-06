(function(d) {
   var config = {
     kitId: 'kmn1plb',
     scriptTimeout: 3000,
     async: true
   },
   h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
 })(document);

    var yokohaba = window.innerWidth;

var upnaviabout = document.getElementById("upnaviabout");
var downnaviabout = document.getElementById("downnaviabout");
var naviabout = document.getElementById("naviabout");
var upnaviabouttouch = document.getElementById("upnaviabouttouch");
var downnaviabouttouch = document.getElementById("downnaviabouttouch");
var navilogo = document.getElementById("navilogo");
var enavilogo = document.getElementById("enavilogo");
var h1 = document.getElementById("h1");
var navischedule = document.getElementById("navischedule");
var enavischedule = document.getElementById("enavischedule");
var h2 = document.getElementById("h2");
var navigreeting = document.getElementById("navigreeting");
var enavigreeting = document.getElementById("enavigreeting");
var h3 = document.getElementById("h3");
var naviaccessguide = document.getElementById("naviaccessguide");
var enaviaccessguide = document.getElementById("enaviaccessguide");
var naviaboutimg = document.getElementById("naviaboutimg");
var naviaboutmoji = document.getElementById("naviaboutmoji");


if(yokohaba <= 480){
upnaviabouttouch.addEventListener('click', function () {
    "use strict";
    naviabout.style.height = "93px";
    naviaboutmoji.style.top = "11.25px";
    upnaviabout.style.display = "none";
    downnaviabout.style.display = "block";
    downnaviabout.style.top = "20.25px";
    navilogo.style.display = "block";
    enavilogo.style.display = "block";
    h1.style.display = "block";
    navischedule.style.display = "block";
    enavischedule.style.display = "block";
    h2.style.display = "block";
    navigreeting.style.display = "block";
    enavigreeting.style.display = "block";
    h3.style.display = "block";
    naviaccessguide.style.display = "block";
    enaviaccessguide.style.display = "block";
    naviabout.style.cursor = "default";
    upnaviabouttouch.style.display = "none";
    downnaviabouttouch.style.display = "block";
    naviaboutimg.style.top = "5.25px";
});

downnaviabouttouch.addEventListener("click", function () {
    "use strict";
    naviabout.style.height = "43.5px";
    naviaboutmoji.style.top = "11.25px";
    upnaviabout.style.display = "block";
    downnaviabout.style.display = "none";
    downnaviabout.style.top = "20.25px";
    navilogo.style.display = "none";
    enavilogo.style.display = "none";
    h1.style.display = "none";
    navischedule.style.display = "none";
    enavischedule.style.display = "none";
    h2.style.display = "none";
    navigreeting.style.display = "none";
    enavigreeting.style.display = "none";
    h3.style.display = "none";
    naviaccessguide.style.display = "none";
    enaviaccessguide.style.display = "none";
    naviabout.style.cursor = "default";
    upnaviabouttouch.style.display = "block";
    downnaviabouttouch.style.display = "none";
    naviaboutimg.style.top = "5.25px";
});

upnaviabout.addEventListener('click', function () {
    "use strict";
    naviabout.style.height = "93px";
    naviaboutmoji.style.top = "11.25px";
    upnaviabout.style.display = "none";
    downnaviabout.style.display = "block";
    downnaviabout.style.top = "20.25px";
    navilogo.style.display = "block";
    enavilogo.style.display = "block";
    h1.style.display = "block";
    navischedule.style.display = "block";
    enavischedule.style.display = "block";
    h2.style.display = "block";
    navigreeting.style.display = "block";
    enavigreeting.style.display = "block";
    h3.style.display = "block";
    naviaccessguide.style.display = "block";
    enaviaccessguide.style.display = "block";
    naviabout.style.cursor = "default";
    upnaviabouttouch.style.display = "none";
    downnaviabouttouch.style.display = "block";
    naviaboutimg.style.top = "5.25px";
});

downnaviabout.addEventListener("click", function () {
    "use strict";
    naviabout.style.height = "43.5px";
    naviaboutmoji.style.top = "11.25px";
    upnaviabout.style.display = "block";
    downnaviabout.style.display = "none";
    downnaviabout.style.top = "20.25px";
    navilogo.style.display = "none";
    enavilogo.style.display = "none";
    h1.style.display = "none";
    navischedule.style.display = "none";
    enavischedule.style.display = "none";
    h2.style.display = "none";
    navigreeting.style.display = "none";
    enavigreeting.style.display = "none";
    h3.style.display = "none";
    naviaccessguide.style.display = "none";
    enaviaccessguide.style.display = "none";
    naviabout.style.cursor = "default";
    upnaviabouttouch.style.display = "block";
    downnaviabouttouch.style.display = "none";
    naviaboutimg.style.top = "5.25px";
});
}else{
upnaviabouttouch.addEventListener('click', function () {
    "use strict";
    naviabout.style.height = "124px";
    upnaviabout.style.display = "none";
    downnaviabout.style.display = "block";
    navilogo.style.display = "block";
    enavilogo.style.display = "block";
    h1.style.display = "block";
    navischedule.style.display = "block";
    enavischedule.style.display = "block";
    h2.style.display = "block";
    navigreeting.style.display = "block";
    enavigreeting.style.display = "block";
    h3.style.display = "block";
    naviaccessguide.style.display = "block";
    enaviaccessguide.style.display = "block";
    naviabout.style.cursor = "default";
    upnaviabouttouch.style.display = "none";
    downnaviabouttouch.style.display = "block";
});

downnaviabouttouch.addEventListener("click", function () {
    "use strict";
    naviabout.style.height = "58px";
    upnaviabout.style.display = "block";
    downnaviabout.style.display = "none";
    navilogo.style.display = "none";
    enavilogo.style.display = "none";
    h1.style.display = "none";
    navischedule.style.display = "none";
    enavischedule.style.display = "none";
    h2.style.display = "none";
    navigreeting.style.display = "none";
    enavigreeting.style.display = "none";
    h3.style.display = "none";
    naviaccessguide.style.display = "none";
    enaviaccessguide.style.display = "none";
    naviabout.style.cursor = "default";
    upnaviabouttouch.style.display = "block";
    downnaviabouttouch.style.display = "none";
});

upnaviabout.addEventListener('click', function () {
    "use strict";
    naviabout.style.height = "124px";
    upnaviabout.style.display = "none";
    downnaviabout.style.display = "block";
    navilogo.style.display = "block";
    enavilogo.style.display = "block";
    h1.style.display = "block";
    navischedule.style.display = "block";
    enavischedule.style.display = "block";
    h2.style.display = "block";
    navigreeting.style.display = "block";
    enavigreeting.style.display = "block";
    h3.style.display = "block";
    naviaccessguide.style.display = "block";
    enaviaccessguide.style.display = "block";
    naviabout.style.cursor = "default";
    upnaviabouttouch.style.display = "none";
    downnaviabouttouch.style.display = "block";
});

downnaviabout.addEventListener("click", function () {
    "use strict";
    naviabout.style.height = "58px";
    upnaviabout.style.display = "block";
    downnaviabout.style.display = "none";
    navilogo.style.display = "none";
    enavilogo.style.display = "none";
    h1.style.display = "none";
    navischedule.style.display = "none";
    enavischedule.style.display = "none";
    h2.style.display = "none";
    navigreeting.style.display = "none";
    enavigreeting.style.display = "none";
    h3.style.display = "none";
    naviaccessguide.style.display = "none";
    enaviaccessguide.style.display = "none";
    naviabout.style.cursor = "default";
    upnaviabouttouch.style.display = "block";
    downnaviabouttouch.style.display = "none";
});  
}

var upnavievent = document.getElementById("upnavievent");
var downnavievent = document.getElementById("downnavievent");
var upnavieventtouch = document.getElementById("upnavieventtouch");
var downnavieventtouch = document.getElementById("downnavieventtouch");
var navievent = document.getElementById("navievent");
var navitimetable = document.getElementById("navitimetable");
var enavitimetable = document.getElementById("enavitimetable");
var h4 = document.getElementById("h4");
var naviintroevent = document.getElementById("naviintroevent");
var enaviintroevent = document.getElementById("enaviintroevent");
var navitimetablecover = document.getElementById("navitimetablecover");
var naviintroeventcover = document.getElementById("naviintroeventcover");
var navitimetablejunbi = document.getElementById("navitimetablejunbi");
var navitimetablecoming = document.getElementById("navitimetablecoming");
var naviintroeventjunbi = document.getElementById("naviintroeventjunbi");
var naviintroeventcoming = document.getElementById("naviintroeventcoming");
var navieventimg = document.getElementById("navieventimg");
var navieventmoji = document.getElementById("navieventmoji");


if(yokohaba <= 480){
    upnavieventtouch.addEventListener('click', function () {
    "use strict";
    navievent.style.height = "93px";
    upnavievent.style.display = "none";
    downnavievent.style.display = "block";
    navitimetable.style.display = "block";
    enavitimetable.style.display = "block";
    h4.style.display = "block";
    naviintroevent.style.display = "block";
    enaviintroevent.style.display = "block";
    upnavieventtouch.style.display = "none";
    downnavieventtouch.style.display = "block";
    navitimetablecover.style.display = "block";
    naviintroeventcover.style.display = "block";
    navieventimg.style.top ="5.25px"
    navieventmoji.style.top = "11.25px";
});
    
downnavieventtouch.addEventListener("click", function () {
    "use strict";
    navievent.style.height = "43.5px";
    upnavievent.style.display = "block";
    downnavievent.style.display = "none";
    navitimetable.style.display = "none";
    enavitimetable.style.display = "none";
    h4.style.display = "none";
    naviintroevent.style.display = "none";
    enaviintroevent.style.display = "none";
    upnavieventtouch.style.display = "block";
    downnavieventtouch.style.display = "none";
    navitimetablecover.style.display = "none";
    naviintroeventcover.style.display = "none";
    navieventimg.style.top ="5.25px";
    navieventmoji.style.top = "11.25px";
});

upnavievent.addEventListener('click', function () {
    "use strict";
    navievent.style.height = "93px";
    upnavievent.style.display = "none";
    downnavievent.style.display = "block";
    navitimetable.style.display = "block";
    enavitimetable.style.display = "block";
    h4.style.display = "block";
    naviintroevent.style.display = "block";
    enaviintroevent.style.display = "block";
    upnavieventtouch.style.display = "none";
    downnavieventtouch.style.display = "block";
    navitimetablecover.style.display = "block";
    naviintroeventcover.style.display = "block";
    navieventimg.style.top ="5.25px"
    navieventmoji.style.top = "11.25px";
});
    
downnavievent.addEventListener("click", function () {
    "use strict";
    navievent.style.height = "43.5px";
    upnavievent.style.display = "block";
    downnavievent.style.display = "none";
    navitimetable.style.display = "none";
    enavitimetable.style.display = "none";
    h4.style.display = "none";
    naviintroevent.style.display = "none";
    enaviintroevent.style.display = "none";
    upnavieventtouch.style.display = "block";
    downnavieventtouch.style.display = "none";
    navitimetablecover.style.display = "none";
    naviintroeventcover.style.display = "none";
    navieventimg.style.top ="5.25px"
    navieventmoji.style.top = "11.25px";
    
});
}else{
upnavieventtouch.addEventListener('click', function () {
    "use strict";
    navievent.style.height = "124px";
    upnavievent.style.display = "none";
    downnavievent.style.display = "block";
    navitimetable.style.display = "block";
    enavitimetable.style.display = "block";
    h4.style.display = "block";
    naviintroevent.style.display = "block";
    enaviintroevent.style.display = "block";
    upnavieventtouch.style.display = "none";
    downnavieventtouch.style.display = "block";
    navitimetablecover.style.display = "block";
    naviintroeventcover.style.display = "block";
});
    
downnavieventtouch.addEventListener("click", function () {
    "use strict";
    navievent.style.height = "58px";
    upnavievent.style.display = "block";
    downnavievent.style.display = "none";
    navitimetable.style.display = "none";
    enavitimetable.style.display = "none";
    h4.style.display = "none";
    naviintroevent.style.display = "none";
    enaviintroevent.style.display = "none";
    upnavieventtouch.style.display = "block";
    downnavieventtouch.style.display = "none";
    navitimetablecover.style.display = "none";
    naviintroeventcover.style.display = "none";
});

upnavievent.addEventListener('click', function () {
    "use strict";
    navievent.style.height = "124px";
    upnavievent.style.display = "none";
    downnavievent.style.display = "block";
    navitimetable.style.display = "block";
    enavitimetable.style.display = "block";
    h4.style.display = "block";
    naviintroevent.style.display = "block";
    enaviintroevent.style.display = "block";
    upnavieventtouch.style.display = "none";
    downnavieventtouch.style.display = "block";
    navitimetablecover.style.display = "block";
    naviintroeventcover.style.display = "block";
});
    
downnavievent.addEventListener("click", function () {
    "use strict";
    navievent.style.height = "58px";
    upnavievent.style.display = "block";
    downnavievent.style.display = "none";
    navitimetable.style.display = "none";
    enavitimetable.style.display = "none";
    h4.style.display = "none";
    naviintroevent.style.display = "none";
    enaviintroevent.style.display = "none";
    upnavieventtouch.style.display = "block";
    downnavieventtouch.style.display = "none";
    navitimetablecover.style.display = "none";
    naviintroeventcover.style.display = "none";
});
}

var upnavischoolguide = document.getElementById("upnavischoolguide");
var downnavischoolguide = document.getElementById("downnavischoolguide");
var upnavischoolguidetouch = document.getElementById("upnavischoolguidetouch");
var downnavischoolguidetouch = document.getElementById("downnavischoolguidetouch");
var navischoolguide = document.getElementById("navischoolguide");
var navischoolmap = document.getElementById("navischoolmap");
var enavischoolmap = document.getElementById("enavischoolmap");
var h5 = document.getElementById("h5");
var navitenji = document.getElementById("navitenji");
var enavitenji = document.getElementById("enavitenji");
var navischoolmapcover = document.getElementById("navischoolmapcover");
var navischoolmapjunbi = document.getElementById("navischoolmapjunbi");
var navischoolmapcoming = document.getElementById("navischoolmapcoming");
var navitenjicover = document.getElementById("navitenjicover");
var navitenjijunbi = document.getElementById("navitenjijunbi");
var navitenjicoming = document.getElementById("navitenjicoming");
var navischoolguideimg = document.getElementById("navischoolguideimg");
var navischoolguidemoji = document.getElementById("navischoolguidemoji");

if(yokohaba <= 480){
 upnavischoolguidetouch.addEventListener('click', function () {
    "use strict";
    navischoolguide.style.height = "93px";
    upnavischoolguide.style.display = "none";
    downnavischoolguide.style.display = "block";
    navischoolmap.style.display = "block";
    enavischoolmap.style.display = "block";
    h5.style.display = "block";
    navitenji.style.display = "block";
    enavitenji.style.display = "block";
    upnavischoolguidetouch.style.display = "none";
    downnavischoolguidetouch.style.display = "block";
    navischoolmapcover.style.display = "block";
    navitenjicover.style.display = "block";
    navischoolguideimg.style.top = "5.25px";
    navischoolguidemoji.style.top = "11.25px";
});

downnavischoolguidetouch.addEventListener("click", function () {
    "use strict";
    navischoolguide.style.height = "43.5px";
    upnavischoolguide.style.display = "block";
    downnavischoolguide.style.display = "none";
    navischoolmap.style.display = "none";
    enavischoolmap.style.display = "none";
    h5.style.display = "none";
    navitenji.style.display = "none";
    enavitenji.style.display = "none";
    upnavischoolguidetouch.style.display = "block";
    downnavischoolguidetouch.style.display = "none";
    navischoolmapcover.style.display = "none";
    navitenjicover.style.display = "none";
    navischoolguideimg.style.top = "5.25px";
    navischoolguidemoji.style.top = "11.25px";
});

upnavischoolguide.addEventListener('click', function () {
    "use strict";
    navischoolguide.style.height = "93px";
    upnavischoolguide.style.display = "none";
    downnavischoolguide.style.display = "block";
    navischoolmap.style.display = "block";
    enavischoolmap.style.display = "block";
    h5.style.display = "block";
    navitenji.style.display = "block";
    enavitenji.style.display = "block";
    upnavischoolguidetouch.style.display = "none";
    downnavischoolguidetouch.style.display = "block";
    navischoolmapcover.style.display = "block";
    navitenjicover.style.display = "block";
    navischoolguideimg.style.top = "5.25px";
    navischoolguidemoji.style.top = "11.25px";
});

downnavischoolguide.addEventListener("click", function () {
    "use strict";
    navischoolguide.style.height = "43.5px";
    upnavischoolguide.style.display = "block";
    downnavischoolguide.style.display = "none";
    navischoolmap.style.display = "none";
    enavischoolmap.style.display = "none";
    h5.style.display = "none";
    navitenji.style.display = "none";
    enavitenji.style.display = "none";
    upnavischoolguidetouch.style.display = "block";
    downnavischoolguidetouch.style.display = "none";
    navischoolmapcover.style.display = "none";
    navitenjicover.style.display = "none";
    navischoolguideimg.style.top = "5.25px"
    navischoolguidemoji.style.top = "11.25px";
});   
}else{
upnavischoolguidetouch.addEventListener('click', function () {
    "use strict";
    navischoolguide.style.height = "124px";
    upnavischoolguide.style.display = "none";
    downnavischoolguide.style.display = "block";
    navischoolmap.style.display = "block";
    enavischoolmap.style.display = "block";
    h5.style.display = "block";
    navitenji.style.display = "block";
    enavitenji.style.display = "block";
    upnavischoolguidetouch.style.display = "none";
    downnavischoolguidetouch.style.display = "block";
    navischoolmapcover.style.display = "block";
    navitenjicover.style.display = "block";
});

downnavischoolguidetouch.addEventListener("click", function () {
    "use strict";
    navischoolguide.style.height = "58px";
    upnavischoolguide.style.display = "block";
    downnavischoolguide.style.display = "none";
    navischoolmap.style.display = "none";
    enavischoolmap.style.display = "none";
    h5.style.display = "none";
    navitenji.style.display = "none";
    enavitenji.style.display = "none";
    upnavischoolguidetouch.style.display = "block";
    downnavischoolguidetouch.style.display = "none";
    navischoolmapcover.style.display = "none";
    navitenjicover.style.display = "none";
});

upnavischoolguide.addEventListener('click', function () {
    "use strict";
    navischoolguide.style.height = "124px";
    upnavischoolguide.style.display = "none";
    downnavischoolguide.style.display = "block";
    navischoolmap.style.display = "block";
    enavischoolmap.style.display = "block";
    h5.style.display = "block";
    navitenji.style.display = "block";
    enavitenji.style.display = "block";
    upnavischoolguidetouch.style.display = "none";
    downnavischoolguidetouch.style.display = "block";
    navischoolmapcover.style.display = "block";
    navitenjicover.style.display = "block";
});

downnavischoolguide.addEventListener("click", function () {
    "use strict";
    navischoolguide.style.height = "58px";
    upnavischoolguide.style.display = "block";
    downnavischoolguide.style.display = "none";
    navischoolmap.style.display = "none";
    enavischoolmap.style.display = "none";
    h5.style.display = "none";
    navitenji.style.display = "none";
    enavitenji.style.display = "none";
    upnavischoolguidetouch.style.display = "block";
    downnavischoolguidetouch.style.display = "none";
    navischoolmapcover.style.display = "none";
    navitenjicover.style.display = "none";
});
}

var upnavisales = document.getElementById("upnavisales");
var downnavisales = document.getElementById("downnavisales");
var upnavisalestouch = document.getElementById("upnavisalestouch");
var downnavisalestouch = document.getElementById("downnavisalestouch");
var navisales = document.getElementById("navisales");
var navigoods = document.getElementById("navigoods");
var enavigoods = document.getElementById("enavigoods");
var h6 = document.getElementById("h6");
var navibazaar = document.getElementById("navibazaar");
var enavibazaar = document.getElementById("enavibazaar");
var navigoodscover = document.getElementById("navigoodscover");
var navigoodsjunbi = document.getElementById("navigoodsjunbi");
var navigoodscoming = document.getElementById("navigoodscoming")
var navibazaarcover = document.getElementById("navibazaarcover");
var navibazaarjunbi = document.getElementById("navibazaarjunbi");
var navibazaarcoming = document.getElementById("navibazaarcoming");
var navisalesimg = document.getElementById("navisalesimg");
var navisalesmoji = document.getElementById("navisalesmoji");

if(yokohaba <= 480){
upnavisalestouch.addEventListener('click', function () {
    "use strict";
    navisales.style.height = "93px";
    upnavisales.style.display = "none";
    downnavisales.style.display = "block";
    navigoods.style.display = "block";
    enavigoods.style.display = "block";
    h6.style.display = "block";
    navibazaar.style.display = "block";
    enavibazaar.style.display = "block";
    upnavisalestouch.style.display = "none";
    downnavisalestouch.style.display = "block";
    navigoodscover.style.display = "block";
    navibazaarcover.style.display = "block";
    navisalesimg.style.top = "5.25px";
    navisalesmoji.style.top = "11.25px";
});

downnavisalestouch.addEventListener("click", function () {
    "use strict";
    navisales.style.height = "43.5px";
    upnavisales.style.display = "block";
    downnavisales.style.display = "none";
    navigoods.style.display = "none";
    enavigoods.style.display = "none";
    h6.style.display = "none";
    navibazaar.style.display = "none";
    enavibazaar.style.display = "none";
    upnavisalestouch.style.display = "block";
    downnavisalestouch.style.display = "none";
    navigoodscover.style.display = "none";
    navibazaarcover.style.display = "none";
    navisalesimg.style.top = "5.25px";
    navisalesmoji.style.top = "11.25px";
});

upnavisales.addEventListener('click', function () {
    "use strict";
    navisales.style.paddingTop = "93px";
    upnavisales.style.display = "none";
    downnavisales.style.display = "block";
    navigoods.style.display = "block";
    enavigoods.style.display = "block";
    h6.style.display = "block";
    navibazaar.style.display = "block";
    enavibazaar.style.display = "block";
    upnavisalestouch.style.display = "none";
    downnavisalestouch.style.display = "block";
    navigoodscover.style.display = "block";
    navibazaarcover.style.display = "block";
    navisalesimg.style.top = "5.25px";
    navisalesmoji.style.top = "11.25px";
});

downnavisales.addEventListener("click", function () {
    "use strict";
    navisales.style.paddingTop = "93px";
    upnavisales.style.display = "block";
    downnavisales.style.display = "none";
    navigoods.style.display = "none";
    enavigoods.style.display = "none";
    h6.style.display = "none";
    navibazaar.style.display = "none";
    enavibazaar.style.display = "none";
    upnavisalestouch.style.display = "block";
    downnavisalestouch.style.display = "none";
    navigoodscover.style.display = "none";
    navibazaarcover.style.display = "none";
    navisalesimg.style.top = "5.25px";
    navisalesmoji.style.top = "11.25px";
});
}
else{
upnavisalestouch.addEventListener('click', function () {
    "use strict";
    navisales.style.height = "124px";
    upnavisales.style.display = "none";
    downnavisales.style.display = "block";
    navigoods.style.display = "block";
    enavigoods.style.display = "block";
    h6.style.display = "block";
    navibazaar.style.display = "block";
    enavibazaar.style.display = "block";
    upnavisalestouch.style.display = "none";
    downnavisalestouch.style.display = "block";
    navigoodscover.style.display = "block";
    navibazaarcover.style.display = "block";
});

downnavisalestouch.addEventListener("click", function () {
    "use strict";
    navisales.style.height = "58px";
    upnavisales.style.display = "block";
    downnavisales.style.display = "none";
    navigoods.style.display = "none";
    enavigoods.style.display = "none";
    h6.style.display = "none";
    navibazaar.style.display = "none";
    enavibazaar.style.display = "none";
    upnavisalestouch.style.display = "block";
    downnavisalestouch.style.display = "none";
    navigoodscover.style.display = "none";
    navibazaarcover.style.display = "none";
});

upnavisales.addEventListener('click', function () {
    "use strict";
    navisales.style.height = "124px";
    upnavisales.style.display = "none";
    downnavisales.style.display = "block";
    navigoods.style.display = "block";
    enavigoods.style.display = "block";
    h6.style.display = "block";
    navibazaar.style.display = "block";
    enavibazaar.style.display = "block";
    upnavisalestouch.style.display = "none";
    downnavisalestouch.style.display = "block";
    navigoodscover.style.display = "block";
    navibazaarcover.style.display = "block";
});

downnavisales.addEventListener("click", function () {
    "use strict";
    navisales.style.height = "60px";
    upnavisales.style.display = "block";
    downnavisales.style.display = "none";
    navigoods.style.display = "none";
    enavigoods.style.display = "none";
    h6.style.display = "none";
    navibazaar.style.display = "none";
    enavibazaar.style.display = "none";
    upnavisalestouch.style.display = "block";
    downnavisalestouch.style.display = "none";
    navigoodscover.style.display = "none";
    navibazaarcover.style.display = "none";
});
}

if(yokohaba >= 600){
$('#navi1').click(function () {
    "use strict";
        
    $(this).fadeOut("50");
    $('#navi2').fadeIn('50');
    $("#naviback").animate({
        opacity: 1
    }, 50);
    $('#naviimg').fadeIn("50");
    $('#naviaboutimg').css("display", "block");
    $("#naviback").css("display", "block");
    $("#naviblack").css("height", "100%");
    $("#naviblack").css("opacity", "0.5");
    $("#navihome").css("display", "block");
    $("#navihomemoji").css("display", "block");
    $("#naviabout").css("display", "block");
    $("#navievent").css("display", "block");
    $("#navischoolguide").css("display", "block");
    $("#navisales").css("display", "block");
    $("#navicolumn").css("display", "block");
    $("#naviaccess").css("display", "block");
    $("#navisns").css("display", "block");
    $("#navibackground").css("display", "block");
    $("#navibackground").css("box-shadow", "none");
    $("body").css("overflow-y", "hidden");
});
    
$('#navi2').click(function () {
    "use strict";
        
    $('#navi1').fadeIn("50");
    $('#navi2').fadeOut('50');
    $("#naviback").animate({
        opacity: 0
    }, 50);
    $('#naviimg').fadeOut("50");
    $('#naviaboutimg').fadeOut("50");
    $("#naviblack").css("opacity", "0");
    $("#naviback").fadeOut("50");
    $("#naviblack").css("height", "0%");
    $('#navihome').fadeOut("50");
    $('#navihomemoji').fadeOut("50");
    $('#naviabout').fadeOut("50");
    $("#navievent").fadeOut("50");
    $("#navischoolguide").fadeOut("50");
    $("#navisales").fadeOut("50");
    $("#navicolumn").fadeOut("50");
    $("#naviaccess").fadeOut("50");
    $("#navisns").fadeOut("50");
    $("#navibackground").css("box-shadow", "0px 16px 24px 0px rgba(0,0,0,0.4)");
    $("body").css("overflow-y", "scroll");
});
}

if(yokohaba < 600){
$('#navi1').click(function () {
    "use strict";
        
    $(this).fadeOut("50");
    $('#navi2').fadeIn('50');
    $("#naviback").animate({
        opacity: 1
    }, 50);
    $('#naviaboutimg').css("display", "block");
    $("#naviback").css("display", "block");
    $("#naviblack").css("height", "100%");
    $("#naviblack").css("opacity", "0.5");
    $("#navihome").css("display", "block");
    $("#navihomemoji").css("display", "block");
    $("#naviabout").css("display", "block");
    $("#navievent").css("display", "block");
    $("#navischoolguide").css("display", "block");
    $("#navisales").css("display", "block");
    $("#navicolumn").css("display", "block");
    $("#naviaccess").css("display", "block");
    $("#navisns").css("display", "block");
    $("#navibackground").css("display", "block");
    $("#navibackground").css("box-shadow", "none");
    $("body").css("overflow-y", "hidden");
});
    
$('#navi2').click(function () {
    "use strict";
        
    $('#navi1').fadeIn("50");
    $('#navi2').fadeOut('50');
    $("#naviback").animate({
        opacity: 0
    }, 50);
    $('#naviaboutimg').fadeOut("50");
    $("#naviblack").css("opacity", "0");
    $("#naviback").fadeOut("50");
    $("#naviblack").css("height", "0%");
    $('#navihome').fadeOut("50");
    $('#navihomemoji').fadeOut("50");
    $('#naviabout').fadeOut("50");
    $("#navievent").fadeOut("50");
    $("#navischoolguide").fadeOut("50");
    $("#navisales").fadeOut("50");
    $("#navicolumn").fadeOut("50");
    $("#naviaccess").fadeOut("50");
    $("#navisns").fadeOut("50");
    $("#navibackground").css("box-shadow", "0px 16px 24px 0px rgba(0,0,0,0.4)");
    $("body").css("overflow-y", "scroll");
});
}