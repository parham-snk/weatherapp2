describe("test api", () => {
    it("get city info", () => {
        let api = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,weather_code,relative_humidity_2m,wind_speed_10m,precipitation&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation_probability,weather_code,rain,snowfall&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto${windSpeedKM ? "" : "&wind_speed_unit=mph"}${fahrenheit ? "&temperature_unit=fahrenheit" : ""}`
        
    })
})