//console.log(cityGrowths);
//sort cities by growth using sort method
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse();
//select only the top five cities by population growth using slice method
var topSevenCities = sortedCities.slice(0,7);

//using map() method to create  a separate array of the top five city names, as well as the top five growth figures.
//parseInt() method used to convert strings into integers

var topSevenCityNames = topSevenCities.map(city => city.City);
var topSevenCityGrowths = topSevenCities.map(city => parseInt(city.Increase_from_2016));

var trace = {
  x: topSevenCityNames,
  y: topSevenCityGrowths,
  type: "bar"
};
var data = [trace];
var layout = {
  title: "Most Rapidly Growing Cities",
  xaxis: { title: "City" },
  yaxis: { title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);