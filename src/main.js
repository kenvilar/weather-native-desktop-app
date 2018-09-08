import Vue from 'vuido'
import axios from 'axios'

axios.defaults.baseURL = 'http://api.openweathermap.org/data/2.5';
const _apiKey = process.env.OPENWEATHERMAP_API_KEY;

import MainWindow from './MainWindow'

const window = new Vue( {
  render: h => h( MainWindow )
} );

window.$start();
