import { Link } from "react-router-dom";
import {  useNavigate } from "react-router-dom";


const AdminPage = (adminPage )=>{
    const navigate = useNavigate();
    return(
       <div>
           <h2>Admin Page</h2>

         <br/>

         < Link to="/addAircraft"><button>Add Aircraft</button></Link>
        <br/>
        <Link to ="/addAirport"><button>Add Airport</button></Link>
        <br/>
        <Link to ="/addFlight"><button>Add Flight</button></Link>
        <Link to ="/addGate"><button>Add Gate</button></Link>
        <Link to ="/addCity"><button>Add City</button></Link>
       </div>

        )
    }

export default AdminPage