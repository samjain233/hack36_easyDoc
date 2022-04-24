var startTimeHr;
var startTimeMin;
var startTimeSec;
var endTimeHr;
var endTimeMin;
var endTimeSec;

// function call on page load
$(document).ready(function() {
  var today = new Date();
  startTimeHr = Number(Number(today.getHours()));
  startTimeMin = Number(Number(today.getMinutes()));
  startTimeSec = Number(Number(today.getSeconds()));
});

// function call on button click
$("#time").click(function(){
  var today = new Date();
  endTimeHr = Number(Number(today.getHours()));
  endTimeMin = Number(Number(today.getMinutes()));
  endTimeSec = Number(Number(today.getSeconds()));
  const time = diff();
  console.log(time);

  const xhr = new XMLHttpRequest();

    xhr.open('POST','http://localhost:3000/api/time',true);

    xhr.setRequestHeader('Content-type','application/json');

    xhr.onload=function(){
        if(this.status=200){
            console.log(this.responseText);
        }
    };

    params=`{
        "doctor_id":"${data}",
        "time":"${time}"
    }`;
    xhr.send(params);

});
function diff (){
  return (endTimeMin-startTimeMin + endTimeHr*60 - startTimeHr*60 + endTimeSec/60-startTimeSec/60) ;
}