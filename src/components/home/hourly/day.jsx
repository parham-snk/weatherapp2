const Day = props => {
    return (
        <div className="flex justify-start align-middle p-2 w-full hover:bg-hover cursor-pointer rounded-sm" onClick={()=>{
            props.setday()
        }}>
            {props.day}
        </div>
    )
}

export default Day