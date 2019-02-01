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
        I am a full stack web developer who has taken an extreme interest in
        Ethereum and blockchain in general. I have been following the scene and
        have owned some cryptocurrency since 2012 but have only recently gotten
        involved technically. I have been spending the last year and a half
        building and extensively testing smart contracts both professionally and
        in my free time. It has become a very serious passion of mine.
      </p>
    </v-card-text>

    <v-card-text>
      <p class="headline primary--text">Core Competencies</p>
      <p class="title secondary--text">Solidity/Smart Contracts</p>
      <p>
        I have been working full-time and in my free time on smart contracts
        using solidity for the last 1.5 years. Ethereum is quite new and finding
        developers with more than a year of experience in this field is rather
        uncommon. This shows in the quality of my work, the solutions I offer,
        and my demand for extensive test coverage when creating smart contracts.
      </p>
      <p class="title secondary--text">Smart Contract Related Competencies</p>
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              Upgradeable Contracts
            </v-list-tile-title>
            <v-list-tile-sub-title>
              Implemented a delegate call proxy factory pattern for deploying
              multiple instances of a contract in a gas efficient manner. Took
              the concept further and chained delegate calls in order to work
              around gas limits for a huge smart contract.
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              ERC20 Tokens
            </v-list-tile-title>
            <v-list-tile-sub-title>
              Plenty of experience with this industry standard. Have an extended
              ERC20 token that I wrote audited and deployed
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              ERC20
            </v-list-tile-title>
            <v-list-tile-sub-title>
              Have been playing around with this in my free time lately. Quite
              familiar with the concept and am working on a personal project
              involving this standard in my free time for fun.
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              title
            </v-list-tile-title>
            <v-list-tile-sub-title>
              subtitle
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              Crowdsale Contracts
            </v-list-tile-title>
            <v-list-tile-sub-title>
              Also very familiar with this pattern and have written different
              versions with different requirements.
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              Dividend Pattern
            </v-list-tile-title>
            <v-list-tile-sub-title>
              Implemented a gas efficient method of distributing dividends which
              was not common knowledge when implemented.
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              Oraclize Integration
            </v-list-tile-title>
            <v-list-tile-sub-title>
              Have used for random numbers as well as complex API calls
              requiring inline assembly to parse.
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              µRadien
            </v-list-tile-title>
            <v-list-tile-sub-title>
              Have implemented ERC20 tokens which use µRaiden for offchain token
              transfers. Was my reason for getting back into python.
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              Inline Assembly
            </v-list-tile-title>
            <v-list-tile-sub-title>
              Have gotten pretty deep into inline assembly in order to save on
              gas costs for smart contracts when absolutely needed. Was also
              needed for delegate call proxies. Have used for many other things
              that just cant be done with regular solidity
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              Merkle Trees
            </v-list-tile-title>
            <v-list-tile-sub-title>
              Have used Bitcoin block root merkle hashes for verifying Bitcoin
              UTXOs in an Ethereum smart contract. Have a pretty good
              understanding on how they work. Am also currently working on
              creating a Bitcoin clone in Go which also requires merkle tree
              knowledge.
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              DApps
            </v-list-tile-title>
            <v-list-tile-sub-title>
              Have built/contributed to 3 different DApps so far.
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              IPFS
            </v-list-tile-title>
            <v-list-tile-sub-title>
              Have used for large data storage requirements for smart contracts
              at Brickblock. Have also used for storing wedding photos on
              CryptoWeddings
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card-text>

    <v-card-text>
      <p class="title secondary--text">Javascript</p>
      <p>
        I am very comfortable working on projects which involve javascript in
        any form. I have written both servers and clients using a variety of
        different frameworks including: React, Angular, Polymer, Node, Express
        etc. I am now working on integrating this knowledge into my new smart
        contract knowledge in order to build well tested DApps and smart
        contracts.
      </p>

      <p class="title secondary--text">Web Clients</p>
      <p>
        Regarding client side work, I have extensive experience in implementing
        all of the things that make a progressive web app. This includes such
        things as offline functionality through service workers, push
        notifications and offline database caching. I also have significant
        experience with real-time database functionality along with all of the
        benefits and headaches that come with it.
      </p>

      <p class="title secondary--text">Backend Work</p>
      <p>
        Regarding server side work, I have spent considerable time building APIs
        using node as well as leveraging the server to create server side
        rendered web applications. I am currently interested in building smart
        contracts using Solidity on the Ethereum blockchain. I have a variety of
        different smart contract related projects which are public on my
        <a target="_blank" href="https://github.com/TovarishFin">GitHub</a>.
      </p>

      <p class="headline primary--text">Currently Learning/Improving</p>

      <p class="title secondary--text">ERC721</p>
      <p>
        I am currently playing with ERC721 Non-Fungible tokens and am building a
        personal project using it in my free time. For me, building a project is
        the best learning experience.
      </p>

      <p class="title secondary--text">Kubernetes</p>
      <p>
        I have also started lightly getting into dev ops using Kubernetes and
        Google Cloud.
      </p>

      <p class="title secondary--text">Go</p>
      <p>
        This is a language that I really want to get into but haven't had the
        time to create any significant projects with it. Currently I am using it
        to create a bitcoin blockchain clone. I want to eventually look into
        rebuilding geth from scratch. It would be a great learning experience to
        see how the Ethereum EVM works and get a better grasp on go as well.
      </p>

      <p class="title secondary--text">Python</p>
      <p>
        Have used for small projects. Most recently I have used it for using
        µRaiden in order to make off-chain ERC20 token transfers on the Ethereum
        blockchain.
      </p>

      <p class="title secondary--text">Teamwork</p>
      <p>
        Over the past few years I have gained more experience working in an
        agile teams. I am always working to improve my own teamwork and
        organizational skills.
      </p>

      <p class="headline primary--text">Previous Work and Pet Projects</p>
      <p>
        Because of the nature of my work, I’m not able to display all of my work
        publicly. If you would like to see some examples or perhaps something a
        little more specific, please get in touch and I'd be happy to send along
        a few examples. You can find some projects (both personal and
        professional) <g-link to="/projects">here</g-link>.
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {}
</script>

<style></style>
