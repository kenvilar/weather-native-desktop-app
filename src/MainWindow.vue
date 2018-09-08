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
  data () {
    return {
      query: '',
      error: false,
      city: '',
      country: '',
      weatherDescription: '',
      temp: null,
      tempMin: null,
      tempMax: null,
      humidity: null,
    };
  },
  methods: {
    exit() {
      this.$exit();
    },
    showWeather() {
      axios.get(
      	`/weather?q=${this.query}&units=metric&&appid=${apiKey}`,
      ).then(response => {
        this.city = response.data.name;
        this.country = response.data.sys.country;
        this.weatherDescription = response.data.weather[0].description;
        this.temp = response.data.main.temp;
        this.tempMin = response.data.main.temp_min;
        this.tempMax = response.data.main.temp_max;
        this.humidity = response.data.main.humidity;
        this.error = false;
      }).catch(() => {
        this.error = true;
        this.city = '';
      });
    },
  }
}
</script>
