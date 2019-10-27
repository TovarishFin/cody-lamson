<template>
  <Layout>
    <v-card>
      <v-card-text>
        <p class="display-1">Services Offered</p>

        <p class="title secondary--text">Blockchain Work</p>
        <p>
          Can work on smart contracts for your idea and deploy them. Extensive
          tests included. I keep up to date with the latest developments and
          very closely follow security developments.
        </p>

        <p class="title secondary--text">Full Stack Work</p>
        <p>
          Can build out the backend, database, and client that you need. Can
          also do deployments using Kubernetes, aws, Heroku, etc. Comfortable building
          the backend, database, and frontend. I am most comfortable doing this
          with Node, Express, MongoDB. I am experienced with Vue, React, Polymer and Angular. 
          If you have another framework or language that you wish to
          use I am open to discussion.
        </p>

        <p class="title secondary--text">Frontend Work</p>
        <p>
          Can build a modern web application using modern frameworks such as
          Vue or React. Comfortable building frontends with a variety of frameworks. I
          am most comfortable doing this with React or Vue. From my
          experience I believe that if you have a different framework in mind,
          this should not be a huge problem. I keep up with most developments
          regarding frontend frameworks.
        </p>

        <p class="title secondary--text">Backend Work</p>
        <p>
          Can build servers serving up an API or handle auth. Comfortable
          building the backend and database. I am most comfortable doing this
          with Node, Express, and MongoDB. Happy to use something such as Postgres as well. I can also do some basic maintenance
          and updates for .NET and PHP servers. I am also familiar with SQL
          database database management. If you have another framework or
          language that you wish to use I am open to discussion.
        </p>

        <p class="title secondary--text">Other Work</p>
        <p>
          Feel free to ask, I might be able to meet your needs. Need a site that
          looks and feels like an application? I have you covered. I can create
          a site that: works offline, sends push notifications, saves as an
          application on mobile devices, and works in real time.
        </p>

        <p class="display-1">Rates etc.</p>

        <p class="title secondary--text">Rate</p>
        <p><g-link to="/contact">Contact</g-link> me for a quote.</p>

        <p class="title secondary--text">Payment Methods</p>
        <p>I accept any major cryptocurrency, DAI, or euros.</p>

        <p class="title secondary--text">Availability</p>
        <p><g-link to="/contact">Contact</g-link> me to check availability.</p>
        <p>
          I am willing to work either remote or on-site in Berlin.
        </p>

        <p class="title secondary--text">Further Discussion</p>
        <p>
          Contact me through any of the methods listed
          <g-link to="/contact">here</g-link>.
        </p>
      </v-card-text>
    </v-card>
  </Layout>
</template>
<script>
export default {
  metaInfo: {
    title: 'Services offered by Cody Lamson',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Find out what Cody Lamson can do for you'
      }
    ]
  }
}
</script>
