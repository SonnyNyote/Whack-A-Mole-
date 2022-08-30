var currentPoint=0;

function start(){
    document.getElementById("head").style.visibility='hidden';
    document.getElementById("mole-hill").style.visibility='hidden';
    document.getElementById("start").style.visibility='hidden';

    for(var i=0;i<2;i++) {
        document.getElementsByClassName("points")[i].style.visibility="visible";
    }
    for(var i=0;i<6;i++) {
        document.getElementsByClassName("dirt")[i].style.visibility="visible";
    }
    setInterval(() => {
        var random=Math.floor(Math.random()*6)+1;
        document.getElementById("head"+random).style.visibility="visible";
        setTimeout(() => {
            for(var i=0;i<6;i++){
                document.getElementsByClassName("head")[i].style.visibility="hidden";
            }
        }, 900);
    }, 1000);
}

function clicked(){
    document.getElementById("currentPoint").innerHTML=currentPoint++;
}