$(document).ready(function() {

  $(".owl-1").owlCarousel({
    items: 1,
    smartSpeed: 1000,
  });

	$("#sandwich-1").on("click", function(){
		$(this).toggleClass("active");
		$("body").toggleClass("menubar-1");
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

});

