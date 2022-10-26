document.body.style.backgroundColor = 'yellow';
document.getElementById('hel').style.color = 'white';
document.getElementById('hel').style.fontSize ='40px';
document.getElementById('hel').style.backgroundColor = 'blue';
document.getElementById('dmn').style.color ='black';
document.getElementById('dmn').style.fontWeight = "500";

for (var i =0; i<5 ; i++){
    var dia = "";
    for (var j = 5; j>i; j--){
        dia += " ";
    }
    for(var k =0; k<=i ; k++){
        dia += "*";
    }
    for(var l=1;l<=i; l++){
        dia += "*";
    }
    console.log(dia);
}
for (var i =5;i>=0;i--){
    var dia="";
    for(var j=5; j>i;j--){
        dia +=" ";
    }
    for(var k =0; k<=i ; k++){
        dia += "*";
    }
     for(var l=1;l<=i; l++){
        dia += "*";
    }
    console.log(dia);
}


