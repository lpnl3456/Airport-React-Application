import { Link } from "react-router-dom";

const Homepage = (homepage)=>{
    return(
       <div>
        <p> Welecome the the airport</p>
        <br/>
        <Link to ="/airportlist">View All Airports</Link>
        <Link to ="/airportsbyname">Serach Flights</Link>
        <Link to ="/adminPage">Admin Page</Link>

        </div>
        )
    }

export default Homepage