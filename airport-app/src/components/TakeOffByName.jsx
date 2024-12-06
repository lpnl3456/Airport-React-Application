const TakeOffByName = ({takeOffs})=>{

    return(
        <div>
            <>
                <h2>Departures</h2>
            </>
       <> {
                takeOffs.map(takeOff => (
                    
                    <div className="takeOff-card" key={takeOff.takeOff_id}>
                        <p>{takeOff.takeOffLocation.city.name}</p>
                        <p>{takeOff.takeOffTime}</p>
                        <p>{takeOff.aircraft}</p>
                        <p>{takeOff.gate}</p>
                    </div>
                ))
            }
        </>
        </div>

        )
    }

export default TakeOffByName

