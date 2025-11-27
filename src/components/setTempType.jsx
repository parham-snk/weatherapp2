import { IoIosArrowDown } from "react-icons/io";
import gear from "../assets/gear.svg"
import dropdownIcon from "../assets/icon-dropdown.svg"
const TempType = props => {
    return (
        <div className="relative w-30 h-auto px-2 py-1  text-white bg-gray-600 bg-opacity-50 backdrop-blur-sm rounded flex flex-row justify-around align-middle items-center user-select-none cursor-pointer">
            <img width={15} src={gear} />
            <p className="mx-5">units</p>
            <img width={15} src={dropdownIcon} alt="" />
            <div className="absolute w-100 min-h-70 mt-20 bg-white bg-opacity-40 backdrop-blur-sm">
                {/* <h1>parham</h1> */}
            </div>
        </div>
    )
}

export default TempType