    // SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Polls {
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    mapping (uint => Candidate) public candidates;
    mapping (address => bool) public admin;
    mapping(address => bool) isVoter;
    mapping(address => bool) voted;
    
    uint public countCandidates;
    uint256 public votersCount = 0;

    function addCandidate(string memory name) public  returns(uint) {
                countCandidates ++;
                candidates[countCandidates] = Candidate(countCandidates, name, 0);
                return countCandidates;
    }

    function vote(uint candidateID) public {
        require(candidateID > 0 && candidateID <= countCandidates);
    
        require(isVoter[msg.sender], "Non-registered as voter");
        require(!voted[msg.sender], "You have already voted");
        
        voted[msg.sender] = true;
        candidates[candidateID].voteCount ++;  
    }

    function checkVote() public view returns(bool){
        return voters[msg.sender];
    }
        
    function getCountCandidates() public view returns(uint) {
        return countCandidates;
    }

}

