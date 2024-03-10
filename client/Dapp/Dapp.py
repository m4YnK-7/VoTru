from flask import Flask, render_template, request
from web3 import Web3
from web3.middleware import geth_poa_middleware
import json
# from solcx import compile_standard


# WEB3 PARAMS
w3 = Web3(Web3.HTTPProvider('http://127.0.0.1:7545')) 
w3.middleware_onion.inject(geth_poa_middleware, layer=0)

abi = json.loads('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_candidateId","type":"uint256"}],"name":"Voted","type":"event"},{"inputs":[],"name":"candidatesCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"electionState","outputs":[{"internalType":"enum Polls.State","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"votersCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"myFunction","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startElection","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endElection","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"addCandidate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_voter","type":"address"}],"name":"addVoter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_current","type":"address"}],"name":"getRole","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_candidateId","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_candidateId","type":"uint256"}],"name":"getCandidateDetails","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')

address = '0x1c5BE8Ea9BdeB2449e004dc04F7CA7FdcCA4f3D1'
contract = w3.eth.contract(address=address, abi=abi)
# WEB3 PARAMS

print(contract.functions.myFunction().transact({'from': address}))

# def vote():
#     candidate_id = int(request.form['candidate_id'])
#     account = request.form['account']
#     tx_hash = contract.functions.vote(candidate_id).transact({'from': account})
#     tx_receipt = w3.eth.waitForTransactionReceipt(tx_hash)
#     return tx_hash, tx_receipt

# def candidates():
#     candidates_count = contract.functions.candidatesCount().call()
#     candidates_list = []
#     for i in range(candidates_count):
#         candidate_details = contract.functions.getCandidateDetails(i).call()
#         candidates_list.append({'name': candidate_details[0], 'vote_count': candidate_details[1]})
#     return candidates_list

# def admin():
#     role = 1 
#     return role

# def voter():
#     role = 2
#     return role
