import { Link } from "react-router-dom";
import {  useNavigate } from "react-router-dom";
import BackButton from './BackButton';

const AdminPage = (adminPage )=>{
    const navigate = useNavigate();
    return(
       <div>
           <h2>Admin Page</h2>
           <BackButton onClick = {() => {
                     navigate(-1)}}/>

         <br/>
        <Link to ="/addAircraft">Add Aircraft</Link>
        <br/>
        <Link to ="/addFlight">Add Flight</Link>
       </div>

        )
    }

export default AdminPage