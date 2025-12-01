import { NavLink } from "react-router"

import TempType from "./setTempType"
import { useContext } from "react"
import { UnitContext } from "../context/context"
const Navbar = props => {
    const { GPS, setGPS } = useContext(UnitContext)
    return (
        <nav style={{ zIndex: 99 }} className="md:fixed relative max-w-custome my-10 md:t-20  h-30 top-0  w-full md:bg-black md:backdrop-blur md:bg-opacity-10 md:rounded">
            <ul className="flex flex-row w-full  justify-between my-3 px-4">
                <NavLink to={"/w"}>
                    <img src="/assets/logo.svg" />
                </NavLink>
                <div className="flex flex-row justify-center items-center text-center text-white bg-primary rounded px-2 bg-opacity-60">
                    <div className={`md:mx-2 rounded py-1 px-2 cursor-pointer text-md ${GPS ? "text-white bg-white bg-opacity-40" : "text-white scale-75"}`} onClick={() => {
                        setGPS(true)
                    }}>
                        <p>GPS</p>
                    </div>
                    <div className={`md:mx-2 rounded py-1 px-2 cursor-pointer text-md ${!GPS ? "text-white bg-white bg-opacity-40" : "text-white scale-75"}`} onClick={() => {
                        setGPS(false)
                    }}>
                        <p>favoriet</p>
                    </div>
                </div>
                <TempType />
            </ul>
        </nav>
    )
}
export default Navbar