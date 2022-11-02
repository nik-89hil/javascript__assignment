
function addto(){
    document.getElementById('at3').innerHTML = "";

    let nameadd = document.getElementById('nameadd').value;
    if( nameadd ==""){
        document.getElementById('at3').innerHTML = "Please !!  enter some text to add in todos.";
    }else{
        let item=document.getElementById('item');

        let li=document.createElement('li');
        li.textContent=nameadd;
        item.appendChild(li);
        let del =document.createElement('button');
        del.textContent = "Delete";
        del.href ="javascript:void(0)";
        del.id = "dlt_id";
        li.appendChild(del);

    }

    document.getElementById('nameadd').value ="";
}

let kill= document.querySelector('ul');
kill.addEventListener('click', function (e){
    let item=document.getElementById('item');
    let li=e.target.parentNode;
    item.removeChild(li);

})



