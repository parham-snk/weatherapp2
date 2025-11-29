

import HourlyForcast from "../components/home/hourly/hourrly"
import Searchbar from "../components/home/searchbar"
import { useContext, useEffect, useState } from "react"
import { UnitContext } from "../context/context"
import Daily from "../components/home/daily/daily"
import checkweather_code from "../components/checkWeather"

const HomePage = props => {

    const { fahrenheit, setFahrenheit, windSpeedKM, setWindSpeedKM } = useContext(UnitContext)


    const [info, setInfo] = useState()
    const [city, setcity] = useState(false)


    const [current, setCurrent] = useState()
    const [daily, setDaily] = useState()
    const [hourly, setHourly] = useState()

    useEffect(() => {
        if (info) {
            setHourly(false)
            setCurrent(info.current)
            setDaily(info.daily)
            setHourly(info.hourly)
        } else {

        }
        console.log(daily)
    }, [info])




    const date = new Date();

    const options = {
        weekday: 'long',  // Tuesday
        year: 'numeric',  // 2025
        month: 'short',   // Aug
        day: 'numeric'    // 5
    };

    const formatted = date.toLocaleDateString('en-US', options);

    return (
        <div className="text-white w-full h-full px-2 md:px-4 z-0 flex flex-col justify-center items-center " >
            <Searchbar
                changeTempUnit={(value) => {
                    setFahrenheit(value)
                }}
                changeWindUnit={value => {
                    setWindSpeedKM(value)
                }}
                setcity={value => {
                    setcity(value)
                }}

                setinfo={value => {
                    setInfo(value)
                }}
            />
            {
                info &&
                <div className="flex flex-col xl:flex-row justify-center align-middle w-full h-full md:px-10 fade">
                    <div className="flex flex-col justify-center items-center align-middle w-full xl:w-3/4 h-full md:px-4">

                        <div className="flex flex-col xl:flex-row justify-center align-middle items-center w-full h-full">
                            <div className="flex flex-col w-full h-full">
                                <div className="relative w-full">
                                    <img src="/assets/bg-today-small.svg" className="block md:hidden w-full" alt="" />
                                    <img src="/assets/bg-today-large.svg" className="hidden md:block w-full" alt="" />
                                    <div className="absolute w-full h-full flex flex-col justify-center items-center md:flex-row md:justify-between md:align-middle top-0 left-0">
                                        <div className="flex flex-col justify-center itemce md:items-start md:pl-10 md:w-2/4 pt-10 md:pt-0">
                                            <p className="text-shadow-md text-2xl md:text-4xl font-bold text-nowrap">{city && `${city.name}, ${city.country}`}</p>
                                            <p className="text-shadow-md text-xl py-5 font-light">{formatted}</p>
                                            {/* <p className="text-shadow-md text-xl py-5 font-light">Tuesday, Aug 5,2025</p> */}
                                        </div>
                                        <div className="w-1/2 h-full flex flex-row justify-center align-middle items-center">
                                            <img style={{ width: "120px" }} src={checkweather_code(current?.weather_code)} alt="" />
                                            <p className="text-45 sm:text-90 py-2 pl-10 text-shadow-md">{current?.temperature_2m}<sup>°</sup>{fahrenheit ? "F" : "C"}</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-wrap md:flex-nowrap  justify-center  md:justify-center items-center align-middle   w-full h-fit py-10 ">
                                    <div className="rounded-2xl shdaow shadow-black shadow-sm bg-primary
                        text-white flex flex-col justify-center  items-start px-4 w-1/2 md:w-1/4 h-36 md:mx-4 scale-95 md:scale-100
                        
                        " >
                                        <p className="drop-shadow-sm">Feals Like</p>
                                        <p className="text-3xl py-2">{current && current.apparent_temperature}<sup>°</sup>{fahrenheit ? "F" : "C"}</p>
                                    </div>
                                    <div className="rounded-2xl shdaow shadow-black shadow-sm bg-primary
                        text-white flex flex-col justify-center  items-start px-4 w-1/2 md:w-1/4 h-36  md:mx-4 scale-95 md:scale-100
                        
                        " >
                                        <p className="drop-shadow-sm">Humidity</p>
                                        <p className="text-3xl py-2">{current && current.relative_humidity_2m} %</p>
                                    </div>
                                    <div className="rounded-2xl shdaow shadow-black shadow-sm bg-primary
                        text-white flex flex-col justify-center  items-start px-4 w-1/2 md:w-1/4 h-36  md:mx-4 scale-95 md:scale-100
                        
                        " >
                                        <p className="drop-shadow-sm">Wind</p>
                                        <p className="text-3xl py-2">{current && current.wind_speed_10m} {windSpeedKM ? "km" : "mph"}</p>
                                    </div>
                                    <div className="rounded-2xl shdaow shadow-black shadow-sm bg-primary
                        text-white flex flex-col justify-center  items-start px-4 w-1/2 md:w-1/4 h-36  md:mx-4 scale-95 md:scale-100
                        
                        " >
                                        <p className="drop-shadow-sm">Precipitation</p>
                                        <p className="text-3xl py-2">{current && current.precipitation} in</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col justify-start items-start w-full h-full">
                            <div className="w-full h-auto text-start text-2xl ">
                                Daily forecast
                            </div>
                            <Daily data={info.daily} />
                        </div>
                    </div>


                    {
                        hourly &&

                        <HourlyForcast data={hourly} />
                    }

                </div>
            }


        </div >
    )
}
export default HomePage