import { useContext, useEffect, useState } from "react"

import CityItem from "./cityItem"
import { UnitContext } from "../../context/context"
const Searchbar = props => {
    const { fahrenheit, setFahrenheit, windSpeedKM, setWindSpeedKM } = useContext(UnitContext)
    const [showlist, setshowlist] = useState(false)
    const [cities, setcities] = useState([])
    //coordinates : {latitude,longitude}
    const [coordinates, setCoordinates] = useState()
    const [city, setCity] = useState(false)
    const [citiesElements, setcitiesElements] = useState()
    const [input, setinput] = useState()


    const setDefaultCity = () => {
        if (window.confirm(`set ${city.city} as default location?`)) {
            localStorage.setItem("default-location", JSON.stringify({ city: city.city, country: city.country, lalitude: city.lalitude, longitude: city.longitude }))
        }
    }
    //this function uesd in searchCity function!
    const getCityName = async (latitude, longitude) => {
        let x = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`).then(data => data.json())
        console.log(x)
        const { city, countryName } = x
        const [country] = [countryName.split(" ")[0]]

        return { city, country }
    }
    const searchCity = async (city) => {
        if (coordinates) {
            const { latitude, longitude } = coordinates
            let api;
            api = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,weather_code,relative_humidity_2m,wind_speed_10m,precipitation&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation_probability,weather_code,rain,snowfall&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto${windSpeedKM ? "" : "&wind_speed_unit=mph"}${fahrenheit ? "&temperature_unit=fahrenheit" : ""}`
            fetch(api)
                .then(data => data.json()).then(async data => {

                    getCityName(latitude, longitude).then(async ({ city, country }) => {

                        setCity({ ...data, city, country })

                        props.setinfo({ ...data, city, country })
                    })

                })
                .catch(() => {

                })
        }
    }
    async function searchCities() {
        setshowlist(true)

        fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=10&language=en&format=json`).then(data => data.json()).then(data => {
            if (data.results instanceof Array) {
                setcities(data.results)

            } else {
                setcities([])
            }

        }).catch(() => {
            setcities([])
        })
    }
    //auto-detect-locaion
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                const { latitude, longitude } = pos.coords
                setCoordinates({ latitude, longitude })
            }, err => {

            })
    }, [])
    //regresh cities list for search and select
    useEffect(() => {
        if (cities.length > 0) {

            let cts = cities.map((item, index) => {
                let name = item.name
                return <CityItem city={name} key={index} country={item.country} setcity={() => {
                    setcities([])
                    setshowlist(false)
                    setCoordinates({ latitude: item.latitude, longitude: item.longitude })
                    setinput(name)
                    // props.setcity(item)

                }} />
            })
            setcitiesElements(cts)
        }
    }, [cities])
    //refresh detail with any unit change!
    useEffect(() => {
        if (city) {
            searchCity(city)
        }
    }, [fahrenheit, windSpeedKM])

    useEffect(() => {
        if (coordinates) {
            searchCity()
        }
    }, [coordinates])
    return (
        <div className="flex flex-col justify-center items-center w-full md:w-1/2">
            <h1 className="first-letter:uppercase text-6xl h-auto text-wrap w-3/4 text-center  md:text-4xl">how's the sky looking today?</h1>
            <div className="flex flex-col md:flex-row justify-center align-middle w-full my-16">
                <div className="relative flex flex-row justify-start align-middle bg-primary rounded-xl w-full">
                    <label htmlFor="search" className="flex justify-center align-middle cursor-pointer">
                        <img className="mx-4 w-5" src="/assets/icon-search.svg" alt="" />
                    </label>
                    <input id="search" value={input} type="text" onBlur={() => {
                        // setshowlist(false)
                    }} onChange={(e) => {
                        setinput(e.target.value)
                        if (e.target.value.length > 1) {
                            searchCities()
                        } else {
                            setcities([])
                        }
                    }} className="bg-transparent pr-2 py-3 w-full  px-2  " placeholder="seearch for a place ..." />

                    {
                        showlist && cities &&
                        <div style={{ zIndex: 97 }} className="absolute w-full h-fit bg-primary rounded-md mt-14 p-3  max-h-60 overflow-y-scroll">

                            {
                                citiesElements
                            }
                        </div>
                    }
                </div>
                <button className="bg-indigo-700 rounded text-white px-4 py-3 md:mx-2 my-4 md:my-0" onClick={(e) => {


                    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${e.target.value}&count=10&language=en&format=json`).then(data => data.json()).then(data => {
                        if (data.results instanceof Array) {
                            setcities(data.results)

                        } else {
                            setcities([])
                        }

                    }).catch(() => {
                        setcities([])
                    })

                }}>search</button>
            </div>
        </div>
    )
}

export default Searchbar