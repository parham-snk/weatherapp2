import checkweather from "../../checkWeather"

const DailyItem = props => {
    let { day, temperature_2m_max, temperature_2m_min, weather_code } = props.data
    let d = new Date(day)
    function getDay() {
        switch (d.getDay()) {
            case 6:
                return day = "satureday"
            case 0:
                return day = "sunday"
            case 1:
                return day = "monday"
            case 2:
                return day = "tuesday"
            case 3:
                return day = "wendsday"
            case 4:
                return day = "thursday"
            case 5:
                return day = "friday"
        }
    }
    getDay()






    return <div className="rounded-2xl shdaow shadow-black shadow-sm bg-primary
                        text-white flex flex-col justify-around  items-center px-4 w-1/3 md:w-1/7 h-64 md:mx-0.5 scale-95 md:scale-100
                        text-center
                        " >

        <p>{day}</p>
        <img width={120} src={checkweather(weather_code)} alt="" />
        <div className="flex flex-row scale-95 md:scale-100 justify-between align-middle text-2xl w-full">
            <p className="text-gray-50 text-opacity-80">{temperature_2m_min} <sup>°</sup></p>
            <p>{temperature_2m_max} <sup>°</sup></p>
        </div>
    </div>
}


export default DailyItem