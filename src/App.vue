<template lang="pug">
  v-app
    v-toolbar(color='blue darken-3', dark, app, fixed)
      v-toolbar-title.ml-0.pl-3(:style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'")
        span.hidden-xs-only Bidirectional Translation

      .d-flex.align-center(style='margin-left: auto')
        router-link.about-link(to="/about") About

        v-btn(icon)
          v-icon notifications

    v-content
      v-container(fluid, fill-height)
        v-layout(justify-center, align-center)
          router-view

    v-btn(fab, bottom, right, color='pink', dark, fixed, @click.stop='dialog = !dialog')
      v-icon add
</template>

<script>
  export default {
    name: 'App',
    data: () => ({
      dialog: false,
      drawer: null,
      labelText: 'Enter your exercise here',
    }),
  }
</script>

<style lang="stylus">
.about-link
  color white
</style>
