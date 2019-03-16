$(document).on("click", "#addOrder", function (){
	if ($("#transporter").val() > 0 && $("#client").val() > 0){
		tracking.methods.setOrder($("#transporter").val(), $("#client").val()).send().then((nbOrder) => {
			console.log("MOTH");
		});
	}
	console.log('FUCKER');
console.log('nope');
});
