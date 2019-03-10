$(document).on("click", "#addOrder", function (){
	if ($("#transporter").val() > 0 && $("#client").val() > 0){
		tracking.setOrder($("#transporter").val(), $("#client").val(), function (err, nbOrder) {
			location = '/';
		});
	}
	console.log('nope');
});
