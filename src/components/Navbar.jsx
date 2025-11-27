import { NavLink } from "react-router"
import logo from "../assets/logo.svg"
import TempType from "./setTempType"
const Navbar = props => {
    return (
        <nav style={{zIndex:99}} className="fixed max-w-custome my-10 t-20  h-30  w-full bg-black backdrop-blur bg-opacity-10 rounded">
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