import DailyItem from "./dailyItem"

const Daily = props => {
    const {time,temperature_2m_max,temperature_2m_min,weather_code}=props.data
    const days = props.data?.time?.map((day, index) => <DailyItem data={{day,temperature_2m_max:temperature_2m_max[index],temperature_2m_min:temperature_2m_min[index],weather_code:weather_code[index]}} key={index} />)
    return (
        <div className="flex flex-row flex-wrap md:flex-nowrap md:flex-row  md:justify-start items-center align-middle  w-full h-fit py-10 box-content ">
            {days}
        </div>
    )
}
export default Daily