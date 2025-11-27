import bgImage from "../assets/bg-today-large.svg"
import cloudeIcone from "../assets/icon-rain.webp"
import HourlyForcast from "../components/home/hourly/hourrly"
import Searchbar from "../components/home/searchbar"

const HomePage = props => {
    return (
        <div className="text-white w-full h-full px-4 z-0 flex flex-col justify-center items-center" >
            <Searchbar />
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
                                        <img style={{ width: "120px" }} src={cloudeIcone} alt="" />
                                        <p style={{ fontSize: 90 }} className=" py-2 pl-10 text-shadow-md">64<sup>°</sup></p>

                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-center md:justify-center items-center align-middle  w-full h-fit py-10 ">
                                <div className="rounded-2xl shdaow shadow-black shadow-sm bg-primary
                        text-white flex flex-col justify-center  items-start px-4 w-3/4 md:w-1/4 h-36 mx-4
                        
                        " >
                                    <p className="drop-shadow-sm">Feals Like</p>
                                    <p className="text-3xl py-2">64<sup>°</sup></p>
                                </div>
                                <div className="rounded-2xl shdaow shadow-black shadow-sm bg-primary
                        text-white flex flex-col justify-center  items-start px-4 w-3/4 md:w-1/4 h-36 mx-4
                        
                        " >
                                    <p className="drop-shadow-sm">Humidity</p>
                                    <p className="text-3xl py-2">46 %</p>
                                </div>
                                <div className="rounded-2xl shdaow shadow-black shadow-sm bg-primary
                        text-white flex flex-col justify-center  items-start px-4 w-3/4 md:w-1/4 h-36 mx-4
                        
                        " >
                                    <p className="drop-shadow-sm">Wind</p>
                                    <p className="text-3xl py-2">9 mph</p>
                                </div>
                                <div className="rounded-2xl shdaow shadow-black shadow-sm bg-primary
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
                            <div className="rounded-2xl shdaow shadow-black shadow-sm bg-primary
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
                            <div className="rounded-2xl shdaow shadow-black shadow-sm bg-primary
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
                            <div className="rounded-2xl shdaow shadow-black shadow-sm bg-primary
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
                            <div className="rounded-2xl shdaow shadow-black shadow-sm bg-primary
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
                            <div className="rounded-2xl shdaow shadow-black shadow-sm bg-primary
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
                            <div className="rounded-2xl shdaow shadow-black shadow-sm bg-primary
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
                            <div className="rounded-2xl shdaow shadow-black shadow-sm bg-primary
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



                <HourlyForcast />

            </div>

        </div >
    )
}
export default HomePage