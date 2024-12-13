import { Link } from "react-router-dom";

const Header = (header )=>{
    return(
        <div>
            <h4>Flight finder</h4>
            <nav>

                        <Link to ="/"> <button>Home</button> </Link>
                        <Link to ="/airportlist"><button>All Airports</button></Link>

                        <Link to ="/airportsbyname"><button>Search For Airports</button></Link>

                        <Link to ="/adminPage"><button>Admin</button></Link>
            </nav>
        </div>
        )
    }

export default Header