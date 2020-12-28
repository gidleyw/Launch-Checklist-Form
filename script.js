// Write your JavaScript code here!

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") { //prevents form submission if pilot or copilot form fields are blank
         alert("All fields are required!");
         // stop the form submission
         event.preventDefault();
      } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Fuel Levels and Cargo Mass need to be numbers!");
         // stop the form submission
         event.preventDefault();         
      } else if (!pilotName.value.match(/^[A-Za-z]+$/) || !copilotName.value.match(/^[A-Za-z]+$/)) {
         alert("Copilot or pilot name does not meet requirements")
         // stop the form submission
         event.preventDefault();    
      }

      alert("1");
      document.getElementById("#faultyItems").style.visibility = "visible";
      document.getElementById("#pilotStatus").innerHTML = "READY"
      /*if (pilotName.value.type === text) {
         alert("success");
      } */

      
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
