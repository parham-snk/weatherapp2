import { useEffect, useState } from "react"
import HourlyItem from "./hourlyItem"

import Day from "./day"
import GetDay from "./GetDay"
const HourlyForcast = props => {
    const [info, setinfo] = useState(props.data || [])
    const [day, setDay] = useState()
    const [showDayList, setShowDayList] = useState(false)
    const [wdays, setWdays] = useState()
    const [houres, setHoures] = useState()
    const [counter, setCounter] = useState(0)


    function getWeek() {
        let w = []
        let [y, m, d] = props.data.time[0].split("T")[0].split("-").map(Number)

        let date = new Date(y, m - 1, d)

        for (let i = 0; i < 7; i++) {
            w.push(date.getDay())
            date.setDate(date.getDate() + 1)
        }

        w = w.map(d => {
            switch (d) {
                case 6:
                    return "satureday"
                case 0:
                    return "sunday"
                case 1:
                    return "monday"
                case 2:
                    return "tuesday"
                case 3:
                    return "wendsday"
                case 4:
                    return "thursday"
                case 5:
                    return "friday"
            }
        })
        if (!day) {
            setDay(w[0])
        }
        setWdays(w)
    }

    useEffect(() => {
        console.log(counter)
        getWeek()
        let items = props.data.temperature_2m.slice(((counter * 23) + 1), (((counter + 1) * 23) + 1)).map((item, index) => <HourlyItem w={props.data.weather_code[((counter * 23) + index)]} h={index + 1} temp={item} key={index} />)
        setHoures(items)
    }, [props.data])
    useEffect(() => {
        getWeek()
        console.log(counter)
        let items = props.data.temperature_2m.slice(((counter * 23) + 1), (((counter + 1) * 23) + 1)).map((item, index) => <HourlyItem w={props.data.weather_code[(counter * 23) + index]} h={index + 1} temp={item} key={index} />)
        setHoures(items)
    }, [counter])


    return (
        <div style={{ zIndex: 97 }} className="
                flex flex-col justify-start items-start
                w-full scale-95 md:scale-100 xl:w-1/4 min-h-1/2  h-screen bg-primary rounded-xl shadow 
                p-3
                "
        >
            <div className="flex flex-row justify-between align-middle p-2 w-full">
                <p className="text-xl">Hourly forecast</p>
                <div onClick={() => {
                    setShowDayList(!showDayList)
                }} className="relative w-auto h-auto bg-gray-700 p-2 rounded-md bg-opacity-60">
                    <div className="flex flex-row justify-center align-middle items-center cursor-pointer">
                        <p clas>{day}</p>
                        <img className="mx-2" src="/assets/icon-dropdown.svg" alt="" />
                    </div>
                    {
                        showDayList &&

                        <GetDay data={wdays} setday={(val, c) => {
                            setDay(val)
                            setCounter(c)
                        }} />
                    }
                </div>
            </div>
            <div className="flex flex-col justify-start items-start w-full  overflow-hidden overflow-y-scroll px-2 py-3">
                {
                    houres &&
                    houres
                }
            </div>
        </div>
    )
}

export default HourlyForcast