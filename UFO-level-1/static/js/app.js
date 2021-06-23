// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(tbody);

tableData.forEach((ufoSights) => {
    var row = tbody.append("tr");
    Object.entries(ufoSights).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var value = inputElement.property("value");
  
    // Use the form input to filter the data by blood type
    var filteredDateTime = tableData.filter(element => element.datetime == value);
    console.log(filteredDateTime);
    
    tbody.html("");
    
    filteredDateTime.forEach(element => {
        var row = tbody.append("tr");
        Object.entries(element).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
}