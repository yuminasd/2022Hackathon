import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap'

const Grids = ({Home, Dashboard, Habits}) => {
    return(
        <Container>
                    <div>
                        <button  class="btn btn-light">
                            <Link to="/" className="nav-link px-2 link-secondary">
                                <img src={Home} alt=""/>
                            </Link>
                        </button>
                    </div>
                    <div>
                        <button  class="btn btn-light">
                            <Link to="/Dashboard" className="nav-link px-2 link-secondary">
                                <img src={Dashboard} alt=""/>
                            </Link>    
                        </button>
                    </div>
                    <div>
                        <button  class="btn btn-light">
                            <Link to="/Habits" className="nav-link px-2 link-secondary">
                                <img src={Habits} alt=""/>
                            </Link> 
                        </button>
                    </div>
                    <div>
                        <button class="btn btn-light" disabled>
                            <Link to="/Habits" className="nav-link px-2 link-secondary">
                                <img src="Settings-n.svg" alt=""/>
                            </Link> 
                        </button>
                    </div>    
        </Container>
    )
}

export default Grids