function newColor()
{
    var Symbol,color;
    Symbol ="0123456789ABCDEF";
    color = "#";
    for(var i=0;i<6;i++){
        color = color + Symbol[Math.floor(Math.random()*16)]
    }
    document.body.style.background = color;
    console.log(color);
    document.getElementsByClassName("hex")[0].innerHTML=color
}
