import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Alert, Button, Input, Modal, ModalBody } from 'reactstrap'
import Sidebar from '../component/Sidebar'
import { API } from '../config/api'


const fetchData = async (setLinksFromServer, setLinks) => {

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
    const response = await API.get(`/link`, config);
    setLinksFromServer(response.data.data.links);
    setLinks(response.data.data.links)
}

const LinkDeleteModal = (props) => {
    const { isOpen, setIsOpen, id, setLinksFromServer, setLinks, setAlert } = props

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
                await API.delete("/link/" + id, config);
                setAlert({
                    display: true,
                    color: 'success',
                    message: 'Link deleted successfully'
                })
                fetchData(setLinksFromServer, setLinks)
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
                    you are sure you want to remove this link
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
        </Modal>)
}

const Link = (props) => {
    const { id, title, url, view, photo, type, uniqid, handleDeleteButton } = props
    const navigate = useNavigate();

    const openNewTab = link => window.open(link, '_blank')

    return (
        <div className='d-flex mb-5 justify-content-between' style={{ maxWidth: '95%' }} >
            <div className='d-flex' style={{ width: '25%' }} >
                <div className='me-3' >
                    <img src={photo} alt="" height={60} />
                </div>
                <div className='me-5'  >
                    <div className='fw-bold fs-6' >{title}</div>
                    <div className='text-secondary' >{url}</div>
                </div>
            </div>
            <div className='text-center' >
                <div className='fw-bold fs-6' >{view}</div>
                <div className='text-secondary' >Visit</div>
            </div>
            <div className='d-flex align-items-center text-secondary' >
                <span
                    onClick={() => { openNewTab(`/link/${uniqid}`) }}
                    className='me-3 p-2' style={styles.action} > <i className='fa fa-eye fa-xl' ></i> </span>
                <span
                    onClick={() => { navigate(`/edit-link/${type}/${id}`) }}
                    className='me-3 p-2' style={styles.action}
                > <i className='fa fa-edit fa-xl' ></i> </span>
                <span className='me-3 p-2' style={styles.action}
                    onClick={() => { handleDeleteButton(id) }}
                > <i className='fa fa-trash fa-xl' ></i> </span>
            </div>
        </div>
    )
}

const MyLink = () => {
    const [linksFromServer, setLinksFromServer] = useState()
    const [links, setLinks] = useState()
    const [alert, setAlert] = useState({
        display: false,
        color: "",
        message: ""
    })
    const [isOpen, setIsOpen] = useState(false)
    const [id, setId] = useState()

    const handleDeleteButton = id => {
        setId(id)
        setIsOpen(true)
    }

    useEffect(() => {
        try {
            fetchData(setLinksFromServer, setLinks)
        } catch (error) {
            console.log(error.response);
        }
    }, [])

    const handleSearch = e => {
        const data = linksFromServer.filter(link => {
            link.title = link.title != null ? link.title : ""
            return link.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setLinks(data)
    }


    return (
        <Sidebar title='My Links' >
            <div className='my-4 d-flex' >
                <span className='me-3 fs-6 fw-bold' >All Link</span>
                <span className='me-5 btn btn-warning' >{links && links.length}</span>
                <Input
                    className='me-3 shadow-none'
                    style={styles.searchInput}
                    placeholder='ex. Your Title'
                    onChange={handleSearch}
                />
            </div>
            <div style={{ height: 35 }} ></div>
            <LinkDeleteModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                id={id}
                setLinksFromServer={setLinksFromServer}
                setLinks={setLinks}
                setAlert={setAlert}
            />
            {alert.display ? <Alert color={alert.color} >{alert.message}</Alert> : <></>}
            {links && links.map((link, i) => <Link
                id={link.id}
                title={link.title}
                url={link.url}
                view={link.view}
                photo={link.photo}
                type={link.type}
                uniqid={link.uniqid}
                handleDeleteButton={handleDeleteButton}

            />)}

        </Sidebar>
    )
}

const styles = {
    searchInput: {
        border: 'none', borderBottom: '2px solid  grey',
        width: '80%',
        backgroundColor: '#ECECEC',
    },
    action: {
        border: '2px solid gray',
        borderRadius: 10,
        cursor: 'pointer'
    }
}

export default MyLink