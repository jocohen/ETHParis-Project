var contractAddress = "0xbc36c16fc6b066692c6cdf3393e5aebf28e5c8cf";
var tracking = web3.eth.contract(trackAbi).at(contractAddress);



window.addEventListener('load', function () {
	if (typeof web3 !== 'undefined') {
		web3js = new Web3(web3.currentProvider);
	}
	else {
		toastr.warning('Metamask not installed', 'Metamask');
	}
})

//----------------
//Get User Account
//----------------
var userAccount;
var accountInterval = setInterval(function() {
	// Check if account has changed
	if (web3.eth.accounts[0] !== userAccount) {
		userAccount = web3.eth.accounts[0];
		// Call a function to update the UI with the new account
		console.log(userAccount)
	}
}, 100);

tracking.getOrderLst(function (err, orders){
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
			let html = '| ' + status + ' |</liv><br></br>';
			$(".text123").append(html);
		});
	}
})
