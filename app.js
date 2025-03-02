import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';

function handleClick() {
    window.location.href = 'index.html';
}

async function connectWallet() {
    if (window.solana && window.solana.isPhantom) {
        try {
            const response = await window.solana.connect();
            const account = response.publicKey.toString();
            document.getElementById('connectWalletButton').innerText = `Connected: ${account}`;
        } catch (error) {
            console.error("User rejected the request.");
        }
    } else {
        alert('Phantom Wallet is not installed. Please install it to use this DApp.');
    }
}

function handleReplyGuyClick() {
    // Add your functionality here
    alert('Be A Reply Guy button clicked!');
}

// Check if Phantom Wallet is installed
window.addEventListener('load', () => {
    if (window.solana && window.solana.isPhantom) {
        document.getElementById('connectWalletButton').innerText = 'Connect Phantom Wallet';
    } else {
        document.getElementById('connectWalletButton').innerText = 'Install Phantom Wallet';
    }
});