const TakeOffByName = ({takeOffs})=>{

    return(
        <div>
            <>
                <h2>Departures</h2>
            </>
       <> {
                takeOffs.map(takeOffDetails => (

                    <div className="takeOff-card" key={takeOffDetails.flight_id}>
                        <p>{takeOffDetails.takeOff.takeOffLocation.city.name}</p>
                        <p>{takeOffDetails.takeOff.takeOffTime}</p>
                        <p>{takeOffDetails.takeOff.aircraft.type}</p>
                        <p>{takeOffDetails.takeOff.gate.gateName}</p>
                        <p>Landing</p>
                        <p>{takeOffDetails.landing.landingLocation.city.name}</p>
                        <p>{takeOffDetails.landing.landingTime}</p>
                        <p>{takeOffDetails.landing.aircraft.type}</p>
                        <p>{takeOffDetails.landing.gate.gateName}</p>
                    </div>
                ))
            }
        </>
        </div>

        )
    }

export default TakeOffByName

