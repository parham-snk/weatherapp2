import { useContext, createContext, useState, useEffect } from "react";


const UnitContext = createContext()

const ContextProvider = props => {
    const [fahrenheit, setFahrenheit] = useState(false);
    const [windSpeedKM, setWindSpeedKM] = useState(true)
    useEffect(()=>{
        console.log(fahrenheit,windSpeedKM)
    },[fahrenheit,windSpeedKM])
    return (
        <UnitContext.Provider value={{ fahrenheit, setFahrenheit, windSpeedKM, setWindSpeedKM }}>
            {props.children}
        </UnitContext.Provider>
    )
}

export { UnitContext, ContextProvider }