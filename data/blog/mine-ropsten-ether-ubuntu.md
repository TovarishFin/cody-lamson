# Mine Ropsten Testnet Ether
You are going to need the following setup:
* `ethminer`
* `geth`

## geth
```sh
sudo apt-get install software-properties-common
sudo add-apt-repository -y ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install ethereum
```

looking over the options you are going to find the following:
```sh
➜  notes geth --help | grep rpc
  --rpc                  Enable the HTTP-RPC server
  --rpcaddr value        HTTP-RPC server listening interface (default: "localhost")
  --rpcport value        HTTP-RPC server listening port (default: 8545)
  --rpcapi value         API's offered over the HTTP-RPC interface
  --rpccorsdomain value  Comma separated list of domains from which to accept cross origin requests (browser enforced)
  --rpcvhosts value      Comma separated list of virtual hostnames from which to accept requests (server enforced). Accepts '*' wildcard. (default: "localhost")
➜  notes geth --help | grep testnet
  --testnet                                Ropsten network: pre-configured proof-of-work test network
➜  notes geth --rpc --rpccorsdomain localhost --testnet
➜  notes geth --help | grep datadir
  --datadir "/home/tovarishfin/.ethereum"  Data directory for the databases and keystore
  --keystore                               Directory for the keystore (default = inside the datadir)
  --ethash.cachedir                            Directory to store the ethash verification caches (default = inside the datadir)
  --ipcpath              Filename for IPC socket/pipe within the datadir (explicit paths escape it)
```

In order to allow connections from localhost which we will be using for `ethminer`, we need to enable these options.

This would look like the following (replace datadir with a location of your choosing):
```sh
geth --rpc \
--rpccorsdomain localhost \
--testnet \
--syncmode fast \
--cache 5326
```

You might get a few warnings such as the following:
```
WARN [03-25|16:43:49.791] Synchronisation failed, dropping peer    peer=c7e7675577416d6b err="action from bad peer ignored
```

This is fine, just wait some time and you should start to see the blockchain sync. It will look like this:
```
INFO [03-25|17:46:03.079] Imported new block receipts              count=128  elapsed=54.009ms  number=2378439 hash=f5069a…dc1d35 age=1y2mo4w   size=881.23kB
INFO [03-25|17:46:03.120] Imported new state entries               count=1152 elapsed=8.610ms   processed=6366993 pending=8965  retry=0 duplicate=0 unexpected=0
INFO [03-25|17:46:03.214] Imported new block receipts              count=128  elapsed=51.403ms  number=2378567 hash=ad9387…5692f2 age=1y2mo4w   size=908.36kB
INFO [03-25|17:46:03.385] Imported new state entries               count=768  elapsed=6.108ms   processed=6367761 pending=8546  retry=0 duplicate=0 unexpected=0
```

This is going to take a while to sync up... check on it occaisionally by doing the following:
```
geth --testnet attach
```

Then inside the console run:
```
web3.eth.syncing
```

You should see something like this:
```
> web3.eth.syncing
{
  currentBlock: 2378828,
  highestBlock: 5274991,
  knownStates: 6376307,
  pulledStates: 6367761,
  startingBlock: 0
}

```

When you get `false` back instead, you are done and ready to go.

You might want to set an alias so that you don't need to remember the options each time you want to start your node if you are using zsh, use `.zshrc` instead of `.bashrc`:
```
echo 'alias gethRopsten="geth --rpc --rpccorsdomain localhost --testnet --syncmode fast --cache 5326"' >> ~/.bashrc
```

Refresh your terminal:
```
source ~/.bashrc
```

You can now start the geth node using `gethRopsten`. Hooray!

### ethminer
```
mkdir ~/miner

cd ~/miner

wget "https://github.com/ethereum-mining/ethminer/releases/download/v0.18.0-rc.0/ethminer-0.18.0-rc.0-cuda-9-linux-x86_64.tar.gz"

rm ethminer-0.18.0-rc.0-cuda-9-linux-x86_64.tar.gz

echo 'alias ethminer="~/miner/bin/ethminer"' >> ~/.bashrc

ethminer -P http://localhost:8545
```
