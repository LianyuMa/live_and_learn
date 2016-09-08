// var div = document.createElement("div");
// div.innerHTML = "Hello, world!";
// document.body.appendChild(div);

// var body = d3.select("body");

// var section = d3.selectAll("section");
// var div = section.append("div");
// div.html("Hello, world!");

var section = d3.selectAll("section");

section.attr("class", "special")
  .append("div")
    .html("Hello, world!");

section.append("div")
  .html("First!");

section.append("div")
  .html("Second.");

// var body = d3.select("body");
// body.style("color", "white");
// body.style("background-color", "black");
d3.select("body")
  .style("color", "white")
  .style("background-color", "black");
