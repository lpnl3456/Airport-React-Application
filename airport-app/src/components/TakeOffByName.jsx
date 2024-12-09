const TakeOffByName = ({takeOffs})=>{
console.log("Take Off map Page: " + takeOffs.takeOff);
    return(
        <div>
            <>
                <h2>Departures</h2>
            </>
       <> {
                takeOffs.map(takeOffDetails => (

                    <div className="takeOff-card" key={takeOffDetails.flight_id}>
                        <p>{takeOffDetails.takeOff.takeOffLocation.name}</p>
                        <p>{takeOffDetails.takeOff.takeOffTime}</p>
                        <p>{takeOffDetails.takeOff.aircraft}</p>
                        <p>{takeOffDetails.takeOff.gate}</p>
                        <p>Landing</p>
                        <p>{takeOffDetails.landing.landingLocation.city.name}</p>
                        <p>{takeOffDetails.landing.landingTime}</p>
                        <p>{takeOffDetails.landing.aircraft}</p>
                        <p>{takeOffDetails.landing.gate}</p>
                    </div>
                ))
            }
        </>
        </div>

        )
    }

export default TakeOffByName

