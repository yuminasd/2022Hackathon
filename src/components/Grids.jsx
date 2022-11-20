import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap'

const Grids = () => {
    return(
        <Container>
                    <div>
                        <button>
                            <Link to="/" className="nav-link px-2 link-secondary">
                                Home
                            </Link>
                        </button>
                    </div>
                    <div>
                        <button>
                            <Link to="/Dashboard" className="nav-link px-2 link-secondary">
                                Dashboard
                            </Link>    
                        </button>
                    </div>
                    <div>
                        <button>
                            <Link to="/Habits" className="nav-link px-2 link-secondary">
                                Habits
                            </Link> 
                        </button>
                    </div>
        </Container>
    )
}

export default Grids