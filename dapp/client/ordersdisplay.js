tracking.getOrderLst(function (err, orders){
	if (!orders)
		return ;
	$(".text123").text('');
	for (var i = 0; i < orders.length; i++) {
		$(".text123").append('<li>' + orders[i]);
		tracking.getOrderDetail(orders[i], function (err, data) {
			let status;
			if (data[3] == 0){
				status = 'PENDING';
			}
			else if (data[3] == 1) {
				status = 'TRANSPORT';
			}
			else if (data[3] == 2) {
				status = 'DELIVERED';
			}
			let html = '| ' + status + ' |</liv>' + '<br></br>';
			$(".text123").append(html);
		});
	}
})
