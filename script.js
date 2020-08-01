// Write your JavaScript code here!
window.addEventListener("load", function() {
   
function canLaunch(fuelLevelInput, cargoMassInput){
   document.getElementById("pilotStatus").innerHTML = `${pilotNameInput.value} is ready for launch!`
   document.getElementById("pilotStatus").style.visibility = "visible"
   document.getElementById("copilotStatus").innerHTML = `${copilotNameInput.value} is ready for launch!`
   document.getElementById("copilotStatus").style.visibility = "visible"
  

   if (fuelLevelInput < 10001){
      document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch.`
      document.getElementById("fuelStatus").style.visibility = "visible"
      document.getElementById("launchStatus").innerHTML = `Shuttle Not Ready for Launch.`
      document.getElementById("launchStatus").style.color = "red"
   }
}

let pilotNameInput = document.querySelector("input[name=pilotName]");
let copilotNameInput = document.querySelector("input[name=copilotName]");
let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
let cargoMassInput = document.querySelector("input[name=cargoMass]");

let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
   if (pilotNameInput.value === "" || copilotNameInput.value === ""|| fuelLevelInput.value === "" || cargoMassInput.value === "") {
    alert("All fields are required!");
    event.preventDefault();
   }
   if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)){ 
    alert("Fuel level and Cargo Mass should be numbers");
    event.preventDefault();
   }

 canLaunch(fuelLevelInput.value, cargoMassInput.value)


});
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
