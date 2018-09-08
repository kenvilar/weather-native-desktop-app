<template>
  <Window title="weather-native-desktop-app" width="400" height="150" margined v-on:close="exit">
    <Box>
      <Text>Ken Vilar's Weather Native Desktop Application</Text>
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
