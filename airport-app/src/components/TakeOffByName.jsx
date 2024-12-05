const TakeOffByName = ({takeOffs})=>{

    console.log(takeOffs.takeOff_id);
    return(
       <> {
                takeOffs.map(takeOff => (
                    
                    <div className="takeOff-card" key={takeOff.takeOff_id}>
                        <h2>{takeOff.takeOffLocation}</h2>
                        <p>{takeOff.takeOffTime}</p>
                        <p>{takeOff.aircraft}</p>
                    </div>
                ))
            }
        </>

        )
    }

export default TakeOffByName

