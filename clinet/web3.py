from web3 import Web3, HTTPProvider

# Connect to Ethereum node
web3 = Web3(HTTPProvider('http://localhost:7545'))

# Load your contract ABI and address
contract_abi = ...  # Your contract's ABI
contract_address = ...  # Your contract's address
contract = web3.eth.contract(address=contract_address, abi=contract_abi)