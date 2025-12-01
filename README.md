# APIs

## get-cities
https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=10&language=en&format=json

## get-city
https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,weather_code,relative_humidity_2m,wind_speed_10m,precipitation&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation_probability,weather_code,rain,snowfall&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto${windSpeedKM ? "" : "&wind_speed_unit=mph"}${fahrenheit ? "&temperature_unit=fahrenheit" : ""}`

#  weathercodes 
| Code | Weather                         |
| ---- | ------------------------------- |
| 0    | Clear / Sunny ☀️                 |
| 1    | Mainly clear 🌤                  |
| 2    | Partly cloudy ⛅                 |
| 3    | Overcast ☁️                      |
| 45   | Fog 🌫                           |
| 48   | Depositing rime fog ❄️           |
| 51   | Drizzle: Light 🌦                |
| 53   | Drizzle: Moderate 🌦             |
| 55   | Drizzle: Dense 🌦                |
| 61   | Rain: Slight 🌧                  |
| 63   | Rain: Moderate 🌧                |
| 65   | Rain: Heavy 🌧                   |
| 66   | Freezing Rain: Light ❄️🌧         |
| 67   | Freezing Rain: Heavy ❄️🌧         |
| 71   | Snow fall: Slight ❄️             |
| 73   | Snow fall: Moderate ❄️           |
| 75   | Snow fall: Heavy ❄️              |
| 77   | Snow grains ❄️                   |
| 80   | Rain showers: Slight 🌧          |
| 81   | Rain showers: Moderate 🌧        |
| 82   | Rain showers: Violent ⛈         |
| 85   | Snow showers: Slight ❄️          |
| 86   | Snow showers: Heavy ❄️           |
| 95   | Thunderstorm: Slight ⚡          |
| 96   | Thunderstorm with slight hail ⚡ |
| 99   | Thunderstorm with heavy hail ⚡  |
