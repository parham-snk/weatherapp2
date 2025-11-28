const CityItem = props => {
    return (
        <div className="flex flex-row justify-start align-middle items-center
         cursor-pointer my-1 text-start w-full p-3 hover:bg-gray-600 hover:bg-opacity-40 hover:shadow-md rounded transition-all" onClick={() => {
                props.setcity()
            }}>
            <p >{props.city}</p> <p className="mx-2 text-sm text-gray-500">( {props.country} )</p>
        </div>
    )
}

export default CityItem