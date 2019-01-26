<template>
  <v-footer
    height="auto"
  >
    <v-card
      flat
      tile
      class="text-xs-center footer"
    >
      <v-card-text>
        <v-btn
          class="mx-3 white--text"
          icon
          to="/"
        >
          <v-icon size="24px">mdi-home</v-icon>
        </v-btn>

        <v-btn
          class="mx-3 white--text"
          icon
          target="_blank"
          href="https://github.com/TovarishFin"
        >
          <v-icon size="24px">mdi-github-circle</v-icon>
        </v-btn>

        <v-btn
          class="mx-3 white--text"
          icon
          target="_blank"
          href="https://medium.codylamson.com"
        >
          <v-icon size="24px">mdi-medium</v-icon>
        </v-btn>

        <v-btn
          class="mx-3 white--text"
          icon
          to="/contact"
        >
          <v-icon size="24px">mdi-phone</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        All of the code on this site can be found on github. Feel free to play around with it.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy; {{ new Date().getFullYear() }} — <strong>Cody Lamson</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<style>
.footer {
  width: 100%;
}
</style>
