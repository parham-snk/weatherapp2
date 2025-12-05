import { useEffect } from "react"
import { createPopperLite as createPopper, flip, offset, preventOverflow } from "@popperjs/core"
const Suncycle = ({ sunrise, sunset }) => {

    async function getTime(time) {

        let date = new Date(time).getHours()
        return date
    }
    async function getPosition(point) {

        const curve = document.getElementById("curve")
        let totalLenght = curve.getTotalLength()
        point = (point / 24).toFixed(3)
        let position = curve.getPointAtLength(point * totalLenght);

        return { x: position.x, y: position.y }

    }
    useEffect(() => {
        if (sunrise && sunset) {
            const tooltip = document.getElementById("tooltip")
            const tooltip2 = document.getElementById("tooltip2")
            const Mrect = document.getElementById("Mrect")
            const Srect = document.getElementById("Srect")
            const sun = document.getElementById("sun")
            const moon = document.getElementById("moon")
            const passed = document.getElementById("passed")
            getTime(sunrise).then(h => {
                getPosition(h).then(({ x, y }) => {

                    sun.setAttribute("x", x-10 )
                    sun.setAttribute("y", y-12 )
                    sun.onmousemove = () => {
                        tooltip.style.opacity = 1
                    }
                    Srect.setAttribute("x", x - 10)
                    Srect.setAttribute("y", y - 10)

                    sun.onmouseout = () => {
                        tooltip.style.opacity = 0
                    }
                    tooltip.innerHTML = `${new Date(sunrise).getHours()}:${new Date(sunrise).getMinutes()}`
                    createPopper(sun, tooltip, {
                        placement: "top", modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, 30],
                                },
                            },
                        ],
                    })

                })
            })
            getTime(sunset).then(h => {
                getPosition(h).then(({ x, y }) => {
                    moon.setAttribute("x", x+4 )
                    moon.setAttribute("y", y -5)
                    moon.onmousemove = () => {
                        tooltip2.style.opacity = 1
                    }
                    moon.onmouseout = () => {
                        tooltip2.style.opacity = 0
                    }
                    Mrect.setAttribute("x", x + 2)
                    Mrect.setAttribute("y", y - 7)
                    tooltip2.innerHTML = `${new Date(sunset).getHours()}:${new Date(sunset).getMinutes()}`
                    createPopper(moon, tooltip2, {
                        placement: "top", modifiers: [
                            {
                                name: 'offset2',
                                options: {
                                    offset: [0, 20],
                                },
                            },
                        ],
                    })

                })
            })
            let now = Date.now()
            now = new Date(now)
            getTime(now).then(h => {
                getPosition(h).then(({ x, y }) => {
                    passed.setAttribute("stroke-dasharray", `${x} ${y}`)
                })
            })
        }
    }, [sunrise])
    return <div className="
    w-fit h-fit p-2
    flex justify-center align-middle items-center
    bg-primary
    rounded-xl
    py-2 mb-4
    ">
        <svg width="300" height="200" id="svg">

            <defs>
                <filter id="imgShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow
                        dx="0"
                        dy="4"
                        stdDeviation="2"
                        flood-color="rgba(0,0,0  )"
                    />
                </filter>
            </defs>
            <path id="curve" fill="none" strokeWidth="5" strokeDasharray={5} stroke="grey" d="M10,180 C 150,100 150,100 290,180" />
            <path id="passed" fill="none" rx={10} ry={10} strokeWidth="6" stroke="#68A4F1" d="M10,180 C 150,100 150,100 290,180" />
            <rect id="Srect" fill="#02012B" width={25} height={25} rx={10} ry={10} />
            <rect id="Mrect" fill="#02012B" width={25} height={25} rx={10} ry={10} />
            <image filter="url(#imgShadow)"  className=" transition-all" id="moon" width={20} href="/weatherapp2/assets/moon-svgrepo-com.svg" />
            <image filter="url(#imgShadow)" className=" transition-all " id="sun" width={25} href="/weatherapp2/assets/icon-sunny.png" />
        </svg>
        <div id="tooltip" role="tooltip" className="transition-all w-fit bg-black bg-opacity-50 backdrop-blur-sm rounded mb-20 p-2 text-sm opacity-0">time</div>
        <div id="tooltip2" role="tooltip" className="transition-all w-fit bg-black bg-opacity-50 backdrop-blur-sm rounded mb-20 p-2 text-sm opacity-0">time</div>
    </div>
}

export default Suncycle