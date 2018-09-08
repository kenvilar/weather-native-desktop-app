<template>
  <Window title="weather-native-desktop-app" width="400" height="150" margined v-on:close="exit">
    <Box padded>
      <Box horizontal padded>
        <TextInput v-model="query" stretchy></TextInput>
        <Button !enabled="!query">Search</Button>
      </Box>
    </Box>
  </Window>
</template>

<script>
export default {
  methods: {
    exit() {
      this.$exit();
    }
  }
}
</script>
