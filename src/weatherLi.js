import axios from 'axios';
import React, { Component } from 'react';

export default class WeatherList extends Component {
  getWeatherData = async () => {
    let url =
      'http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=e96e3b3491ba2ee67e95a62491ddd305&units=metric';
    let logo = '';


    try {
      await axios.get(url).then((res) => {
        document.getElementById('currentWeather').innerText = `City : ${res.data.name} \n Temperature : ${res.data.main.temp}°C \nToday's Temp : ${res.data.main.temp_min}~${res.data.main.temp_max}\n  Humidity : ${res.data.main.humidity}`;
        logo = `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`;
      });
    }

    catch (err) {
      console.error(err);
    }

    try {

      await axios.get(logo).then((res) => {
        document.getElementById('logo').src = logo;
      });
    } 
    catch (err) {
      console.error(err);
    }
  };

  render() {

    return (
      <div class="card bg-dark text-white">
        <img src="./img.jpg" class="card-img" alt="weather background"></img>
        <div class="card-img-overlay">
          <h1 class="card-title">Sania Juddha 101280650</h1>
          <p></p>
          <h5 class="card-text"> Lab Test 2- Weather Application</h5>
          <p class="lead">Weather Today {"\n"}{"\n"}{"\n"}</p>
          <img id="logo" width="150" height="150" src="" alt=""></img>
          <p id="currentWeather"></p>
          <button
            type="button" class="btn btn-secondary" onClick={this.getWeatherData}>
            Check Weather
          </button>
        </div>
      </div>

    );
  }
}
