let seconds=0;
let minutes=0;
let hours =0;
let interval = null;
let status = "stopped";
function stopwatch(){
    seconds++;
    if(seconds===60){
        seconds=0;
        minutes++;
    }
    if(minutes===60){
        minutes=0;
        hours++;
    }
    document.getElementsByClassName("time")[0].innerHTML = `${hours>9? hours: '0'+hours} :  ${minutes>9? minutes: '0'+minutes}  : ${seconds>9? seconds: '0'+seconds}`; 
}
function startstop(){
    if(status=='stopped')
    {   
        stopwatch()
        interval= setInterval(stopwatch, 1000);
        document.getElementById("startstop").innerHTML=`<i class="fas fa-stopwatch"></i>`;
        status="started"
    }
    else{
        interval=clearInterval(interval);
        document.getElementById("startstop").innerHTML=`<i class="fas fa-stopwatch"></i>`;
        status="stopped" 
    }

}

function reset(){
    console.log("fslugeaj")
    seconds=0;
    minutes=0;
    hours=0;
    document.getElementsByClassName("time")[0].innerHTML = "00:00:00"
    interval=clearInterval(interval);
    document.getElementById("startstop").innerHTML=`<i class="fas fa-stopwatch"></i>`;
    status="stopped" 
}
