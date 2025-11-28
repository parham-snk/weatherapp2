import cloudeIcone from "../../../assets/icon-rain.webp"
const HourlyItem = props => {

    return (
        <div className="w-full h-fit p-4 flex flex-row justify-between items-center align-middle bg-hover  my-1 rounded-md shadow-sm shadow-black">
            <div className="flex flex-row justify-center align-middle items-center h-full">
                {
                    props.w &&
                    <img className="w-14 pr-4" src={cloudeIcone} alt="" />

                }
                {
                    props.h &&
                    <p className="text-xl">{props.h}</p>
                }
            </div>
            {
                props.temp &&
                <p className="text-2xl">{props.temp} °</p>
            }
        </div>
    )
}

export default HourlyItem