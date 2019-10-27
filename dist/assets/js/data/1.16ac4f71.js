(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{72:function(e){e.exports={data:{post:{title:"Mine Ropsten Testnet Ether",content:'<h1 id="mine-ropsten-testnet-ether"><a href="#mine-ropsten-testnet-ether" aria-hidden="true"><span class="icon icon-link"></span></a>Mine Ropsten Testnet Ether</h1>\n<p>You are going to need the following setup:</p>\n<ul>\n<li><code>ethminer</code></li>\n<li><code>geth</code></li>\n</ul>\n<h2 id="geth"><a href="#geth" aria-hidden="true"><span class="icon icon-link"></span></a>geth</h2>\n<pre><code class="language-sh">sudo apt-get install software-properties-common\nsudo add-apt-repository -y ppa:ethereum/ethereum\nsudo apt-get update\nsudo apt-get install ethereum\n</code></pre>\n<p>looking over the options you are going to find the following:</p>\n<pre><code class="language-sh">➜  notes geth --help | grep rpc\n  --rpc                  Enable the HTTP-RPC server\n  --rpcaddr value        HTTP-RPC server listening interface (default: "localhost")\n  --rpcport value        HTTP-RPC server listening port (default: 8545)\n  --rpcapi value         API\'s offered over the HTTP-RPC interface\n  --rpccorsdomain value  Comma separated list of domains from which to accept cross origin requests (browser enforced)\n  --rpcvhosts value      Comma separated list of virtual hostnames from which to accept requests (server enforced). Accepts \'*\' wildcard. (default: "localhost")\n➜  notes geth --help | grep testnet\n  --testnet                                Ropsten network: pre-configured proof-of-work test network\n➜  notes geth --rpc --rpccorsdomain localhost --testnet\n➜  notes geth --help | grep datadir\n  --datadir "/home/tovarishfin/.ethereum"  Data directory for the databases and keystore\n  --keystore                               Directory for the keystore (default = inside the datadir)\n  --ethash.cachedir                            Directory to store the ethash verification caches (default = inside the datadir)\n  --ipcpath              Filename for IPC socket/pipe within the datadir (explicit paths escape it)\n</code></pre>\n<p>In order to allow connections from localhost which we will be using for <code>ethminer</code>, we need to enable these options.</p>\n<p>This would look like the following (replace datadir with a location of your choosing):</p>\n<pre><code class="language-sh">geth --rpc \\\n--rpccorsdomain localhost \\\n--testnet \\\n--syncmode fast \\\n--cache 5326\n</code></pre>\n<p>You might get a few warnings such as the following:</p>\n<pre><code>WARN [03-25|16:43:49.791] Synchronisation failed, dropping peer    peer=c7e7675577416d6b err="action from bad peer ignored\n</code></pre>\n<p>This is fine, just wait some time and you should start to see the blockchain sync. It will look like this:</p>\n<pre><code>INFO [03-25|17:46:03.079] Imported new block receipts              count=128  elapsed=54.009ms  number=2378439 hash=f5069a…dc1d35 age=1y2mo4w   size=881.23kB\nINFO [03-25|17:46:03.120] Imported new state entries               count=1152 elapsed=8.610ms   processed=6366993 pending=8965  retry=0 duplicate=0 unexpected=0\nINFO [03-25|17:46:03.214] Imported new block receipts              count=128  elapsed=51.403ms  number=2378567 hash=ad9387…5692f2 age=1y2mo4w   size=908.36kB\nINFO [03-25|17:46:03.385] Imported new state entries               count=768  elapsed=6.108ms   processed=6367761 pending=8546  retry=0 duplicate=0 unexpected=0\n</code></pre>\n<p>This is going to take a while to sync up... check on it occaisionally by doing the following:</p>\n<pre><code>geth --testnet attach\n</code></pre>\n<p>Then inside the console run:</p>\n<pre><code>web3.eth.syncing\n</code></pre>\n<p>You should see something like this:</p>\n<pre><code>> web3.eth.syncing\n{\n  currentBlock: 2378828,\n  highestBlock: 5274991,\n  knownStates: 6376307,\n  pulledStates: 6367761,\n  startingBlock: 0\n}\n</code></pre>\n<p>When you get <code>false</code> back instead, you are done and ready to go.</p>\n<p>You might want to set an alias so that you don\'t need to remember the options each time you want to start your node if you are using zsh, use <code>.zshrc</code> instead of <code>.bashrc</code>:</p>\n<pre><code>echo \'alias gethRopsten="geth --rpc --rpccorsdomain localhost --testnet --syncmode fast --cache 5326"\' >> ~/.bashrc\n</code></pre>\n<p>Refresh your terminal:</p>\n<pre><code>source ~/.bashrc\n</code></pre>\n<p>You can now start the geth node using <code>gethRopsten</code>. Hooray!</p>\n<h3 id="ethminer"><a href="#ethminer" aria-hidden="true"><span class="icon icon-link"></span></a>ethminer</h3>\n<pre><code>mkdir ~/miner\n\ncd ~/miner\n\nwget "https://github.com/ethereum-mining/ethminer/releases/download/v0.18.0-rc.0/ethminer-0.18.0-rc.0-cuda-9-linux-x86_64.tar.gz"\n\nrm ethminer-0.18.0-rc.0-cuda-9-linux-x86_64.tar.gz\n\necho \'alias ethminer="~/miner/bin/ethminer"\' >> ~/.bashrc\n\nethminer -P http://localhost:8545\n</code></pre>\n'}}}}}]);