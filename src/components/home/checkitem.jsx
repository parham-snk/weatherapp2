import { useEffect, useRef, useState } from "react"
import checkIcon from "../../assets/icon-checkmark.svg"
const CheckItem = props => {
    const { name, value, desc } = props
    const check = props.checked



    return <div onClick={() => {
        props.chengeTemp()
    }} className="w-full h-auto flex flex-row justify-between align-middle items-center px-3  py-2  hover:bg-hover my-1   rounded">
        <div className="check-temp">
            <p>{desc}</p>
        </div>
        <div className="flex justify-center align-middle items-center">
            {
                check &&
                <img src={checkIcon} alt="" />
            }
        </div>
    </div>
}

export default CheckItem