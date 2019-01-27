<template>
  <Layout>
    <v-list two-line subheader>
      <v-subheader inset>contact</v-subheader>

      <v-list-tile avatar>
        <v-list-tile-avatar>
        <v-icon>mdi-skype</v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>
            Skype
          </v-list-tile-title>
          <v-list-tile-sub-title>
            cody.lee.lamson
          </v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn icon ripple>
            <v-icon @click="copyToClipboard('Skype name copied to clipboard', 'cody.lee.lamson')">mdi-content-copy</v-icon>
          </v-btn>
        </v-list-tile-action>
        
        <v-list-tile-action>
          <v-btn icon ripple href="skype:cody.lee.lamson?call">
            <v-icon color="secondary">mdi-skype</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>

      <v-list-tile avatar>
        <v-list-tile-avatar>
        <v-icon>mdi-github-circle</v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>
            Github
          </v-list-tile-title>
          <v-list-tile-sub-title>
            TovarishFin
          </v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn icon ripple>
            <v-icon @click="copyToClipboard('Github name copied to clipboard.', 'TovarishFin')">mdi-content-copy</v-icon>
          </v-btn>
        </v-list-tile-action>

        <v-list-tile-action>
          <v-btn icon ripple target="_blank" href="https://github.com/TovarishFin">
            <v-icon color="secondary">mdi-link</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>

      <v-list-tile avatar>
        <v-list-tile-avatar>
        <v-icon>mdi-linkedin-box</v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>
            LinkedIn
          </v-list-tile-title>
          <v-list-tile-sub-title>
            Cody Lamson
          </v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn icon ripple>
            <v-icon @click="copyToClipboard('Name copied to clipboard.', 'Cody Lamson')">mdi-content-copy</v-icon>
          </v-btn>
        </v-list-tile-action>

        <v-list-tile-action>
          <v-btn icon ripple target="_blank" href="https://www.linkedin.com/in/cody-lamson-web-dev/">
            <v-icon color="secondary">mdi-link</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>

      <v-list-tile avatar>
        <v-list-tile-avatar>
        <v-icon>mdi-phone</v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>
            Mobile
          </v-list-tile-title>
          <v-list-tile-sub-title>
            +49 176 8656 2888
          </v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn icon ripple>
            <v-icon @click="copyToClipboard('Phone number copied to clipboard.', '+4917686562888')">mdi-content-copy</v-icon>
          </v-btn>
        </v-list-tile-action>

        <v-list-tile-action>
          <v-btn icon ripple href="tel:+4917686562888">
            <v-icon color="secondary">mdi-phone</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>

      <v-list-tile avatar>
        <v-list-tile-avatar>
        <v-icon>mdi-email</v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>
            Email
          </v-list-tile-title>
          <v-list-tile-sub-title>
            me@codylamson.com
          </v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn icon ripple>
            <v-icon @click="copyToClipboard('Email copied to clipboard.', 'me@codylamson.com')">mdi-content-copy</v-icon>
          </v-btn>
        </v-list-tile-action>

        <v-list-tile-action>
          <v-btn icon ripple href="mailto:me@codylamson.com">
            <v-icon color="secondary">mdi-email</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>

      <v-list-tile avatar>
        <v-list-tile-avatar>
        <v-icon>mdi-telegram</v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>
            Telegram
          </v-list-tile-title>
          <v-list-tile-sub-title>
            @TovarishFin
          </v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn icon ripple>
            <v-icon @click="copyToClipboard('Telegram name copied to clipboard.', '@TovarishFin')">mdi-content-copy</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>

      <v-list-tile avatar>
        <v-list-tile-avatar>
        <v-icon>mdi-crosshairs-gps</v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>
            Location
          </v-list-tile-title>
          <v-list-tile-sub-title>
            Berlin, Germany
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </Layout>
</template>
<script>
import eventBus from '~/events/eventBus'

export default {
  methods: {
    copyToClipboard(message, item) {
      this.$clipboard(item)
      eventBus.$emit('setNotifier', true, message)
    }
  }
}
</script>
