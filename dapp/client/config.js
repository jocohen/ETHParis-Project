var contractAddress = "0x6c6b147250daaB20dF06162f2be0a400DaaC12D3";
var tracking = new web3.eth.contract(trackAbi, contractAddress);

window.addEventListener('load', function () {
	if (typeof web3 !== 'undefined') {
		web3 = new Web3(web3.currentProvider);
	}
	else {
		toastr.warning('Metamask not installed', 'Metamask');
	}
})
