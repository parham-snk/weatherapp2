import bgImageSmall from "../assets/bg-today-small.svg"
import bgImageLarg from "../assets/bg-today-large.svg"
import cloudeIcone from "../assets/icon-rain.webp"
import HourlyForcast from "../components/home/hourly/hourrly"
import Searchbar from "../components/home/searchbar"

const HomePage = props => {
    return (
        <div className="text-white w-full h-full px-2 md:px-4 z-0 flex flex-col justify-center items-center " >
            <Searchbar />
            <div className="flex flex-col xl:flex-row justify-center align-middle w-full h-full md:px-10">
                <div className="flex flex-col justify-center items-center align-middle w-full xl:w-3/4 h-full md:px-4">

                    <div className="flex flex-col xl:flex-row justify-center align-middle items-center w-full h-full">
                        <div className="flex flex-col w-full h-full">
                            <div className="relative w-full">
                                <img src={bgImageSmall} className="block md:hidden w-full" alt="" />
                                <img src={bgImageLarg} className="hidden md:block w-full" alt="" />
                                <div className="absolute w-full h-full flex flex-col justify-center items-center md:flex-row md:justify-between md:align-middle top-0 left-0">
                                    <div className="flex flex-col justify-center itemce md:items-start md:pl-10 md:w-2/4 pt-10 md:pt-0">
                                        <p className="text-shadow-md text-2xl md:text-4xl font-bold text-nowrap">Berlin, Germany</p>
                                        <p className="text-shadow-md text-xl py-5 font-light">Tuesday, Aug 5,2025</p>
                                    </div>
                                    <div className="w-1/2 h-full flex flex-row justify-center align-middle items-center">
                                        <img style={{ width: "120px" }} src={cloudeIcone} alt="" />
                                        <p className="text-90 py-2 pl-10 text-shadow-md">64<sup>°</sup></p>

                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap md:flex-nowrap  justify-center  md:justify-center items-center align-middle   w-full h-fit py-10 ">
                                <div className="rounded-2xl shdaow shadow-black shadow-sm bg-primary
                        text-white flex flex-col justify-center  items-start px-4 w-1/2 md:w-1/4 h-36 md:mx-4 scale-95 md:scale-100
                        
                        " >
                                    <p className="drop-shadow-sm">Feals Like</p>
                                    <p className="text-3xl py-2">64<sup>°</sup></p>
                                </div>
                                <div className="rounded-2xl shdaow shadow-black shadow-sm bg-primary
                        text-white flex flex-col justify-center  items-start px-4 w-1/2 md:w-1/4 h-36  md:mx-4 scale-95 md:scale-100
                        
                        " >
                                    <p className="drop-shadow-sm">Humidity</p>
                                    <p className="text-3xl py-2">46 %</p>
                                </div>
                                <div className="rounded-2xl shdaow shadow-black shadow-sm bg-primary
                        text-white flex flex-col justify-center  items-start px-4 w-1/2 md:w-1/4 h-36  md:mx-4 scale-95 md:scale-100
                        
                        " >
                                    <p className="drop-shadow-sm">Wind</p>
                                    <p className="text-3xl py-2">9 mph</p>
                                </div>
                                <div className="rounded-2xl shdaow shadow-black shadow-sm bg-primary
                        text-white flex flex-col justify-center  items-start px-4 w-1/2 md:w-1/4 h-36  md:mx-4 scale-95 md:scale-100
                        
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
                        <div className="flex flex-row flex-wrap md:flex-nowrap md:flex-row  md:justify-start items-center align-middle  w-full h-fit py-10 box-content ">
                            <div className="rounded-2xl shdaow shadow-black shadow-sm bg-primary
                        text-white flex flex-col justify-around  items-center px-4 w-1/3 md:w-1/7 h-64 md:mx-2 scale-95 md:scale-100
                        text-center
                        " >
                                <p>Tue</p>
                                <img width={120} src={cloudeIcone} alt="" />
                                <div className="flex flex-row scale-95 md:scale-100 justify-between align-middle text-2xl w-full">
                                    <p className="text-gray-50 text-opacity-80">57 <sup>°</sup></p>
                                    <p>68 <sup>°</sup></p>
                                </div>
                            </div>
                            <div className="rounded-2xl shdaow shadow-black shadow-sm bg-primary
                        text-white flex flex-col justify-around  items-center px-4 w-1/3 md:w-1/7 h-64 md:mx-2 scale-95 md:scale-100
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
                        text-white flex flex-col justify-around  items-center px-4 w-1/3 md:w-1/7 h-64 md:mx-2 scale-95 md:scale-100
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
                        text-white flex flex-col justify-around  items-center px-4 w-1/3 md:w-1/7 h-64 md:mx-2 scale-95 md:scale-100
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
                        text-white flex flex-col justify-around  items-center px-4 w-1/3 md:w-1/7 h-64 md:mx-2 scale-95 md:scale-100
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
                        text-white flex flex-col justify-around  items-center w-1/3 md:w-1/7 h-64 md:mx-2 scale-95 md:scale-100
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
                        text-white flex flex-col justify-around  items-center w-1/3 md:w-1/7 h-64 md:mx-2 scale-95 md:scale-100
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