import { Link } from "react-router-dom";
import {  useNavigate } from "react-router-dom";
import BackButton from './BackButton';

const AdminPage = (adminPage )=>{
    const navigate = useNavigate();
    return(
       <div>
           <h2>Admin Page</h2>

         <br/>

         <a className="navLink" href="/addAircraft"><button>Add Aircraft</button></a>
        <br/>
        <a className="navLink" href="/addAirport"><button>Add Airport</button></a>
        <br/>
        <a className="navLink" href="/addFlight"><button>Add Flight</button></a>
       </div>

        )
    }

export default AdminPage