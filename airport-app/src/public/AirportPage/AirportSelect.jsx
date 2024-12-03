import { useState, useEffect } from "react";

const AirportSelect = ({airports})=>{
    return(
        <>
        <form>
        { airports.map((airport) =>(
        <div>
        
         <input type="radio" id="airport" name="airport" value={airport} />
         <label for="airport"> {airport}</label>
         
         </div>
        ))} 
        </form>
       
        </>
        
        )
    }

export default AirportSelect