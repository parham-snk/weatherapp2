const Day = props => {
    console.log(props.select)
    return (
        <div className={`flex justify-start align-middle p-2 w-full hover:bg-hover cursor-pointer rounded-sm ${props.select ? "bg-gray-600 bg-opacity-50" : ""}`} onClick={() => {
            props.setday()
        }}>
            {props.day}
        </div>
    )
}

export default Day