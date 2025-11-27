import { IoIosArrowDown } from "react-icons/io";
import gear from "../assets/gear.svg"
import dropdownIcon from "../assets/icon-dropdown.svg"
import checkmark from "../assets/icon-checkmark.svg"
import CheckItem from "./home/checkitem";
import checkIcon from "../assets/icon-checkmark.svg"
import { useEffect, useState } from "react";
const TempType = props => {
    const [tempType, setTempType] = useState("cel")
    const [windType, setWindType] = useState("km/h")
    const [showOPtions, setShowOptions] = useState(false)
    return (
        <div className="relative w-30 h-auto px-2 py-1  text-white bg-gray-600 bg-opacity-50 backdrop-blur-sm rounded flex flex-row justify-around align-middle items-center user-select-none cursor-pointer">
            <div onClick={() => {
                setShowOptions(!showOPtions)
            }} className="flex flex-row ">
                <img width={15} src={gear} />
                <p className="mx-5">units</p>
                <img width={15} src={dropdownIcon} alt="" />
            </div>
            {
                showOPtions &&
                <div className="absolute w-200 min-h-200  top-0 mt-14 right-0 bg-primary  backdrop-blur-xl rounded-md p-3 shadow-sm shadow-black">
                    <h1 className="text-sm">Switch to Imperial</h1>
                    <p className="text-sm text-gray-400 mt-3">Temperature</p>
                    <CheckItem checked={tempType === "cel"} value="fa" name="temp" desc="Fahrenheit( °F )" chengeTemp={() => {
                        setTempType("cel")
                    }} />
                    <CheckItem checked={tempType === "fa"} value="cel" name="temp" desc="Celcuis( °F )" chengeTemp={() => {
                        setTempType("fa")
                    }} />
                    <p className="text-sm text-gray-400 mt-3">Wind Speed</p>
                    <CheckItem checked={windType === "km/h"} value="km/h" name="wind" desc="km/h" chengeTemp={() => {
                        setWindType("km/h")
                    }} />
                    <CheckItem checked={windType === "mph"} value="mph" name="wind" desc="mph" chengeTemp={() => {
                        setWindType("mph")
                    }} />
                </div>
            }
        </div>
    )
}

export default TempType