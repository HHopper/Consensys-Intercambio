App = {
  web3Provider: null,
  contracts: {},

  initWeb3: async function() {
// Modern dapp browsers...
if (window.ethereum) {
  App.web3Provider = window.ethereum;
  try {
    // Request account access
    await window.ethereum.enable();
  } catch (error) {
    // User denied account access...
    console.error("User denied account access")
  }
}
// Legacy dapp browsers...
else if (window.web3) {
  App.web3Provider = window.web3.currentProvider;
}
// If no injected web3 instance is detected, fall back to Ganache
else {
  App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
}
web3 = new Web3(App.web3Provider);   
userAddress = web3.currentProvider.selectedAddress;
App.setUserAddress(userAddress); 
console.log(userAddress);


    return App.initContract();
  },

  initContract: function() {
  $.getJSON('Intercambio.json', function(data) {
  intercambioContract = new web3.eth.Contract(data.abi, '0xb455AbAe9b9CAb36349E1e66e7c65AAf8C2037e8');
  console.log(intercambioContract);
  

  // Use our contract to retrieve and mark the adopted pets
  return true;
});
  },
  
  setUserAddress: function(userAddress) {
  if (document.getElementById("userAddress")) {
    document.getElementById("userAddress").innerHTML=userAddress; 
    }
  if (document.getElementById("userAddressStudent")) {
    document.getElementById("userAddressStudent").innerHTML=userAddress; 
    }
  if (document.getElementById("userAddressTutor")) {
    document.getElementById("userAddressTutor").innerHTML=userAddress; 
    }
  }
  
}


$(document).foundation()
$(function() {
  $(window).load(function() {
  });
});
