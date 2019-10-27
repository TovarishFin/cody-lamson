<template>
  <v-card class="mb-4" elevation="4">
    <v-card-title>
      <v-layout row wrap>
        <v-flex xs12 md4 lg3 xl2>
          <v-avatar :size="256" color="grey lighten-4">
            <g-image
              src="/images/meAvatar.jpg"
              alt="cody lamson, full stack blockchain developer"
              class="image"
            />
          </v-avatar>
        </v-flex>
        <v-flex xs12 md8 lg9 xl10 align-self-center>
          <p class="display-3">Cody Lamson</p>
          <p class="display-1 secondary--text">
            Full Stack Blockchain Web Developer
          </p>
        </v-flex>
      </v-layout>
    </v-card-title>

    <v-card-text>
      <p class="headline primary--text">A Brief History of Cody</p>
      <p>
        I am a full stack web developer who has spent the last several years
        working with a variety of different blockchains, though mostly focusing on ethereum. However, I have been following the cryptocurrency
        scene since 2012 (mostly bitcoin at the start). In the past few years I have been working
        with smart contracts as well as the web interfaces (DApps) that connect to them. I strive
        to write very high quality code which is extensively tested. This is
        extremely important for things such as smart contracts where you need to
        "get it right the first time". I have a variety of different smart
        contract related projects (both personal and professional) which are public on my
        <a target="_blank" href="https://github.com/TovarishFin">GitHub</a>. I
        am most comfortable working with solidity and javascript through I am
        currently spending most of my free time getting into rust.
      </p>

      <p>
        I currently work at Porsche Digital Lab where I help take experimental blockchain concepts to the next level.
      </p>

      <p>
        Before my work with blockchain related projects, I worked on various
        web projects in both a backend and frontend capacity. The most notable
        company that I did work for was Adidas, where I was working on a backend
        for a joint venture between Adidas and Ottobock. I have built some other
        neat things for smaller clients such as a care home management system
        where most of the work was frontend focused (though I did build the
        supporting backend as well).
      </p>

      <p class="headline primary--text">Core Competencies</p>
      <p class="title secondary--text">Solidity/Smart Contracts</p>
      <p>
        I have been spending both my professional and personal time on ethereum
        based projects for the last several years. Ethereum is still quite new
        and finding developers with more than a year of experience in this field
        is rather uncommon. My experience shows in the quality/speed of my work,
        the solutions I offer, and my demand/pursuit for extensive test coverage
        when creating smart contracts.
      </p>

      <p class="title secondary--text">Smart Contract Related Competencies</p>
      <p class="font-weight-bold subheading">Upgradeable Contracts</p>
      <p>
        Implemented a delegate call proxy factory pattern for deploying multiple
        instances of a contract in a gas efficient manner. Took the concept
        further and chained delegate calls in order to work around gas limits
        for a huge smart contract. I have also come up with a pattern for "mass
        upgradeable" smart contracts. I have implemented Upgradeable contracts
        in one way or another for 4 different clients on different sets of smart
        contracts so far.
      </p>

      <p class="font-weight-bold subheading">ERC20 Tokens</p>
      <p>
        Have plenty of experience with this industry standard. I have written
        several audited and mainnet-deployed ERC20 token contracts. The most
        noteable one is <b>BrickblockToken (BBK)</b> which can be found on
        exchanges and market cap listings.
      </p>

      <p class="font-weight-bold subheading">ERC721</p>
      <p>
        Have built a project implementing this standard. See PicsumToken on my
        gitbub if you are interested in knowing more.
      </p>

      <p class="font-weight-bold subheading">Crowdsale Contracts</p>
      <p>
        Also very familiar with this pattern and have written different versions
        with different requirements.
      </p>

      <p class="font-weight-bold subheading">Dividend Paying Smart Contracts</p>
      <p>
        Implemented a gas efficient method of distributing dividends which was
        not common knowledge when implemented. I have seen a few other
        implementations over time, I still think the method implemented by me is
        the best I have seen.
      </p>

      <p class="font-weight-bold subheading">Oraclize Integration</p>
      <p>
        Have used for random generation as well as complex API calls requiring
        inline assembly to parse.
      </p>

      <p class="font-weight-bold subheading">µRaiden</p>
      <p>
        Have implemented ERC20 tokens which use µRaiden for offchain token
        transfers. Was my reason for getting back into python.
      </p>

      <p class="font-weight-bold subheading">Solidity Inline Assembly</p>
      <p>
        Have gotten pretty deep into inline assembly in order to save on gas
        costs for smart contracts when absolutely needed. Was also needed for
        delegate call proxies. Have used for many other things that just cant be
        done with regular solidity
      </p>

      <p class="font-weight-bold subheading">
        Merkle Tree Verification
      </p>
      <p>
        Have used Bitcoin block root merkle hashes for verifying Bitcoin UTXOs
        in an Ethereum smart contract. Have a pretty good understanding on how
        they work. Am also currently working on creating a Bitcoin clone in Go
        which also requires merkle tree knowledge.
      </p>

      <p class="font-weight-bold subheading">DApps</p>
      <p>
        I know how to build Dapps using Vue, React, or plain old vanilla
        javascript. I am no stranger to redux and vuex for wiring up complex
        contract interactions. I have plenty of experience connecting smart
        contracts to the web client through web3. I have built/contributed to
        more than 5 DApps so far.
      </p>

      <p class="font-weight-bold subheading">IPFS</p>
      <p>
        IPFS offers some very neat features that work well with smart contracts
        and data integrity. I Have used it for large data storage requirements for
        smart contracts at Brickblock and other projects. I also currently run and 
        maintain an IPFS node.
      </p>

      <p class="title secondary--text">Javascript</p>
      <p>
        I am very comfortable working on projects which involve javascript in
        any form. I write almost all smart contract tests in javascript. I have
        written both servers and clients using a variety of different frameworks
        including: Vue, React, Angular, Polymer, Node, Express etc.
      </p>

      <p class="title secondary--text">Web Clients</p>
      <p>
        Regarding client side work, I have extensive experience in implementing
        all of the things that make a progressive web app. This includes such
        things as offline functionality through service workers, push
        notifications and offline database caching. I also have significant
        experience with real-time database functionality along with all of the
        benefits and headaches that come with it. As stated above, I have
        experience with a wide range of frameworks, such as Vue, React, and
        AngularJS
      </p>

      <p class="title secondary--text">Backend Work</p>
      <p>
        Regarding server side work, I have spent considerable time building APIs
        using node as well as leveraging the server to create server side
        rendered web applications. I have quite a bit of experience with MongoDB
        and have a bit of experience with postgres. Lately Ethereum has been my
        "backend" for most of the applications I have been writing.
      </p>

      <p class="headline primary--text">Currently Learning/Interested in...</p>

      <p class="title secondary--text">
        State Channels, Plasma, & Other 2nd layer solutions
      </p>
      <p>
        I have spent time looking at different state channel implementations which are an incredibly interesting topic. I have been playing around with Loom Networks <a target="_blank" href="https://loomx.io/">DappChain</a> lately.
      </p>

      <p class="title secondary--text">Counterfactual Smart Contract Wallets, Gas Station Network, Useability in General</p>
      <p>
        There are some amazing projects out right now which will enable regular users to use blockchain application without even knowing they are using blokchain. I am have been trying out and seeing how these new patterns can fit into future projects in order to further ease user onboarding.
      </p>
      <p>
        Several specific projects I am very excited to see come to production are <a target="_blank" href="https://universallogin.io/">universal login</a> and <a target="_blank" href="http://abridged.io/">abridged</a>.
      </p>

      <p class="title secondary--text">Rust</p>
      <p>
        I have started getting into rust because, one: I hear nothing but good things about the language, and two: it seems that web assembly will be playing an important role in many different blockchain implementations in the future. Having played with c++ before, I can really appreciate the benefits of using rust instead for compiling down to web assembly.
      </p>

      <p class="headline primary--text">Previous Work and Pet Projects</p>
      <p>
        Because of the nature of my work, I’m not able to display all of my work
        publicly. If you would like to see some examples or perhaps something a
        little more specific, please get in touch and I'd be happy to send along
        a few examples. You can find some projects (both personal and
        professional) <g-link to="/all-projects">here</g-link>.
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {}
</script>

<style></style>
