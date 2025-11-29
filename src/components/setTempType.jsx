import { IoIosArrowDown } from "react-icons/io";
import gear from "../assets/gear.svg"
import dropdownIcon from "../assets/icon-dropdown.svg"
import checkmark from "../assets/icon-checkmark.svg"
import CheckItem from "./home/checkitem";
import checkIcon from "../assets/icon-checkmark.svg"
import { useContext, useEffect, useState } from "react";
import { UnitContext } from "../context/context";
const TempType = props => {
    const { fahrenheit, setFahrenheit, windSpeedKM, setWindSpeedKM } = useContext(UnitContext)
    const [fahren, setFahren] = useState(fahrenheit)
    const [kmspeed, setkmspeed] = useState(windSpeedKM)
    const [showOPtions, setShowOptions] = useState(false)
    return (
        <div className="relative w-30 h-auto px-2 py-1  text-white bg-gray-600 bg-opacity-50 backdrop-blur-sm rounded flex flex-row justify-around align-middle items-center user-select-none ">
            <div onClick={() => {
                setShowOptions(!showOPtions)
            }} className="flex flex-row cursor-pointer ">
                <img width={15} src={gear} />
                <p className="mx-5">units</p>
                <img width={15} src={dropdownIcon} alt="" />
            </div>
            {
                showOPtions &&
                <div className="absolute w-200 min-h-200  top-0 mt-14 right-0 bg-primary  backdrop-blur-xl rounded-md p-3 shadow-sm shadow-black">
                    <h1 className="text-sm">Switch to Imperial</h1>
                    <p className="text-sm text-gray-400 mt-3">Temperature</p>
                    <CheckItem checked={fahren === false} value="cel" name="temp" desc="Celcuis( °C )" chengeTemp={() => {
                        setFahren(false)
                        setFahrenheit(false)
                    }} />
                    <CheckItem checked={fahren === true} value="fa" name="temp" desc="Fahrenheit( °F )" chengeTemp={() => {
                        setFahren(true)
                        setFahrenheit(true)
                    }} />
                    <p className="text-sm text-gray-400 mt-3">Wind Speed</p>
                    <CheckItem checked={kmspeed === true} value="km/h" name="wind" desc="km/h" chengeTemp={() => {
                        setkmspeed(true)
                        setWindSpeedKM(true)
                    }} />
                    <CheckItem checked={kmspeed === false} value="mph" name="wind" desc="mph" chengeTemp={() => {
                        setkmspeed(false)
                        setWindSpeedKM(false)
                    }} />
                </div>
            }
        </div>
    )
}

export default TempType