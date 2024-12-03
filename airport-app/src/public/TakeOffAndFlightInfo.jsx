const TakeOffAndFlightInfo = ({flights})=>{
    return(
        <>
        
       {flights.legnth >0 ?(
         flights.map((flight) =>(
        <div>
        
         <p>
         {flight}
         </p>
         
         </div>
        ))):(
            <p></p>
        )}
       
        </>
        
        )
    }

export default TakeOffAndFlightInfo