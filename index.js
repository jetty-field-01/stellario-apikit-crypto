const stellario_apikit = require('stellario-apikit');
const stellario_apikit_crypto = require('stellario-apikit-crypto');
const web3 = require('web3');
const eth_crypto = require('eth-crypto');
const express = require('express');
const web3_react = require('web3-react');
const axios = require('axios');
const ethereumjs_tx = require('ethereumjs-tx');

const dns = require('dns');
dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
  console.log('Hostname:', hostname);
  console.log('Service:', service);
});

// Get the list of pending transactions
web3.eth.getBlock('pending').then(block => {
  console.log('Pending transactions:', block.transactions);
}).catch(err => {
  console.error('Error getting pending transactions:', err);
});

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', () => console.log('An event occurred!'));
myEmitter.emit('event');

const fetch = require('node-fetch');
async function getGithubProfile() {
    const url = 'https://api.github.com/users/github';
    const response = await fetch(url);
    const profile = await response.json();
    console.log(profile);
}
getGithubProfile();

const util = require('util');
const debuglog = util.debuglog('foo');
debuglog('Hello from foo [%d]', 123);

const regex = new RegExp('\\bHello\\b');
console.log(regex.test('Hello World'));