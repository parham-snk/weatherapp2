import { useState } from "react"
import HourlyItem from "./hourlyItem"
import dropDownIcon from "../../../assets/icon-dropdown.svg"
import Day from "./day"
const HourlyForcast = props => {
    const [day, setDay] = useState()
    const [showDayList, setShowDayList] = useState(false)
    return (
        <div style={{ zIndex: 97 }} className="
                flex flex-col justify-start items-start
                w-1/4 min-h-1/2  h-screen bg-primary rounded-xl shadow 
                p-3
                "
        >
            <div className="flex flex-row justify-between align-middle p-2 w-full">
                <p className="text-xl">Hourly forecast</p>
                <div onClick={() => {
                    setShowDayList(!showDayList)
                }} className="relative w-auto h-auto bg-gray-700 p-2 rounded-md bg-opacity-60">
                    <div className="flex flex-row justify-center align-middle items-center cursor-pointer">
                        <p clas>Tuesday</p>
                        <img className="mx-2" src={dropDownIcon} alt="" />
                    </div>
                    {
                        showDayList &&
                        <div className="absolute w-250 h-auto rounded right-0 flex flex-col bg-primary p-3 shadow-xl border-2 border-hover mt-4">
                            <Day day="Saturday" />
                            <Day day="Sunday" />
                            <Day day="Monday" />
                            <Day day="Tuesday" />
                            <Day day="Wendsday" />
                        </div>
                    }
                </div>
            </div>
            <div className="flex flex-col justify-start items-start w-full  overflow-hidden overflow-y-scroll px-2 py-3">
                <HourlyItem w="cloud" h="3" temp="68" />
            </div>
        </div>
    )
}

export default HourlyForcast