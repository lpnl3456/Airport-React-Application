const LandingByName = ({landings})=>{

    return(
        <div>

        
        <>
            <h2>Arrivals</h2>
        </>
       <> {
            
            landings.map(landingDetails => (
                    
                    <div className="landing-card" key={landingDetails.id}>
                        <p>{landingDetails.landing.landingLocation.city.name}</p>
                        <p>{landingDetails.landing.landingTime}</p>
                        <p>{landingDetails.landing.aircraft}</p>
                        <p>To:</p>
                        <p>{landingDetails.takeOff.takeOffLocation.city.name}</p>
                        <p>{landingDetails.takeOff.takeOffTime}</p>
                        <p>{landingDetails.takeOff.aircraft}</p>
                        <p>{landingDetails.takeOff.gate}</p>
                    </div>
                ))
            }
        </>
        </div>

        )
    }

export default LandingByName