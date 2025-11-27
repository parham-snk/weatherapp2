import bgImage from "../assets/bg-today-large.svg"
import cloudeIcone from "../assets/icon-rain.webp"
import searchIcon from "../assets/icon-search.svg"

const HomePage = props => {
    return (
        <div className="text-white w-full h-full px-4 z-0 flex flex-col justify-center items-center" >
            <div className="flex flex-col justify-center items-center w-1/2">
                <h1 className="uppercase text-2xl md:text-4xl">how's the sky looking today?</h1>
                <div className="flex flex-row justify-center align-middle w-full my-16">
                    <div className="flex flex-row justify-start align-middle bg-gray-700 bg-opacity-60 rounded w-full">
                        <label htmlFor="search" className="flex justify-center align-middle cursor-pointer">
                            <img className="mx-4 w-5" src={searchIcon} alt="" />
                        </label>
                        <input id="search" type="text" className="bg-transparent pr-2 py-2 w-full px-2 search" placeholder="seearch for a place ..." />
                    </div>
                    <button className="bg-blue-600 rounded text-white px-4 py-1 mx-2">search</button>
                </div>
            </div>
            <div className="flex flex-row justify-center align-middle w-full h-full">
                <div className="flex flex-col justify-center items-center align-middle w-3/4 h-full px-4">

                    <div className="flex flex-row justify-center align-middle items-center w-full h-full">
                        <div className="flex flex-col w-full h-full">
                            <div className="relative ">
                                <img src={bgImage} className="w-full" alt="" />
                                <div className="absolute w-full h-full flex flex-row justify-between align-middle top-0 left-0">
                                    <div className="flex flex-col justify-center items-start pl-10 w-2/4">
                                        <p className="text-shadow-md text-4xl font-bold text-nowrap">Berlin, Germany</p>
                                        <p className="text-shadow-md text-xl py-5 font-light">Tuesday, Aug 5,2025</p>
                                    </div>
                                    <div className="w-1/2 h-full flex flex-row justify-center align-middle items-center">
                                        <img style={{width:"120px"}} src={cloudeIcone} alt="" />
                                        <p style={{fontSize:90}} className=" py-2 pl-10 text-shadow-md">64<sup>°</sup></p>

                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-center md:justify-center items-center align-middle  w-full h-fit py-10 ">
                                <div className="rounded-2xl shdaow shadow-black shadow-sm bg-gray-600 bg-opacity-50
                        text-white flex flex-col justify-center  items-start px-4 w-3/4 md:w-1/4 h-36 mx-4
                        
                        " >
                                    <p className="drop-shadow-sm">Feals Like</p>
                                    <p className="text-3xl py-2">64<sup>°</sup></p>
                                </div>
                                <div className="rounded-2xl shdaow shadow-black shadow-sm bg-gray-600 bg-opacity-50
                        text-white flex flex-col justify-center  items-start px-4 w-3/4 md:w-1/4 h-36 mx-4
                        
                        " >
                                    <p className="drop-shadow-sm">Humidity</p>
                                    <p className="text-3xl py-2">46 %</p>
                                </div>
                                <div className="rounded-2xl shdaow shadow-black shadow-sm bg-gray-600 bg-opacity-50
                        text-white flex flex-col justify-center  items-start px-4 w-3/4 md:w-1/4 h-36 mx-4
                        
                        " >
                                    <p className="drop-shadow-sm">Wind</p>
                                    <p className="text-3xl py-2">9 mph</p>
                                </div>
                                <div className="rounded-2xl shdaow shadow-black shadow-sm bg-gray-600 bg-opacity-50
                        text-white flex flex-col justify-center  items-start px-4 w-3/4 md:w-1/4 h-36 mx-4
                        
                        " >
                                    <p className="drop-shadow-sm">Precipitation</p>
                                    <p className="text-3xl py-2">0 in</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col justify-start items-start w-full h-full">
                        <div className="w-full h-auto text-start text-2xl ">
                            Daily forecast
                        </div>
                        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center align-middle  w-full h-fit py-10 box-content ">
                            <div className="rounded-2xl shdaow shadow-black shadow-sm bg-gray-600 bg-opacity-50
                        text-white flex flex-col justify-around  items-center px-4 w-3/4 md:w-1/7 h-64 mx-2
                        text-center
                        " >
                                <p>Tue</p>
                                <img width={120} src={cloudeIcone} alt="" />
                                <div className="flex flex-row justify-between align-middle text-2xl w-full">
                                    <p className="text-gray-50 text-opacity-80">57 <sup>°</sup></p>
                                    <p>68 <sup>°</sup></p>
                                </div>
                            </div>
                            <div className="rounded-2xl shdaow shadow-black shadow-sm bg-gray-600 bg-opacity-50
                        text-white flex flex-col justify-around  items-center px-4 w-3/4 md:w-1/7 h-64 mx-2
                        text-center
                        " >
                                <p>Tue</p>
                                <img width={120} src={cloudeIcone} alt="" />
                                <div className="flex flex-row justify-between align-middle text-2xl w-full">
                                    <p className="text-gray-50 text-opacity-80">57 <sup>°</sup></p>
                                    <p>68 <sup>°</sup></p>
                                </div>
                            </div>
                            <div className="rounded-2xl shdaow shadow-black shadow-sm bg-gray-600 bg-opacity-50
                        text-white flex flex-col justify-around  items-center px-4 w-3/4 md:w-1/7 h-64 mx-2
                        text-center
                        " >
                                <p>Tue</p>
                                <img width={120} src={cloudeIcone} alt="" />
                                <div className="flex flex-row justify-between align-middle text-2xl w-full">
                                    <p className="text-gray-50 text-opacity-80">57 <sup>°</sup></p>
                                    <p>68 <sup>°</sup></p>
                                </div>
                            </div>
                            <div className="rounded-2xl shdaow shadow-black shadow-sm bg-gray-600 bg-opacity-50
                        text-white flex flex-col justify-around  items-center px-4 w-3/4 md:w-1/7 h-64 mx-2
                        text-center
                        " >
                                <p>Tue</p>
                                <img width={120} src={cloudeIcone} alt="" />
                                <div className="flex flex-row justify-between align-middle text-2xl w-full">
                                    <p className="text-gray-50 text-opacity-80">57 <sup>°</sup></p>
                                    <p>68 <sup>°</sup></p>
                                </div>
                            </div>
                            <div className="rounded-2xl shdaow shadow-black shadow-sm bg-gray-600 bg-opacity-50
                        text-white flex flex-col justify-around  items-center px-4 w-3/4 md:w-1/7 h-64 mx-2
                        text-center
                        " >
                                <p>Tue</p>
                                <img width={120} src={cloudeIcone} alt="" />
                                <div className="flex flex-row justify-between align-middle text-2xl w-full">
                                    <p className="text-gray-50 text-opacity-80">57 <sup>°</sup></p>
                                    <p>68 <sup>°</sup></p>
                                </div>
                            </div>
                            <div className="rounded-2xl shdaow shadow-black shadow-sm bg-gray-600 bg-opacity-50
                        text-white flex flex-col justify-around  items-center px-4 w-3/4 md:w-1/7 h-64 mx-2
                        text-center
                        " >
                                <p>Tue</p>
                                <img width={120} src={cloudeIcone} alt="" />
                                <div className="flex flex-row justify-between align-middle text-2xl w-full">
                                    <p className="text-gray-50 text-opacity-80">57 <sup>°</sup></p>
                                    <p>68 <sup>°</sup></p>
                                </div>
                            </div>
                            <div className="rounded-2xl shdaow shadow-black shadow-sm bg-gray-600 bg-opacity-50
                        text-white flex flex-col justify-around  items-center px-4 w-3/4 md:w-1/7 h-64 mx-2
                        text-center
                        " >
                                <p>Tue</p>
                                <img width={120} src={cloudeIcone} alt="" />
                                <div className="flex flex-row justify-between align-middle text-2xl w-full">
                                    <p className="text-gray-50 text-opacity-80">57 <sup>°</sup></p>
                                    <p>68 <sup>°</sup></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="
                flex flex-col justify-start items-start
                w-1/4 min-h-1/2  h-screen bg-gray-700 rounded-xl shadow bg-opacity-40
                p-3
                "
                >
                    <div className="flex flex-row justify-between align-middle p-2">
                        <p className="text-xl">Hourly forecast</p>

                    </div>
                    <div className="flex flex-col justify-start items-start w-full  overflow-hidden overflow-y-scroll px-2 py-3">

                        <div className="w-full h-fit p-4 flex flex-row justify-between items-center align-middle bg-gray-700 bg-opacity-50 my-1 rounded-md shadow-sm shadow-black">
                            <div className="flex flex-row justify-center align-middle items-center h-full">
                                <img className="w-14 pr-4" src={cloudeIcone} alt="" />
                                <p className="text-xl">3 PM</p>
                            </div>
                            <p className="text-2xl">68 <sup className="text-xl">°</sup></p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default HomePage