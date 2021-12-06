
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

new Chart(document.getElementById("bar-chart-horizontal"), {
  type: 'horizontalBar',
  data: {
    labels: ["Users", "Active Users", "Journalng Users", "Slider Users", "Incacive Users"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: [      "#386641",
        "#6A994E",
        "#A7C957",
        "#A57548",
        "#386641"
      ],
        data: [200,175,100,130,25]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'User Activity'
    }
  }
});
