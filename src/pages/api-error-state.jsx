import errorIcon from "../assets/icon-error.svg"
import retryIcon from "../assets/icon-retry.svg"
const ApiErrorPage = props => {
    return <div className="flex w-3/4 md:w-100 h-fit flex-col justify-top align-top text-center items-center text-white pt-100">
        <img width={40} className="my-10" src={errorIcon} alt="" />
        <h1 className="font-bold text-5xl">Something went wrong</h1>
        <p className="text-gray-300 pt-10 w-full text-wrap md:w-3/5">we couldn't connect to the server (API error). please try agaign in a few momments.</p>
        <div className="mt-10 relative w-35 h-auto py-1 px-3 text-white bg-gray-600 bg-opacity-50 backdrop-blur-sm rounded flex flex-row justify-around user-select-none cursor-pointer">
            <img src={retryIcon} alt="" />
            <p className="px-2">retry</p>
        </div>
    </div>
}

export default ApiErrorPage