var contractAddress = "0x92562121319e37882b287624b4a08f9634ecf8a6";
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
	if (err)
	{

	}
	else{
		for (var i = 0; i < orders.length; i++) {
			tracking.getOrderDetail(orders[i], function (err, data) {
				console.log(i);
				$(".text123").append('<li>' + orders[i]);
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
				let html = '| ' + status + ' |</li>';
				$(".text123").append(html);
			});
		}

	}
});
