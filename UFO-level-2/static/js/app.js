// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

populateData(tableData);

// Select the button
var button = d3.select("#filter-btn");
var reset = d3.select(".reset-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", () => runEnter("#datetime"));
form.on("submit", () => runEnter("#datetime"));
reset.on("click", runReset);


function runEnter(node) {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select(node);
  
    // Get the value property of the input element
    var value = inputElement.property("value");
  
    // Use the form input to filter the data by blood type
    var filteredDateTime = tableData.filter(element => element.datetime == value);
    console.log(filteredDateTime);
    
    tbody.html("");
    
    populateData(filteredDateTime);
}

function runReset() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    tbody.html("");
    populateData(tableData);    
}

function populateData(juicyInfo){
    juicyInfo.forEach(element => {
        var row = tbody.append("tr");
        Object.entries(element).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
}