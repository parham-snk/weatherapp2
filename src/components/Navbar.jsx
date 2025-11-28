import { NavLink } from "react-router"
import logo from "../assets/logo.svg"
import TempType from "./setTempType"
const Navbar = props => {
    return (
        <nav style={{zIndex:99}} className="md:fixed relative max-w-custome my-10 md:t-20  h-30 top-0  w-full md:bg-black md:backdrop-blur md:bg-opacity-10 md:rounded">
            <ul className="flex flex-row w-full  justify-between my-3 px-4">
                <NavLink to={"/w"}>
                    <img src={logo} />
                </NavLink>
                <TempType/>
            </ul>
        </nav>
    )
}
export default Navbar