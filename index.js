var max = 100;

function randomVolt(){
  return (Math.random()*20+220).toFixed(1);
}

function randomAmpere(){
  return ((Math.random()*max)+5).toFixed(1);
}

document.getElementById("statusetc").innerHTML = " <p> Status: </p> <ul> <li>" +  randomVolt() 
  + " Volt</li> <li>" + randomAmpere() +"  Ampere</li> </ul>";

if (randomAmpere() > max){
  window.alert("! ACHTUNG Stromstärke überschritten !");        
}
                                           
function writeText(){
  var table = document.getElementById('myTable');
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = document.getElementById('iniMar').value;
  cell2.innerHTML = document.getElementById('verbrauchswert').value + " kWh";
  cell3.innerHTML = Date().substring(16,24) + " Uhr";
}