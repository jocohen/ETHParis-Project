pragma solidity ^0.5.0;

contract Track {

	enum States {
		PENDING,
		TRANSPORT,
		ACCEPTED
	}

	struct Order {
		address	provider;
		address	transporter;
		address	client;
		States 	state;
	}


	event displayOrder(uint[] idlst);
	event SetOrder(uint id);
	event CheckTransport(string status);
	event CheckClient(string status);

	uint private	id;
	address private creator;

	mapping (uint => Order) private lstOrder;

	constructor() public {
		id = 0;
	}

	function setOrder(address transp, address client) public returns (uint Ordernumber) {
		lstOrder[id].provider = msg.sender;
		lstOrder[id].transporter = transp;
		lstOrder[id].client = client;
		lstOrder[id].state = States.PENDING;
		id += 1;
		emit SetOrder(id);
		return (id - 1);
	}

	function checkTransport(uint idOrder) public {
		require(lstOrder[idOrder].transporter == msg.sender);
		lstOrder[idOrder].state = States.TRANSPORT;
		emit CheckTransport("transport");
	}

	function checkClient(uint idOrder) public {
		require(lstOrder[idOrder].client == msg.sender);
		lstOrder[idOrder].state = States.ACCEPTED;
		emit CheckClient("receive");
	}

	function getOrderDetail(uint idOrder) public view returns (
		address provider,
		address transporter,
		address client,
		States	state){

		return (lstOrder[idOrder].provider,
				lstOrder[idOrder].transporter,
				lstOrder[idOrder].client,
				lstOrder[idOrder].state);
				}


	function getOrderLst() public view returns (uint[] memory){
		uint	x;
		uint	count;
		for (x = 0; x < id; x++){
			if (lstOrder[x].provider == msg.sender){
				count++;
			}
			else if (lstOrder[x].transporter == msg.sender){
				count++;
			}
			else if (lstOrder[x].client == msg.sender){
				count++;
			}
		}

		uint    i = 0;
		uint[] memory idlst = new uint[](count);
		for (x = 0; x < id; x++){
			if (lstOrder[x].provider == msg.sender){
				idlst[i] = x;
				i++;
			}
			else if (lstOrder[x].transporter == msg.sender){
				idlst[i] = x;
				i++;
			}
			else if (lstOrder[x].client == msg.sender){
				idlst[i] = x;
				i++;
			}
		}
		return (idlst);
	}
}
