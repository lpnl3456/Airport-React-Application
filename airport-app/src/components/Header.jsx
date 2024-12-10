const Header = (header )=>{
    return(
        <div className = "navBar">
            <h4>Flight finder</h4>
            <nav>

                        <a className="navLink" href="/"> <button>Home</button> </a>
                        <a className="navLink" href="/airportlist"><button>All Airports</button></a>

                        <a className="navLink" href="/airportsbyname"><button>Search For Airports</button></a>

                        <a className="navLink" href="/adminPage"><button>Admin</button></a>
            </nav>
        </div>
        )
    }

export default Header