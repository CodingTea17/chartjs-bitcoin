
var historicBtcGraph = function() {
  var times = [];
  var averages = [];
  $.ajax({
    type: 'GET',
    url: 'https://apiv2.bitcoinaverage.com/indices/global/history/BTCUSD?period=daily&?format=json',
  }).done(function(data) {

    $.each(data, function(key, value){
      times.push(value.time);
      averages.push(value.average);
    });
    // console.log(data[0].time);
    // Add a helper to format timestamp data
    //Chart JS
    var ctx = document.getElementById("historicBTC").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: times.reverse(),
        datasets: [{
          label: 'Bitcoin Price',
          data: averages.reverse(),
          backgroundColor: [
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)'
        ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
  });
};
$(document).ready(function() {
  historicBtcGraph();
});
