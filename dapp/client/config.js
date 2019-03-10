var contractAddress = "0xe6bdb1952adc7321139f67f045289486d984f767";
var tracking = web3.eth.contract(trackAbi).at(contractAddress);

window.addEventListener('load', function () {
	if (typeof web3 !== 'undefined') {
		web3js = new Web3(web3.currentProvider);
	}
	else {
		toastr.warning('Metamask not installed', 'Metamask');
	}
})
