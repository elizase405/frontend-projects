import Form from "../components/Form"

const Home = () => {
    return (
        <>
            <svg className="svg" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" overflow="auto" shapeRendering="auto" >
                <defs>
                    <path id="wavepath" d="M 0 2000 0 500 Q 82.5 434 165 500 t 165 0 165 0 165 0 165 0 165 0 165 0 165 0 165 0  v1000 z" />
                    <path id="motionpath" d="M -330 0 0 0" /> 
                </defs>
                <g >
                    <use xlinkHref="#wavepath" y="256" >
                    <animateMotion
                        dur="5s"
                        repeatCount="indefinite">
                        <mpath xlinkHref="#motionpath" />
                    </animateMotion>
                    </use>
                </g>
            </svg>
            <Form />
        </>
    )
}

export default Home;