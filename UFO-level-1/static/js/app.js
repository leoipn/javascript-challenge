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
  