function digitalclock(){
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var session = "";

    if(minute < 10){
        minute = "0" + minute                       // add 0 when no is unit number
    }

    if(hour >= 12){
        hour = hour - 12                       //convert 24 hour into 12 hour format 
        session = "PM"                        //also used for part of day
    }else{
        session = "AM"
    }

    if(hour < 10){                               // add 0 when no is unit number
        hour = "0" +hour 
    }
    
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('second').innerHTML = second;
    document.getElementById('session').innerHTML = session;
}
setInterval(digitalclock,10);

// hover on digital clock container to check the effect thanks !!

document.getElementById('Time_container').onmouseover = function (){
    document.getElementById('clock').style.color = 'Yellow';
    document.getElementById('clock').style.boxShadow = '3px 3px white';
    document.getElementById('session').style.color = 'green';
    
}
document.getElementById('Time_container').onmouseout = function (){
    document.getElementById('clock').style.color = 'white';
    document.getElementById('clock').style.boxShadow = '3px 3px yellow';
    document.getElementById('session').style.color = 'red';
}