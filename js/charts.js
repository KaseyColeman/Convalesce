var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});


var xValu = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart2", {
  type: "line",
  data: {
    labels: xValu,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    }, { 
      data: [300,700,2000,5000,500,6000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});


var xV = ["Italy", "France", "Spain", "USA", "Argentina"];
var yV = [55, 49, 44, 24, 15];
var barC = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart3", {
  type: "pie",
  data: {
    labels: xV,
    datasets: [{
      backgroundColor: barC,
      data: yV
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});


var xVal = [50,60,70,80,90,100,110,120,130,140,150];
var yVal = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("myChart4", {
  type: "line",
  data: {
    labels: xVal,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yVal
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});