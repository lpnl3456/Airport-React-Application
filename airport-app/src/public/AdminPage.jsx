import { Link } from "react-router-dom";

const AdminPage = (adminPage )=>{
    return(
       <div>
           <h2>Admin Page</h2>
<Link to ="/addAircraft">Add Aircraft</Link>
       </div>

        )
    }

export default AdminPage