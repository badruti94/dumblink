import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, Form, Button, Col, Row, Modal, ModalBody, Alert, FormGroup, Input
} from 'reactstrap'
import { API } from '../config/api'


const Login = ({ isOpen, setIsOpen, setRegisterIsOpen }) => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: '',
        password: '',
    })
    const [alert, setAlert] = useState({
        display: false,
        message: ""
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async e => {
        e.preventDefault()

        const config = {
            headers: {
                "Content-type": "application/json"
            },
        };

        const body = JSON.stringify(data);

        try {
            const response = await API.post("/login", body, config);

            localStorage.setItem('login', JSON.stringify(true))
            localStorage.setItem('token', response.data.data.token)

            navigate('/template')
        } catch (error) {
            if (error.response.status == 400) {
                let message
                if (error.response.data.error) {
                    message = error.response.data.error.message
                } else {
                    message = error.response.data.message
                }
                setAlert({
                    display: true,
                    message
                })
            } else {
                console.log(error.response.data);
            }
        }
    }

    const handleRegisterClick = e => {
        e.preventDefault()
        setIsOpen(false)
        setRegisterIsOpen(true)
    }

    return (
        <div>
            <Modal isOpen={isOpen}
                style={{ maxWidth: '350px' }}
                backdrop={true}
                toggle={() => {
                    setIsOpen(false)
                }}
            >
                <ModalBody>
                    <div className='fs-3 fw-bold mb-4' >Sign In</div>
                    {alert.display && <Alert className='mt-5' color='danger' >{alert.message}</Alert>}
                    <Form onSubmit={handleSubmit} >
                        <FormGroup>
                            <Input name='email' placeholder='Email' type='email' onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Input name='password' type='password' placeholder='Password' onChange={handleChange} />
                        </FormGroup>
                        <Button
                            style={{ width: '100%' }}
                            type='submit'
                            className='mt-lg-3 mb-lg-3 text-white fw-bold'
                            color='warning'
                        >Sign In</Button>
                        <p>Don't have an account? Klik
                            <span
                                style={{ cursor: 'pointer' }}
                                className='fw-bold'
                                onClick={handleRegisterClick}
                            > here</span>
                        </p>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

const Register = ({ isOpen, setIsOpen, setLoginIsOpen }) => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: '',
        password: '',
        name: '',
    })

    const [alert, setAlert] = useState({
        display: false,
        message: ""
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async e => {
        e.preventDefault()

        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };

        const body = JSON.stringify(data);

        try {
            const response = await API.post("/register", body, config);
            localStorage.setItem('login', JSON.stringify(true))
            localStorage.setItem('token', JSON.stringify(response.data.data.token))
            navigate('/template')
        } catch (error) {
            if (error.response.status == 400) {
                let message
                if (error.response.data.error) {
                    message = error.response.data.error.message
                } else {
                    message = error.response.data.message
                }
                setAlert({
                    display: true,
                    message
                })
            } else {
                console.log(error.response.data);
            }
        }
    }

    const handleSignInClick = e => {
        e.preventDefault()
        setIsOpen(false)
        setLoginIsOpen(true)
    }

    return (
        <div>
            <Modal isOpen={isOpen}
                style={{ maxWidth: '350px' }}
                backdrop={true}
                toggle={() => {
                    setIsOpen(false)
                }}
            >
                <ModalBody>
                    <div className='fs-3 fw-bold mb-4' >Register</div>
                    {alert.display && <Alert className='mt-5' color='danger' >{alert.message}</Alert>}
                    <Form onSubmit={handleSubmit} >
                        <FormGroup>
                            <Input name='email' placeholder='Email' onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Input type='password' name='password' placeholder='Password' onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Input name='name' placeholder='Full Name' onChange={handleChange} />
                        </FormGroup>
                        <Button style={{ width: '100%' }}
                            type='submit'
                            className='mt-lg-3 mb-lg-3 text-white fw-bold'
                            color='warning'
                        >Register</Button>
                        <p>Already have an account? Klik
                            <span
                                className='fw-bold'
                                style={{ cursor: 'pointer' }}
                                onClick={handleSignInClick}
                            > here</span>
                        </p>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

const Landing = () => {
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false)
    const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false)

    return (
        <>
            <div>
                <Navbar
                    color="light"
                    expand="md"
                    light
                >

                    <NavbarBrand href="/" className='ms-5'>
                        <img src="/logo.png" alt="" width={100} />
                    </NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck() { }} />
                    <Collapse navbar>
                        <Nav
                            className="me-auto"
                            navbar
                        >
                        </Nav>
                        <div className='d-flex me-5' >
                            <Button
                                color='light'
                                className='fw-bold'
                                onClick={() => { setLoginModalIsOpen(true) }}

                            >Login</Button>
                            <span className='me-3'></span>
                            <Button
                                color='warning'
                                className='fw-bold text-white'
                                onClick={() => { setRegisterModalIsOpen(true) }}

                            >Register</Button>
                        </div>
                    </Collapse>
                </Navbar>
            </div >
            <div className='bg-warning' >
                <Row style={{ width: '100%', height: '100' }} >
                    <Col style={{ paddingLeft: 100 }} >
                        <h1 className='text-white mt-5' >The Only Link <br /> You’ll Ever Need</h1>
                        <p className='text-white' >Add a link for your Social Bio and optimize your <br /> social media traffic.

                            <br />
                            <br />
                            safe, fast and easy to use</p>
                        <br /><br /><br />
                        <Button style={{ marginBottom: 200 }} color='dark'
                            onClick={() => { setLoginModalIsOpen(true) }}

                        >Get Started For Free</Button>
                    </Col>
                    <Col  >
                        <img style={{ marginTop: 120 }} src="/PC.png" alt="" width={400} />
                    </Col>
                </Row>
            </div>
            <Login
                isOpen={loginModalIsOpen}
                setIsOpen={setLoginModalIsOpen}
                setRegisterIsOpen={setRegisterModalIsOpen}
            />
            <Register
                isOpen={registerModalIsOpen}
                setIsOpen={setRegisterModalIsOpen}
                setLoginIsOpen={setLoginModalIsOpen}
            />
        </>
    )
}

export default Landing