
//---------------------------------------------------------------------------------------------------------------------------------------------- CLIENT DASHBOARD - NUMBER OF JOURNALS
var xValues = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var yValues = [20, 16, 17, 12, 13, 7, 26, 14, 12, 22, 30, 4];
var barColors = [
  "#386641",
  "#6A994E",
  "#A7C957",
  "#A57548",
  "#564138", "#386641",
  "#6A994E",
  "#A7C957",
  "#A57548",
  "#564138",
  "#386641",
  "#6A994E"];


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
    legend: { display: false },
    title: {
      display: true,
      text: "Number of Journals for Each Month"
    }
  }
});

//-------------------------------------------------------------------------------------------------------------------------------------------------------
var xValu = ["Monday", "Tuesday", "Wedensday", "Thursday", "Friday", "Saturday", "Sunday"];

new Chart("myChart2", {
  type: "line",
  data: {
    labels: xValu,
    datasets: [{
      label: 'Happy-Sad',
      data: [86, 80, 76, 58, 70, 89, 90],
      borderColor: "#386641",
      fill: false
    }, {
      label: 'Relaxed-Stressed',
      data: [40, 47, 55, 80, 40, 70, 59],
      borderColor: "#6A994E",
      fill: false
    }, {
      label: 'Calm-Anxious',
      data: [30, 40, 45, 50, 30, 60, 20],
      borderColor: "#A7C957",
      fill: false
    }, {
      label: 'Content-Displeased',
      data: [10, 20, 25, 40, 50, 40, 35],
      borderColor: "#A57548",
      fill: false
    }]
  },
  options: {
    legend: {
      display: true,
    },
  }
});

//---------------------------------------------------------------------------------------------------------------------------------------------------------

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


var xVal = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
var yVal = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

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
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 6, max: 16 } }],
    }
  }
});