// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

populateData(tableData);

// Select the button
var dtButton = d3.select("#filter-btn");
var cityButton = d3.select("#city-filter-btn");
var stateButton = d3.select("#state-filter-btn");
var reset = d3.select(".reset-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
dtButton.on("click", () => runEnter("#datetime","datetime"));
form.on("submit", () => runEnter("#datetime","datetime"));

cityButton.on("click", () => runEnter("#city","city"));

stateButton.on("click", () => runEnter("#state","state"));

reset.on("click", runReset);

/**
 * 
 * @param {node} the raw HTML node 
 */
function runEnter(node, filter) {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select(node);
  
    // Get the value property of the input element
    var value = inputElement.property("value");
  
    // Use the form input to filter the data
    var filteredData = tableData.filter(element => element[filter] == value);
    console.log(filteredData);
    
    tbody.html("");
    
    populateData(filteredData);
}

/**
 * Resets the filters and populate all the data again.
 */
function runReset() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    tbody.html("");
    populateData(tableData);    
}

/**
 * General function to populate complete or filtered 
 * data set related to the UFO Sights
 * @param {juicyInfo} the data set
 */
function populateData(juicyInfo){
    juicyInfo.forEach(element => {
        var row = tbody.append("tr");
        Object.entries(element).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
}