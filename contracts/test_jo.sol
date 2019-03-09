pragma solidity ^0.5.0;

contract test {
	address	fournisseur;
	address	transporteur;
	address	client;

	function setFournisseur() public {
		fournisseur = msg.sender;
		
	}
}
