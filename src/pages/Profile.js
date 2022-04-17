import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardBody, Form, Button, Alert, Modal, ModalBody } from 'reactstrap'
import FormInput from '../component/FormInput'
import Sidebar from '../component/Sidebar'
import { API } from '../config/api'

const DeleteModal = (props) => {
    const { isOpen, setIsOpen, setAlert } = props
    const navigate = useNavigate()

    const handleYes = () => {
        (async () => {
            try {
                let token;
                try {
                    token = JSON.parse(localStorage.token)
                } catch (error) {
                    token = localStorage.token
                }
                const config = {
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                };
                await API.delete(`/profile`, config);
                localStorage.clear()
                navigate('/')
            } catch (error) {
                setAlert({
                    display: true,
                    color: 'danger',
                    message: error.response.data.message
                })
            }
            setIsOpen(false)
        })()
    }

    return (
        <Modal isOpen={isOpen}
            style={{ maxWidth: '700px' }}
            backdrop={true}
            toggle={() => {
                setIsOpen(false)
            }}
        >
            <ModalBody className='text-success text-start' >
                <div className='my-lg-4' >
                    you are sure you want to delete this user
                </div>
                <div className='text-end' >
                    <Button
                        type='submit'
                        className='ms-lg-5 px-5'
                        color='danger'
                        onClick={handleYes}
                    >
                        Yes
                    </Button>
                    <Button
                        type='submit'
                        className='ms-lg-5 px-5'
                        color='secondary'
                        onClick={() => { setIsOpen(false) }}
                    >
                        No
                    </Button>
                </div>
            </ModalBody>
        </Modal>
    )
}

const Profile = () => {

    const [alert, setAlert] = useState({
        display: false,
        color: '',
        message: '',
    })
    const [form, setForm] = useState({
        name: "",
        email: ""

    });
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        (async () => {
            let token;
            try {
                token = JSON.parse(localStorage.token)
            } catch (error) {
                token = localStorage.token

            }
            const config = {
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            };

            const response = await API.get(`profile`, config)
            setForm(response.data.data.profile)
        })()
    }, [])

    const handleOnChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = e => {
        e.preventDefault()

        let token;
        try {
            token = JSON.parse(localStorage.token)
        } catch (error) {
            token = localStorage.token

        }
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        };

        (async () => {
            try {
                await API.put(`/profile`, form, config)
                setAlert({
                    display: true,
                    color: 'success',
                    message: 'Updated successfully'
                })
            } catch (error) {
                setAlert({
                    display: true,
                    color: 'danger',
                    message: error.response.data.message
                })
            }
        })()
    }

    return (
        <Sidebar title='My Account' >
            <div className='my-4' >
                <span className='fs-6 fw-bold' >My Information</span>
            </div>
            <Card className='mt-3' >
                <CardBody>
                    <DeleteModal
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        setAlert={setAlert}
                    />
                    {alert.display ? <Alert color={alert.color} >{alert.message}</Alert> : <></>}
                    <Form>
                        <FormInput
                            Label='Name'
                            placeholder='Your Name'
                            name='name'
                            onChange={handleOnChange}
                            value={form.name}
                        />
                        <FormInput
                            Label='Email'
                            placeholder='Your Email'
                            name='email'
                            onChange={handleOnChange}
                            value={form.email}
                        />
                    </Form>
                </CardBody>
            </Card>
            <div className='mt-4 text-end me-4' >
                <Button
                    className='ms-5 text-white fw-bold'
                    onClick={handleSubmit}
                    color='warning'
                >
                    Save Account
                </Button>
                <Button
                    className='ms-5 text-white fw-bold'
                    color='danger'
                    onClick={() => { setIsOpen(true) }}
                >
                    Delete Account
                </Button>
            </div>
        </Sidebar>
    )
}

export default Profile