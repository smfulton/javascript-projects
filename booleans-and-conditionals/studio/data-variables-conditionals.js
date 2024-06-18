// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if(astronautCount > 7){
    preparedForLiftOff = false;
    console.log((astronautCount - 7) +" astronaut(s) must leave!");
}

// add logic below to verify all astronauts are ready
if(astronautStatus !== "ready"){
    preparedForLiftOff = false;
    console.log("Astronauts not ready");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if(totalMassKg > maximumMassLimit){
    preparedForLiftOff = false;
    console.log("We need to lose "+ (totalMassKg-maximumMassLimit)+" kilograms");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if(fuelTempCelsius < minimumFuelTemp || fuelTempCelsius > maximumFuelTemp){
    preparedForLiftOff = false;
    console.log("The fuel temperature is off");
}
// add logic below to verify the fuel level is at 100%
if(fuelLevel !== "100%"){
    preparedForLiftOff = false;
    console.log("We need to top off!");
}
// add logic below to verify the weather status is clear
if(weatherStatus !== "clear"){
    preparedForLiftOff = false;
    console.log("The weather is not clear!");
}
// Verify shuttle launch can proceed based on above conditions
if(preparedForLiftOff){
    console.log(`
All systems are a go! Initializing space shuttle launch sequence.
------------------------------------------------------------------
Date: ${date}
Time: ${time}
Astronaut Count: ${astronautCount}
Crew Mass: ${crewMassKg} kg
Fuel Mass: ${fuelMassKg} kg
Shuttle Mass: ${shuttleMassKg} kg
Total Mass: ${totalMassKg} kg
Fuel Temperature: ${fuelTempCelsius} °C
Weather Status: ${weatherStatus}
------------------------------------------------------------------
Have a safe trip astronauts!!
    `);
} else{
    console.log("Something is wrong! Check the checklist!");
}