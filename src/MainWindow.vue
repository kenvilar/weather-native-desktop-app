<template>
  <Window title="Ken Vilar Weather App" width="400" height="150" margined v-on:close="exit">
    <Box padded>
      <Box horizontal padded>
        <TextInput v-model="query" stretchy></TextInput>
        <Button !enabled="!!query" @click="showMyWeather" placeholder="Search a city...">Search</Button>
      </Box>
      <Separator horizontal />
      <Group margined>
        <Box padded>
          <Text v-if="error">There is no such city in the database</Text>
          <Box v-if="!!city">
            <Box padded horizontal>
              <Text stretchy>{{ kencity }}, {{ kencountry }}</Text>
              <Text>{{ kentemp }}&deg;C</Text>
            </Box>
            <Text>{{ kenweatherDescription }}</Text>
            <Separator horizontal />
            <Box padded horizontal>
              <Text stretchy>Min: {{ _tempMin }}&deg;C</Text>
              <Text stretchy>Max: {{ _tempMax }}&deg;C</Text>
              <Text stretchy>Humidity: {{ _humidity }}%</Text>
            </Box>
          </Box>
        </Box>
      </Group>
    </Box>
  </Window>
</template>

<script>
export default {
  data () {
    return {
      query: '',
      error: false,
      kencity: '',
      kencountry: '',
      kenweatherDescription: '',
      kentemp: null,
      _tempMin: null,
      _tempMax: null,
      _humidity: null,
    };
  },
  methods: {
    exit() {
      this.$exit();
    },
    showMyWeather() {
      axios.get(
      	`/weather?q=${this.query}&units=metric&&appid=${_apiKey}`,
      ).then(response => {
        this.kencity = response.data.name;
        this.kencountry = response.data.sys.country;
        this.kenweatherDescription = response.data.weather[0].description;
        this.kentemp = response.data.main.temp;
        this._tempMin = response.data.main.temp_min;
        this._tempMax = response.data.main.temp_max;
        this._humidity = response.data.main.humidity;
        this.error = false;
      }).catch(() => {
        this.error = true;
        this.kencity = '';
      });
    },
  }
}
</script>
