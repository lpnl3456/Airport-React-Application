const LandingByName = ({landings})=>{

    return(
        <div>

        
        <>
            <h2>Arrivals</h2>
        </>
       <> {
            
            landings.map(landingDetails => (
                    
                    <div className="landing-card" key={landingDetails.id}>
                        <h3>{landingDetails.landing.landingLocation.city.name}</h3>
                        <p>{landingDetails.landing.landingTime}</p>
                        <p>{landingDetails.landing.aircraft.airlineName}</p>
                        <p>{landingDetails.landing.aircraft.type}</p>
                        <p>{landingDetails.landing.gate.gateName}</p>
                        <p>To:</p>
                        <p>{landingDetails.takeOff.takeOffLocation.city.name}</p>
                        <p>{landingDetails.takeOff.takeOffTime}</p>
                        <p>{landingDetails.takeOff.gate.gateName}</p>
                    </div>
                ))
            }
        </>
        </div>

        )
    }

export default LandingByName