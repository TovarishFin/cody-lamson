<template>
  <Layout>
    <v-card>
      <v-card-title>
        <p class="display-2">{{ $page.project.title }}</p>
      </v-card-title>
      <g-image class="image" :src="$page.project.image" style="width: 100%;" />
      <v-card-text>
        <p class="display-1">Features</p>
        <v-list>
          <v-list-tile v-for="(feature, i) in $page.project.features" :key="i">
            <v-list-tile-content>
              <v-list-tile-title>
                {{ feature.name }}
              </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ feature.description }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <p class="display-1">Languages & Frameworks</p>
        <v-list>
          <v-list-tile v-for="(feature, i) in $page.project.languages" :key="i">
            <v-list-tile-content>
              <v-list-tile-title>
                {{ feature.name }}
              </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ feature.description }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <div v-html="$page.project.content" />
      </v-card-text>
      <v-card-actions>
        <v-btn
          v-if="$page.project.liveLink"
          color="primary"
          target="_blank"
          :href="$page.project.liveLink"
        >
          view live demo
        </v-btn>
        <v-btn v-if="!$page.project.liveLink" disabled>
          project moved
        </v-btn>
      </v-card-actions>
    </v-card>
  </Layout>
</template>

<page-query>
query Project ($path: String!) {
  project: project (path: $path) {
    title
    content,
    image,
    liveLink,
    features { 
      name,
      description
    },
    languages {
      name,
      description
    }
  }
}
</page-query>

<script>
export default {}
</script>
<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
