import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
// `web3connect` is a library that helps connect users wallet to various blockchain applications in a seamless and secure
import { Web3Connect } from 'web3connect';

const Web3ConnectButton = () => {

    // useState hook to manage its internal state
    // connected is a `variable` and `setConnected` is a function
    // connected stores a boolean value to determine whether the user is currently connected 
    // setConnected is used to update `connected state variable`
    const [connected, setConnected] = useState(false);

    // Web3 connect library
    // useWeb3React hooks provides access to the currenct account address, connection state, and a function
    // account: holds address of the connected wallet
    // connect: This function is used to initiate a connection request to a allet
    // active: boolean indicates whether the connection process is ongoing
    const { account, connect, active } = useWeb3React();

    const web3Connect = new Web3Connect({
        infuraId: 'Your Infura_ID',
        chainId: 1,
        clientId: 'Your client_id',
        redirectUri: 'http://localhost:3000',
        rpcUrl: 'https://mainnet.base.Coinbase/rpc'
    });

    // useEffect hook is used to perform actions based on changes in state or props 
    // The callback will run after the functional component is rendered
    // the second argument is a variable that the effect depends on
    // Manages the connection state and initiating the connection process in the Web3ConnectButton 
    useEffect(() => {
        // 'web3Connect.connected' refers to the web3Connect instance created 
        // evaluates to true if the user wallet is connected 
        if (web3Connect.connected) {
            setConnected(true);
            connect(web3Connect.provider);
        }
    }, [web3Connect, connect]);

    const handleClick = async () => {
        if (!connected) {
            try {
                await web3Connect.connect();
            } catch (error) {
                console.error('Web3 Connect error:', error); 
            }
        }
    };

  return (
    // JSX element defines a button element

    <button className=""
        // Defines function to be called when the button is clicked
        onClick={handleClick}
        // disables the button if the user is already connected or the connection process is active
        // conditon I: if `connected` is true (meaning the user wallet is already connected), the button is disabled
        // conditon I: if active is true (meaning the connection process is happening), the button is disabled
        disabled={connected || active}
    >
    {/* conditonal expression to dynamically set the text context of the button based on the connected state variable */}
       {/* condition ? expressionIfTrue : expressionIfFalse */}
        {connected ? 'Connected' : 'Connect Wallet'}
    </button>
  )
}

export default Web3ConnectButton; 