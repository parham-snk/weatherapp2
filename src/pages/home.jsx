

import HourlyForcast from "../components/home/hourly/hourrly"
import Searchbar from "../components/home/searchbar"
import { useContext, useEffect, useState } from "react"
import { UnitContext } from "../context/context"
import Daily from "../components/home/daily/daily"
import checkweather_code from "../components/checkWeather"
import { useLocation, useNavigate } from "react-router"
import Loading from "../components/loading"
import Suncycle from "../components/home/sunrise&sunset"

const HomePage = props => {

    const { fahrenheit, setFahrenheit, windSpeedKM, setWindSpeedKM, loading } = useContext(UnitContext)


    const [info, setInfo] = useState()



    const [current, setCurrent] = useState()
    const [daily, setDaily] = useState()
    const [hourly, setHourly] = useState()

    useEffect(() => {
        if (info) {
            setHourly(false)
            let [sunrise, sunset] = [info.daily.sunrise[0], info.daily.sunset[0]]
            setCurrent({ ...info.current, sunrise, sunset });
            setDaily(info.daily)
            setHourly(info.hourly)



            window.scrollTo(0, 230)

        } else {

        }


    }, [info])

    useEffect(() => {
        console.log(current)
    }, [current])


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
                setinfo={value => {
                    setInfo(value)

                }}
            />
            {
                info && !loading &&
                <div className="flex flex-col xl:flex-row justify-center align-middle w-full h-full md:px-10 fade">
                    <div className="flex flex-col justify-center items-center align-middle w-full xl:w-3/4 h-full md:px-4">

                        <div className="flex flex-col xl:flex-row justify-center align-middle items-center w-full h-full" id="d">
                            <div className="flex flex-col w-full h-full">
                                <div className="relative w-full">
                                    <img src="/weatherapp2/assets/bg-today-small.svg" className="block md:hidden w-full" alt="" />
                                    <img src="/weatherapp2/assets/bg-today-large.svg" className="hidden md:block w-full" alt="" />
                                    <div className="absolute w-full h-full flex flex-col justify-center items-center md:flex-row md:justify-between md:align-middle top-0 left-0">
                                        <div className="flex flex-col justify-center itemce md:items-start md:pl-10 md:w-2/4 pt-10 md:pt-0">
                                            <p className="text-shadow-md text-2xl md:text-4xl font-bold text-nowrap">{info && `${info.city}, ${info.country}`}</p>
                                            <p className="text-shadow-md text-xl py-5 font-light">{formatted}</p>
                                            {/* <p className="text-shadow-md text-xl py-5 font-light">Tuesday, Aug 5,2025</p> */}
                                        </div>
                                        <div className="w-1/2 h-full flex flex-row justify-center align-middle items-center">
                                            <img style={{ width: "120px" }} src={checkweather_code(current?.weather_code)} alt="" />
                                            <p className="text-30 sm:text-90 py-2 pl-10 text-shadow-md">{current?.temperature_2m}<sup>°</sup>{fahrenheit ? "F" : "C"}</p>

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
                        {/* <Suncycle sunrise={current?.sunrise} sunset={current?.sunset}/> */}
                    </div>


                    {
                        hourly &&

                        <HourlyForcast data={hourly} />
                    }

                </div>
            }
            {
                loading &&
                <Loading />
            }


        </div >
    )
}
export default HomePage