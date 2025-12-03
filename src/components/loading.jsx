const Loading = props => {
    return <div className="w-full  h-full md:h-full flex justify-center items-center">
        <img src={`${process.env.PUBLIC_URL}/assets/icon-loading.svg`} class="mr-3 w-20 animate-spin ... text-white" />
    </div>

}

export default Loading