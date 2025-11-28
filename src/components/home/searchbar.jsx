import { useState } from "react"
import searchIcon from "../../assets/icon-search.svg"
const Searchbar = props => {
    const [list, setlist] = useState(false)
    return (
        <div className="flex flex-col justify-center items-center w-full md:w-1/2">
            <h1 className="first-letter:uppercase text-6xl h-auto text-wrap w-3/4 text-center  md:text-4xl">how's the sky looking today?</h1>
            <div className="flex flex-col md:flex-row justify-center align-middle w-full my-16">
                <div className="relative flex flex-row justify-start align-middle bg-primary rounded-xl w-full">
                    <label htmlFor="search" className="flex justify-center align-middle cursor-pointer">
                        <img className="mx-4 w-5" src={searchIcon} alt="" />
                    </label>
                    <input id="search" type="text" onBlur={() => {
                        setlist(false)
                    }} onKeyPress={() => {
                        setlist(true)
                    }} className="bg-transparent pr-2 py-3 w-full  px-2  " placeholder="seearch for a place ..." />

                    {
                        list &&
                        <div style={{zIndex:97}} className="absolute w-full h-fit bg-primary rounded-md mt-14 p-3  max-h-60 overflow-y-scroll">
                            <div className="cursor-pointer my-1 text-start w-full p-3 hover:bg-gray-600 hover:shadow-md rounded transition-all">
                                <p>City Name</p>
                            </div>
                            <div className="cursor-pointer my-1 text-start w-full p-3 hover:bg-gray-600 hover:shadow-md rounded transition-all">
                                <p>City Name</p>
                            </div>
                            <div className="cursor-pointer my-1 text-start w-full p-3 hover:bg-gray-600 hover:shadow-md rounded transition-all">
                                <p>City Name</p>
                            </div>
                            <div className="cursor-pointer my-1 text-start w-full p-3 hover:bg-gray-600 hover:shadow-md rounded transition-all">
                                <p>City Name</p>
                            </div>
                            <div className="cursor-pointer my-1 text-start w-full p-3 hover:bg-gray-600 hover:shadow-md rounded transition-all">
                                <p>City Name</p>
                            </div>
                        </div>
                    }
                </div>
                <button className="bg-indigo-700 rounded text-white px-4 py-3 md:mx-2 my-4 md:my-0">search</button>
            </div>
        </div>
    )
}

export default Searchbar