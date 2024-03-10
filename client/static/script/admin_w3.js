const Web3 = require('web3');
const contract = require('@truffle/contract');

import PollArtifacts from '{{url_for(views.serve_polls_json)}}';
var PollContract = contract(PollArtifacts)

window.App = {
    eventStart: function() {
      window.ethereum.request({ method: 'eth_requestAccounts' });
      PollContract.setProvider(window.ethereum)
      PollContract.defaults({ from: window.ethereum.selectedAddress, gas: 6654755 })
  
      // Load account data
      App.account = window.ethereum.selectedAddress;
      document.getElementById("accountAddress").innerHTML = "Your Account: " + window.ethereum.selectedAddress;
      PollContract.deployed().then(function(instance) {
        instance.getCountCandidates().then(function(countCandidates) {
  
          document.addEventListener("DOMContentLoaded", function() {
            document.getElementById('submit_candidate').addEventListener('click', function() {
                console.log("sdkjfbsf")
              var nameCandidate = document.getElementById('name').value;
              var partyCandidate = document.getElementById('party').value;
              instance.addCandidate(nameCandidate, partyCandidate).then(function(result) {})
            });
  
            document.getElementById('addDate').addEventListener('click', function() {
              var startDate = Date.parse(document.getElementById("startDate").value) / 1000;
              var endDate = Date.parse(document.getElementById("endDate").value) / 1000;
              instance.setDates(startDate, endDate).then(function(rslt) {
                console.log("tarihler verildi");
              });
            });
  
            instance.getDates().then(function(result) {
              var startDate = new Date(result[0] * 1000);
              var endDate = new Date(result[1] * 1000);
              document.getElementById("dates").innerText = startDate.toDateString("#DD#/#MM#/#YYYY#") + " - " + endDate.toDateString("#DD#/#MM#/#YYYY#");
            }).catch(function(err) {
              console.error("ERROR! " + err.message)
            });
          });
  
          for (var i = 0; i < countCandidates; i++) {
            instance.getCandidate(i + 1).then(function(data) {
              var id = data[0];
              var name = data[1];
              var party = data[2];
              var voteCount = data[3];
              var viewCandidates = `<tr><td> <input class="form-check-input" type="radio" name="candidate" value="${id}" id=${id}>` + name + "</td><td>" + party + "</td><td>" + voteCount + "</td></tr>"
              document.getElementById("boxCandidate").insertAdjacentHTML('beforeend', viewCandidates);
            })
          }
  
          window.countCandidates = countCandidates;
  
        });
  
        instance.checkVote().then(function(voted) {
          console.log(voted);
          if (!voted) {
            document.getElementById("voteButton").disabled = false;
          }
        });
  
      }).catch(function(err) {
        console.error("ERROR! " + err.message)
      })
    },
  
    vote: function() {
      var candidateID = document.querySelector("input[name='candidate']:checked").value;
      if (!candidateID) {
        document.getElementById("msg").innerHTML = "<p>Please vote for a candidate.</p>";
        return;
      }
      PollContract.deployed().then(function(instance) {
        instance.vote(parseInt(candidateID)).then(function(result) {
          document.getElementById("voteButton").disabled = true;
          document.getElementById("msg").innerHTML = "<p>Voted</p>";
          window.location.reload(1);
        })
      }).catch(function(err) {
        console.error("ERROR! " + err.message)
      })
    }
  }
  
  window.addEventListener("load", function() {
    if (typeof web3 !== "undefined") {
      console.warn("Using web3 detected from external source like Metamask")
      window.eth = new Web3(window.ethereum)
    } else {
      console.warn("No web3 detected. Falling back to http://localhost:9545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for deployment. More info here: http://truffleframework.com/tutorials/truffle-and-metamask")
      window.eth = new Web3(new providers.HttpProvider("http://127.0.0.1:9545"))
    }
    window.App.eventStart()
  })
  