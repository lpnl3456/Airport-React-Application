const LandingByName = ({landings})=>{

    return(
        <div>

        
        <>
            <h2>Arrivals</h2>
        </>
       <> {
            
            landings.map(landing => (
                    
                    <div className="landing-card" key={landing.landing_id}>
                        <p>{landing.landingLocation.city.name}</p>
                        <p>{landing.landingTime}</p>
                        <p>{landing.aircraft}</p>
                    </div>
                ))
            }
        </>
        </div>

        )
    }

export default LandingByName