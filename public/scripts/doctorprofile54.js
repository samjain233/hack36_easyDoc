const data = document.getElementById("docid").value;


setInterval(changeDiv, 10000);


function changeDiv (){

    const xhr = new XMLHttpRequest();

    xhr.open('POST','http://localhost:3000/api/currNum',true);

    xhr.setRequestHeader('Content-type','application/json');

    xhr.onload=function(){
        if(this.status=200){
            console.log(this.responseText);
            const output = JSON.parse(this.responseText);
            document.getElementById("currentuser").innerHTML=output.currUser;
            document.getElementById("totaluser").innerHTML=output.totalUser;
            document.getElementById("time").innerHTML=output.time;
        }
    }

    params=`{
        "doctor_id":"${data}"
    }`;
    xhr.send(params);  
}