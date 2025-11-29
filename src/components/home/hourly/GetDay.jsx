import { useEffect, useState } from "react"
import Day from "./day"
import HourlyItem from "./hourlyItem"
const GetDay = props => {



    const days = props.data.map((item, index) => {
        console.log(item)
        return <Day day={item} key={index} setday={() => {
            props.setday(item, index)
        }} />
    })

    return (
        <div className="absolute w-250 h-auto rounded right-0 flex flex-col bg-primary p-3 shadow-sm border-2 border-hover mt-4 shadow-black">
            {days}
        </div>
    )
}

export default GetDay