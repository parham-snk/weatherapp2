function checkweather_code(weather_code) {
    if (weather_code == 61 || weather_code == 63 || weather_code == 65) {
        return "/assets/icon-rain.webp"
    }
    else if (weather_code == 51 || weather_code == 53 || weather_code == 55) {
        return "/assets/icon-drizzle.webp"
    } else if (weather_code == 45 || weather_code == 48) {
        return "/assets/icon-fog.webp"
    } else if (weather_code == 3) {
        return "/assets/icon-overcast.webp"
    } else if (weather_code == 1 || weather_code == 2) {
        return "/assets/icon-partly-cloudy.webp"
    } else if (weather_code == 71 || weather_code == 73 || weather_code == 75 || weather_code == 77) {
        return "/assets/icon-sunny.webp"
    } else if (weather_code == 25 || weather_code == 26 || weather_code == 29) {
        return "/assets/icon-storm.webp"
    } else if (weather_code == 0) {
        return "/assets/icon-sunny.webp"
    }
}

export default checkweather_code