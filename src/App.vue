<template>
  <v-app>
    <v-toolbar color="blue darken-3" dark app fixed>
      <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
        <span class="hidden-xs-only">Bidirectional Translation</span>
      </v-toolbar-title>

      <div class="d-flex align-center" style="margin-left: auto">
        <v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>
      </div>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>

    <v-btn
      fab
      bottom right
      color="pink" dark
      fixed
      @click.stop="dialog = !dialog"
    >
      <v-icon>add</v-icon>
    </v-btn>

  </v-app>
</template>

<script>
  export default {
    name: 'app',
    data: () => ({
      dialog: false,
      drawer: null,
      labelText: 'Enter your exercise here',
    }),
  }
</script>

<style>

</style>
