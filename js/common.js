$(document).ready(function() {

  $(".owl-1").owlCarousel({
    items: 1,
    smartSpeed: 1000,
  });

  var owl3 = $(".owl-3");
  owl3.owlCarousel({
    items: 1,
    smartSpeed: 1000,
    touchDrag: false,
    mouseDrag: false,
    loop: true
  });

  $('.click-slide').click(function() {
    owl3.trigger('next.owl.carousel');
})

	$("#sandwich-1").on("click", function(){
		$(this).toggleClass("active");
		$("body").toggleClass("menubar-1");
    window.dispatchEvent(new Event('resize'));
	});

	$("#sandwich-2").on("click", function(){
		$(this).toggleClass("active");
		$("body").toggleClass("menubar-2");
	});

var start = moment("05/12/2019");
var end = moment("06/11/2019");

function cb(start, end) {
    $('#reportrange').html(start.format('MMM D, YYYY') + ' - ' + end.format('MMM D, YYYY'));
}

$('#reportrange').daterangepicker({
    startDate: start,
    endDate: end,
}, cb);

cb(start, end);

$('[data-toggle="tooltip"]').tooltip();


var chart    = document.getElementById('canvas').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 320);
    gradient2 = chart.createLinearGradient(0, 0, 0, 320);

gradient.addColorStop(0, 'rgba(233, 233, 237, 1)');
gradient.addColorStop(1, 'rgba(233, 233, 237, 0)');

gradient2.addColorStop(0, '#02d79c');
gradient2.addColorStop(0.25, '#4afd3b');
gradient2.addColorStop(0.5, '#f8d217');
gradient2.addColorStop(0.75, '#fca033');
gradient2.addColorStop(1, '#fb5d46');

Chart.defaults.global.defaultFontColor = '#222222';
Chart.defaults.global.defaultFontFamily = '"Roboto", sans-serif';
Chart.defaults.global.defaultFontSize = 10;
Chart.defaults.global.defaultFontStyle = 'bold';

var data  = {
    labels: ["May 12", "May 13", "May 14", "May 15", "May 16", "May 17", "May 18", "May 19", "May 20", "May 21", "May 22", "May 23", "May 24", "May 25", "May 26", "May 27", "May 28", "May 29", "May 30", "May 31", "Jun 1", "Jun 2", "Jun 3", "Jun 4", "Jun 5", "Jun 6", "Jun 7", "Jun 8", "Jun 9", "Jun 10", "Jun 11"],
    datasets: [{
      label: '',
      backgroundColor: gradient,
      borderWidth: 6,
      pointRadius: 5,
      pointBorderWidth: 3,
      pointBorderColor: 'transparent',
      pointBackgroundColor: 'transparent',
      pointHoverRadius: 5,
      pointHoverBorderWidth: 3,
      pointHoverBorderColor: '#fff',
      pointHoverBackgroundColor: 'transparent',
      borderColor: gradient2,
      data: [7, 7.5, 4.8, 6, 7.7, 6, 6.2, 5.7, 7.4, 7.7, 10, 12.678, 8.5, 7.5, 9, 8.8, 10.2, 0.7, 0.6, 2.5, 7.5, 8, 7.2, 13, 10.5, 11.3, 12.2, 12.2, 14, 13, 13],
    }]
};

var options = {
  maintainAspectRatio: false,
  scales: {

    xAxes: [{
      ticks: {
        padding: 10,
        // userCallback: function(tick) {
        //   return tick.toString() + 'k';
        // },
      },
      gridLines: {
        display: false,
        drawTicks: false,
        drawBorder: false,

      }
    }],

    yAxes: [{
      display: true,
      // type: 'logarithmic',
      ticks: {
        max: 15,
        min: 0,
        stepSize: 5,
        padding: 10,
        userCallback: function(tick) {
          return tick.toString() + 'k';
        },
      },
      gridLines: {
        color: '#dedede',
        drawTicks: false,
        drawBorder: false,
      }
    }]

  },
  legend: {
    display: false
  },

  tooltips: {
    position: 'average',
    mode: 'index',
    intersect: false,
    displayColors: false,
    bodyAlign: "center",
    yPadding: 10,
    xPadding: 10,
    caretSize: 0,
    caretPadding: 20,
    backgroundColor: '#fff',
    titleFontColor: '#222222',
    bodyFontColor: '#222222',
    titleFontStyle: 'normal',
    bodyFontStyle: 'bold',
    borderWidth: 2,
    cornerRadius: 4,
  },
};

var chartInstance = new Chart(chart, {
  type: 'line',
  data: data,
  options: options
});


var chart2    = document.getElementById('canvas2').getContext('2d'),
    gradient4 = chart2.createLinearGradient(0, 0, 0, 100);

gradient4.addColorStop(0, '#02d79c');
gradient4.addColorStop(0.25, '#4afd3b');
gradient4.addColorStop(0.5, '#f8d217');
gradient4.addColorStop(0.75, '#fca033');
gradient4.addColorStop(1, '#fb5d46');

var data2  = {
    labels: ["May 12", "May 13", "May 14", "May 15", "May 16", "May 17", "May 18", "May 19", "May 20", "May 21", "May 22", "May 23", "May 24", "May 25", "May 26", "May 27", "May 28", "May 29", "May 30", "May 31", "Jun 1", "Jun 2", "Jun 3", "Jun 4", "Jun 5", "Jun 6", "Jun 7", "Jun 8", "Jun 9", "Jun 10", "Jun 11"],
    datasets: [{
      label: '',
      fill: false,
      borderWidth: 4,
      pointRadius: 0,
      pointBorderWidth: 0,
      pointBorderColor: 'transparent',
      pointBackgroundColor: 'transparent',
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointHoverBorderColor: '#fff',
      pointHoverBackgroundColor: '#76e288',
      borderColor: gradient4,
      data: [1.5, 1.6, 1.6, 1.5, 1.3, 1.4, 2.5, 8, 14, 11, 8, 1.5, 3, 6, 5.5, 6.5, 4, 1.5, 4, 11, 4, 1.5, 6, 11, 7, 8.5, 8, 10.5, 11, 14, 12],
    }]
};

var options2 = {
  maintainAspectRatio: false,
  scales: {

    xAxes: [{
      display: false,
      ticks: {
      },
      gridLines: {
        display: false,
        drawTicks: false,
        drawBorder: false,
      }
    }],

    yAxes: [{
      display: false,
      ticks: {
        max: 15,
        min: 0,
        stepSize: 5,
        userCallback: function(tick) {
          return tick.toString() + 'k';
        },
      },
    }]

  },
  legend: {
    display: false
  },
};

var chartInstance2 = new Chart(chart2, {
  type: 'line',
  data: data2,
  options: options2
});

});

