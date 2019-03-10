	var track;
	var userAccount;

	function startApp() {
		var trackAddress = "0xC577d4166Cd173CF059b92882929560c2f03B222";
		track = new web3js.eth.Contract(trackAbi, trackAddress);
	}

	var accountInterval = setInterval(function() {
		if (web3.eth.accounts[0] !== userAccount) {
			userAccount = web3.eth.accounts[0];
			console.log(userAccount);
		}
	}, 100);

	function getOrderDetail(id) {
		return track.methods.lstOrder(id).call()
	}

	getOrderDetail(2).then(function(result){
		console.log("order 2 :" + JSON.stringify(result));
	})


	window.addEventListener('load', function() {


		if (web3.eth.accounts[0] !== userAccount) {
			userAccount = web3.eth.accounts[0];

			if (typeof web3 !== 'undefined') {
				web3js = new Web3(web3.currentProvider);
			} else {
				toastr.warning('Please install metamask', 'Metamask!');
			}

			startApp()
		}
	})
