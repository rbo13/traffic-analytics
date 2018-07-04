// document.getElementById("getUpdates").addEventListener("click", function(){
//   axios.get('/simulate')
// })
document.addEventListener('DOMContentLoaded', function(){ 
  console.log('Simulating data...')
  axios.get('/simulate')
}, false);

const pusher = new Pusher('e187421f90d051a63487', {
  cluster: 'ap1',
  encrypted: true
});

const channel = pusher.subscribe('visitorsCount');

channel.bind('addNumber', data => {
if (newLineChart.data.labels.length > 15) {
  newLineChart.data.labels.shift();  
  newLineChart.data.datasets[0].data.shift();
}

newLineChart.data.labels.push(data.Count);
newLineChart.data.datasets[0].data.push(data.Pages);
newLineChart.update();
});

function renderChart(userVisitsData) {
var ctx = document.getElementById("realtimeChart").getContext("2d");

var options = {};

newLineChart = new Chart(ctx, {
  type: "line",
  data: userVisitsData,
  options: options
});
}

var chartConfig = {
labels: [],
datasets: [
   {
      label: "Realtime User Analytics",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [],
      spanGaps: false,
   }
]
};

renderChart(chartConfig)