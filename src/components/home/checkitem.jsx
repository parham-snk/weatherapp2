import { useEffect, useRef, useState } from "react"

const CheckItem = props => {
    const { name, value, desc } = props
    const check = props.checked



    return <div onClick={() => {
        props.chengeTemp()
    }} className="w-full h-auto flex flex-row justify-between align-middle items-center px-3  py-2  hover:bg-hover my-1 cursor-pointer   rounded">
        <div className="check-temp">
            <p>{desc}</p>
        </div>
        <div className="flex justify-center align-middle items-center">
            {
                check &&
                <img src="/weatherapp2/assets/icon-checkmark.svg" alt="" />
            }
        </div>
    </div>
}

export default CheckItem