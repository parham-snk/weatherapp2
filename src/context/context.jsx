import { useContext, createContext, useState, useEffect } from "react";


const UnitContext = createContext()

const ContextProvider = props => {
    const [fahrenheit, setFahrenheit] = useState(false);
    const [windSpeedKM, setWindSpeedKM] = useState(true);
    const [GPS, setGPS] = useState()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const defLocationType = localStorage.getItem("gps")
        if (defLocationType == "true") {
            setGPS(true)
        } else {
            setGPS(false)
        }

    }, [])
    useEffect(() => {
        if (GPS) {
            localStorage.setItem("gps", true)
        } else {
            localStorage.setItem("gps", false)

        }
    }, [GPS])

    return (
        <UnitContext.Provider value={{ fahrenheit, setFahrenheit, windSpeedKM, setWindSpeedKM, GPS, setGPS, loading, setLoading }}>
            {props.children}
        </UnitContext.Provider>
    )
}

export { UnitContext, ContextProvider }