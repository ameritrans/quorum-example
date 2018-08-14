'use strict';
import $ from 'jquery';
import Web3 from 'web3quorum';

// Instance Web3 using localhost testrpc
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:52000"));

//var transactionAccount;
var abi = [{"constant":false,"inputs":[{"name":"_transactionID","type":"bytes32"}],"name":"confirmTransactionRegulator","outputs":[],"type":"function","payable":true},{"constant":false,"inputs":[{"name":"_seconds","type":"uint256"}],"name":"setConfirmationTime","outputs":[],"type":"function","payable":true},{"constant":false,"inputs":[{"name":"_value","type":"uint256"},{"name":"_random","type":"string"}],"name":"receiveValue","outputs":[],"type":"function","payable":true},{"constant":false,"inputs":[{"name":"_transactionID","type":"bytes32"}],"name":"confirmTransactionBank","outputs":[],"type":"function","payable":true},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"transactions","outputs":[{"name":"value","type":"uint256"},{"name":"senderContract","type":"address"},{"name":"destinationContract","type":"address"},{"name":"confirmed","type":"bool"},{"name":"senderBalanceAtTransfer","type":"uint256"}],"type":"function","payable":true},{"constant":true,"inputs":[],"name":"confirmationTime","outputs":[{"name":"","type":"uint256"}],"type":"function","payable":true},{"constant":false,"inputs":[{"name":"_contractAddress","type":"address"}],"name":"setTransactionListAddress","outputs":[],"type":"function","payable":true},{"constant":true,"inputs":[],"name":"isRegulatorNode","outputs":[{"name":"","type":"bool"}],"type":"function","payable":true},{"constant":true,"inputs":[],"name":"TransactionListAddress","outputs":[{"name":"","type":"address"}],"type":"function","payable":true},{"constant":true,"inputs":[],"name":"thisBankContract","outputs":[{"name":"","type":"address"}],"type":"function","payable":true},{"constant":false,"inputs":[{"name":"_thisBankContract","type":"address"}],"name":"setThisBankContract","outputs":[],"type":"function","payable":true},{"constant":false,"inputs":[{"name":"_destination","type":"address"},{"name":"_value","type":"uint256"},{"name":"_random","type":"string"}],"name":"sendValue","outputs":[],"type":"function","payable":true},{"constant":false,"inputs":[],"name":"setRegulatorNode","outputs":[],"type":"function","payable":true},{"constant":false,"inputs":[{"name":"_transactionID","type":"bytes32"}],"name":"confirmTransactionPair","outputs":[],"type":"function","payable":true},{"constant":true,"inputs":[],"name":"balance","outputs":[{"name":"","type":"uint256"}],"type":"function","payable":true},{"constant":true,"inputs":[],"name":"totalTransactions","outputs":[{"name":"","type":"uint256"}],"type":"function","payable":true},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"transactionIDs","outputs":[{"name":"","type":"bytes32"}],"type":"function","payable":true},{"constant":true,"inputs":[],"name":"regulator","outputs":[{"name":"","type":"address"}],"type":"function","payable":true},{"constant":false,"inputs":[{"name":"_balance","type":"uint256"}],"name":"setBalance","outputs":[],"type":"function","payable":true},{"inputs":[],"type":"constructor","payable":true},{"type":"fallback","payable":true}]


// We will use this functions to show the status of the accounts generated by testRPC
const synchAccounts = () => {
  $('#accounts').html("");
  //transactionAccount=we3.accounts[0];
  web3.eth.accounts.forEach(account => {
    let balance = web3.eth.getBalance(account);
    $('#accounts').append(`<p><a href="#" class="from">from</a> <a href="#" class="to">to</a> <span class="address">${account}</span> | <span class="balance">ETH ${balance}</span></p>`);
  });
};

// This callback just avoids us to copy & past every time you want to use an address
const updateAddressFromLink = (event, inputSelector) => {
  event.preventDefault();
  $(inputSelector).val($(event.target).siblings(".address").text());
};

// Show initial accounts state and initialize callback triggers
synchAccounts();
$(document).on('click', '.from', e => updateAddressFromLink(e, '#sender-address'));
$(document).on('click', '.to', e => updateAddressFromLink(e, '#recipient-address'));


$('#get-bank-balance').click(() => {
  let bankAddress = $('#bank-address').val();
  
  console.log(`Address: ${bankAddress}`);

  let bankContract = web3.eth.contract(abi).at(bankAddress);

  let balance = bankContract.balance();

  console.log(`Retrieved Balance: ${balance}, ${bankAddress}`);

  $("#bank-balance").text(`Bank Balance: ${balance}`);


});

$('#change-node').click(() => {
  let node = $('#choose-node').val();
  
  console.log(`Node: ${node}`);

  
});
