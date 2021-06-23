// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

populateData(tableData);

// Select the button
var button = d3.select("#filter-btn");
// Select the Reset Button
var reset = d3.select("#reset-btn");
// Select the form
var form = d3.select("#form");


// Create event handlers 
button.on("click", () => runEnter(["#datetime","#city","#state","#country","#shape"]));
form.on("submit", () => runEnter(["#datetime","#city","#state","#country","#shape"]));
reset.on("click", runReset);

/**
 * 
 * @param {node} the raw HTML node 
 */
function runEnter(nodes) {
    var inputElements = [];
    var filters = [];

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    nodes.forEach(node => {
        inputElements.push(d3.select(node));
    });
    
    // Get the value property of the input element
    inputElements.forEach( inputElement => {
        if(inputElement.property("value")!=""){
            filters.push([inputElement.property("id"),inputElement.property("value")]);
        }
    });

    // Use the form input to filter the data
    var filteredData = tableData.filter(val => {
        for(var i = 0; i < filters.length; i++){
          if(val[filters[i][0]] != filters[i][1])
            return false;
        }
        return true;
      });
        
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