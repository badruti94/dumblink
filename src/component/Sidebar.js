import { Link, useNavigate } from 'react-router-dom'
import {
    Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Container, Col, Row
} from 'reactstrap'

const Sidebar = (props) => {
    const navigate = useNavigate()
    const { children } = props
    const { title } = props

    const handleLogout = () => {
        localStorage.clear()
        navigate('/')
    }

    return (
        <div>
            <Navbar
                color="white"
                expand="md"
                light
            >

                <NavbarBrand href="/" className='ms-5'>
                    <img src="/logo.png" alt="" width={100} />
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar >
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem className='ms-5 fw-bold' >
                            {title}
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Row style={{ width: '100%' }} >
                <Col className='col-md-2' >
                    <div>
                        <Nav vertical className='ms-5'>
                            <NavItem className='mt-5'  >
                                <Link className='text-decoration-none text-dark fw-bold' to={'/template'} ><i className='fa fa-th-large' ></i> Template</Link>
                            </NavItem>
                            <NavItem className='mt-5'  >
                                <Link className='text-decoration-none text-dark fw-bold' to={'/profile'} ><i className='fas fa-user' ></i> Profile</Link>
                            </NavItem>
                            <NavItem className='mt-5'  >
                                <Link className='text-decoration-none text-dark fw-bold' to={'/link'} ><i className='fas fa-link' ></i> My Link</Link>
                            </NavItem>
                            <NavItem style={{ marginTop: 230 }}  >
                                <NavLink className='text-decoration-none text-dark fw-bold' style={{ cursor: 'pointer' }} onClick={handleLogout} ><i className='fas fa-sign-out' ></i> Logout</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Col>
                <Col style={{ backgroundColor: '#ECECEC' }} >
                    <Container className='mt-3'>
                        {children}
                    </Container>
                </Col>
            </Row>
        </div >
    )
}

export default Sidebar