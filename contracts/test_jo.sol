pragma solidity ^0.5.0;

contract DeliveryTrack {

	uint private	nb_cmd;

	enum States {
		PENDING,
		ACCEPTED
	}

	struct Actor {
		address		addr;
		States		state;
	}

	struct Order {
		Actor	provider;
		Actor	transporter;
		Actor	client;
	}

	mapping (uint => Order) private lstOrder;

	constructor() public {
		nb_cmd = 0;
	}

	function setProvider(address transp, address client) public returns (uint Ordernumber) {
		require(transp != 0 && client != 0);
		lstOrder[nb_cmd].provider.addr = msg.sender;
		lstOrder[nb_cmd].provider.state = States.ACCEPTED;
		lstOrder[nb_cmd].transporter.addr = transp;
		lstOrder[nb_cmd].transporter.state = States.PENDING;
		lstOrder[nb_cmd].client.addr = client;
		lstOrder[nb_cmd].client.state = States.PENDING;
		nb_cmd += 1;
		return (nb_cmd - 1);
	}

	function checkTransport(uint nbOrder) public {
		require(lstOrder[nbOrder].transporter.addr == msg.sender);
		lstOrder[nbOrder].transporter.state = States.ACCEPTED;
	}

	function checkClient(uint nbOrder) public {
		require(lstOrder[nbOrder].client.addr == msg.sender);
		lstOrder[nbOrder].client.state = States.ACCEPTED;
	}

	function getOrderState(uint nbOrder) public returns (uint provid, uint transp, uint client){
		require(lstOrder[nbOrder].client.addr == msg.sender);
		uint providState = 0;
		uint transpState = 0;
		uint cltState = 0;

		if (lstOrder[nbOrder].provider.state == States.ACCEPTED){
			providState = 1;
		}
		if (lstOrder[nbOrder].transporter.state == States.ACCEPTED){
			transpState = 1;
		}
		if (lstOrder[nbOrder)].client.state == States.ACCEPTED){
			cltState = 1;
		}
		return (providState, transpState, cltState);
	}
}
