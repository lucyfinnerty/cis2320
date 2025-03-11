/*    JavaScript 7th Edition
      Chapter 4
      Project 04-01

      Application to calculate total moving cost
      Author: Lucy Finnerty
      Date: 3/10/25

      Filename: project04-01.js
*/

// Global Constants
const COST_PER_LB = 0.50;
const COST_PER_MILE = 0.75;
const SETUP_COST = 500;

// Global Variables
let wgtBox = document.getElementById("wgtBox");
let distBox = document.getElementById("distBox");
let msgBox = document.getElementById("msgBox");


// Event Handlers
document.getElementById("wgtBox").onchange = calcTotal;
document.getElementById("distBox").onchange = calcTotal;
document.getElementById("setupBox").onclick = calcTotal;

// Function to calculate an estimate of the total moving cost
function calcTotal() {
   let totalCost = 0;      // Set the initial estimate to $0
   msgBox.innerHTML = "";  // Erase any warnings in the message box

      // Try-catch block to handle weight validation
   try {
      if (!(wgtBox.value > 0)) { // Check if weight is not greater than 0
         throw new Error("!! Enter a positive weight");
      }
      // If no exception, add the weight cost to the total
      totalCost += wgtBox.value * COST_PER_LB;
   } catch (error) {
      // If an exception is caught, display the error message
      msgBox.innerHTML = error.message;
   }
   // Try-catch block to handle distance validation
   try {
      if (!(distBox.value > 0)) { // Check if distance is not greater than 0
         throw new Error("!! Enter a positive mileage");
      }
      // If no exception, add the distance cost to the total
      totalCost += distBox.value * COST_PER_MILE;
   } catch (error) {
      // If an exception is caught, display the error message
      msgBox.innerHTML = error.message;
   }
   // If the setup box is checked, add the setup cost
   if (document.getElementById("setupBox").checked) {
      totalCost += SETUP_COST;
   }
   // Display the moving cost estimate in the totalBox, formatted as currency
   document.getElementById("totalBox").innerHTML = formatCurrency(totalCost);
}
 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }