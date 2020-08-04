// Write your JavaScript code here!
window.addEventListener("load", function() {
   
function canLaunch(fuelLevelInput, cargoMassInput){
   document.getElementById("pilotStatus").innerHTML = `${pilotNameInput.value} is ready for launch!`
   document.getElementById("pilotStatus").style.visibility = "visible"
   document.getElementById("copilotStatus").innerHTML = `${copilotNameInput.value} is ready for launch!`
   document.getElementById("copilotStatus").style.visibility = "visible"
   document.getElementById("cargoStatus").style.visibility = "visible"
   document.getElementById("fuelStatus").style.visibility = "visible"
   document.getElementById("launchStatus").innerHTML = `Shuttle Ready for Launch.`
  

   if (fuelLevelInput < 10001){
      document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch.`
      document.getElementById("launchStatus").innerHTML = `Shuttle Not Ready for Launch.`
      document.getElementById("launchStatus").style.color = "red"
   }
   if (cargoMassInput > 10000){
      document.getElementById("cargoStatus").innerHTML = `Cargo Mass too much for launch.`
      document.getElementById("launchStatus").innerHTML = `Shuttle Not Ready for Launch.`
      document.getElementById("launchStatus").style.color = "red"
   }
   if ((isNaN(pilotNameInput.value) === false) || (isNaN(copilotNameInput.value) === false)){ 
      document.getElementById("copilotStatus").style.visibility = "hidden"
      document.getElementById("cargoStatus").style.visibility = "hidden"
      document.getElementById("fuelStatus").style.visibility = "hidden"
      document.getElementById("pilotStatus").style.visibility = "hidden"
      document.getElementById("launchStatus").innerHTML = `Awaiting Information Before Launch`
   }
}

function clearList(){
   document.getElementById("pilotStatus").style.visibility = "hidden"
   document.getElementById("copilotStatus").style.visibility = "hidden"
   document.getElementById("fuelStatus").style.visibility = "hidden"
   document.getElementById("cargoStatus").style.visibility = "hidden"
}
let pilotNameInput = document.querySelector("input[name=pilotName]");
let copilotNameInput = document.querySelector("input[name=copilotName]");
let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
let cargoMassInput = document.querySelector("input[name=cargoMass]");

let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
   event.preventDefault();
   if (pilotNameInput.value === "" || copilotNameInput.value === ""|| fuelLevelInput.value === "" || cargoMassInput.value === "") {
      alert("All fields are required!");
      clearList()
   }
   if ((isNaN(pilotNameInput.value) === false) || (isNaN(copilotNameInput.value) === false)){ 
      alert("Pilot and Copilot should be names.");
      clearList()
   }
   if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)){ 
    alert("Fuel level and Cargo Mass should be numbers.");
    clearList()
   }
   
 canLaunch(fuelLevelInput.value, cargoMassInput.value)

});
});


// This block of code shows how to format the HTML once you fetch some planetary JSON!

fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   response.json().then( function(json) {
      const div = document.getElementById("missionTarget");
      div.innerHTML =` 
      <ol>
         <li>Name: ${json[0].name}</li>
         <li>Diameter: ${json[0].dianeter}</li>
         <li>Star: ${json[0].star}</li>
         <li>Distance from Earth: ${json[0].distance}</li>
         <li>Number of Moons: ${json[0].moons}</li>
      </ol>
      <img src="${json[0].image}">`
   });  
});

/* <h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}"> */