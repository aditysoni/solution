 


const initialize = () =>
  {
    let web3;
    connect = async() => {
        const {ethereum} = window;   //detecting if the wallet is connected or or not 
        if(ethereum) {
            console.log("ethreum provider detected");
           const address =  await ethereum.request({method: 'eth_requestAccounts'});
          
            await switchNetwork(binancechainID);

        }
    }
    }

    getCurrentChainId = async () => {
        const currentChainId = await web3.eth.getChainId();    //getting the chain id 
        console.log("current chainId:", currentChainId);
        return currentChainId;
    }

    switchNetwork = async (chainId) => {
        const currentChainId = await web3.eth.getChainId();
        if (currentChainId != chainId){
            try {
                await ethereum.request({
                    method:'wallet_switchEthereumChain',
                    params: [{chainId: Web3.utils.toHex(chainId)}]         //requesting ethereum to shift the wallet from other chain to binance chain 
                });
                console.log(`switched to chainid : ${chainId} succesfully`);
                const balances = await web3.eth.getBalance(address);
                
            }catch(err){
                console.log(`error occured while switching chain to chainId ${chainId}, err: ${err.message} code: ${err.code}`);
                if (err.code === 4902){             //chain has't been added 
                    console.log("does not exist");
                }
            }
        }
    }


