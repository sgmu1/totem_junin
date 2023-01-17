
//Anular click secundario
document.oncontextmenu = function(){return false}

//Full Screen al hacer click e iniciar sesion
function fullScreen(){ document.documentElement.requestFullscreen() }
document.onclick = function(){ fullScreen () }



/*Algoritmos de Full Screen 

//Algoritmo 1
document.onclick = function () { 
    if (document.fullscreenElement) {
      document.exitFullscreen()
      console.log(document.fullscreenElement)
    } else {
      document.documentElement.requestFullscreen()
      console.log(document.fullscreenElement)
    }
};


//Algoritmo2
document.getElementsByTagName("body")[0].onclick= function(){
 
    var el = document.documentElement;
    var rfs = // for newer Webkit and Firefox
       el.requestFullScreen
       || el.webkitRequestFullScreen
       || el.mozRequestFullScreen
       || el.msRequestFullScreen
           ;
           if(typeof rfs!="undefined" && rfs){
               rfs.call(el);
           } else if(typeof window.ActiveXObject!="undefined"){
           // for Internet Explorer
           var wscript = new ActiveXObject("WScript.Shell");
           if (wscript!=null) {
               wscript.SendKeys("{F11}");
           }
           }
}

//Algoritmo 3
$(document).ready(function () {
    $('html').click(function () {
        document.documentElement.requestFullscreen()
    });
});

*/