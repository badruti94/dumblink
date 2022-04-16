import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Alert, Button, Card, CardBody, Col, Form, Input, Label, Row } from 'reactstrap'
import FormInput from '../component/FormInput'
import Sidebar from '../component/Sidebar'
import { API } from '../config/api'

const Template1 = () => {

    const [img, setImg] = useState('/image1.png')
    const [alert, setAlert] = useState({
        display: false,
        color: '',
        message: '',
    })
    const [form, setForm] = useState({
        type: "template1",
        title: "",
        description: "",
        photo: "",
        facebook: "",
        instagram: "",
        twitter: "",
        youtube: "",
        whatsapp: "",

    });
    const handleOnChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
        });

        if (e.target.type === "file") {
            const file = e.target.files[0]
            setImg(URL.createObjectURL(file))
        }
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
                "Content-type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            },
        };

        const formData = new FormData();
        formData.set("userId", localStorage.getItem('id'));
        formData.set("type", form.type);
        formData.set("title", form.title);
        formData.set("description", form.description);
        formData.set("facebook", form.facebook);
        formData.set("instagram", form.instagram);
        formData.set("twitter", form.twitter);
        formData.set("youtube", form.youtube);
        formData.set("whatsapp", form.whatsapp);
        if (form.photo != "" && form.photo != null) {
            formData.set("photo", form.photo[0], form.photo[0].name);
        }

        (async () => {
            try {
                await API.post("/link", formData, config)
                setForm({
                    type: "template1",
                    title: "",
                    description: "",
                    photo: null,
                    facebook: "",
                    instagram: "",
                    twitter: "",
                    youtube: "",
                    whatsapp: "",
                })
                setImg('/image1.png')
                setAlert({
                    display: true,
                    color: 'success',
                    message: 'Added successfully'
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
        <Sidebar title='Template' >
            <div className='d-flex justify-content-between my-4' >
                <span className='fs-6 fw-bold' >Create Link</span>
                <Button className='ms-5 text-white fw-bold' color='warning'
                    onClick={handleSubmit}
                >Publish Link</Button>
            </div>
            <Row className='mt-3' >
                <Col className='col-md-8' >
                    <Card>
                        <CardBody>
                            {alert.display ? <Alert color={alert.color} >{alert.message}</Alert> : <></>}

                            <Form>
                                <Label for='file' ><img src={img} alt="" width={80} /></Label>
                                <Input
                                    className='d-none'
                                    id='file'
                                    type='file'
                                    name='photo'
                                    onChange={handleOnChange}
                                />
                                <FormInput
                                    Label='Title'
                                    placeholder='Your Title'
                                    name='title'
                                    value={form.title}
                                    onChange={handleOnChange}
                                />
                                <FormInput
                                    Label='Description'
                                    placeholder='Your Description'
                                    name='description'
                                    value={form.description}
                                    onChange={handleOnChange}
                                />
                                <FormInput
                                    Label='Facebook'
                                    placeholder='Your Facebook'
                                    name='facebook'
                                    value={form.facebook}
                                    onChange={handleOnChange}
                                />
                                <FormInput
                                    Label='Instagram'
                                    placeholder='Your Instagram'
                                    name='instagram'
                                    value={form.instagram}
                                    onChange={handleOnChange}
                                />
                                <FormInput
                                    Label='Twitter'
                                    placeholder='Your Twitter'
                                    name='twitter'
                                    value={form.twitter}
                                    onChange={handleOnChange}
                                />
                                <FormInput
                                    Label='Youtube'
                                    placeholder='Your Youtube'
                                    name='youtube'
                                    value={form.youtube}
                                    onChange={handleOnChange}
                                />
                                <FormInput
                                    Label='Whatsapp'
                                    placeholder='Your Whatsapp'
                                    name='whatsapp'
                                    value={form.whatsapp}
                                    onChange={handleOnChange}
                                />
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col className='col-md-4 text-center' >
                    <img className='mt-5' src='/template1.png' alt="" width={250} />
                </Col>
            </Row>
        </Sidebar>
    )
}
const Template2 = () => {

    const [img, setImg] = useState('/image1.png')
    const [alert, setAlert] = useState({
        display: false,
        color: '',
        message: '',
    })
    const [form, setForm] = useState({
        type: "template2",
        title: "",
        description: "",
        photo: "",
        facebook: "",
        galery: "",
        contact: "",
        about: "",
        vlog: "",


    });
    const handleOnChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
        });

        if (e.target.type === "file") {
            const file = e.target.files[0]
            setImg(URL.createObjectURL(file))
        }
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
                "Content-type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            },
        };

        const formData = new FormData();
        formData.set("userId", localStorage.getItem('id'));
        formData.set("type", form.type);
        formData.set("title", form.title);
        formData.set("description", form.description);
        formData.set("facebook", form.facebook);
        formData.set("galery", form.galery);
        formData.set("contact", form.contact);
        formData.set("about", form.about);
        formData.set("vlog", form.vlog);
        if (form.photo != "" && form.photo != null) {
            formData.set("photo", form.photo[0], form.photo[0].name);
        }

        (async () => {
            try {
                await API.post("/link", formData, config)
                setForm({
                    type: "template2",
                    title: "",
                    description: "",
                    photo: "",
                    facebook: "",
                    galery: "",
                    contact: "",
                    about: "",
                    vlog: "",
                })
                setImg('/image1.png')
                setAlert({
                    display: true,
                    color: 'success',
                    message: 'Added successfully'
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
        <Sidebar title='Template' >
            <div className='d-flex justify-content-between my-4' >
                <span className='fs-6 fw-bold' >Create Link</span>
                <Button className='ms-5 text-white fw-bold' color='warning'
                    onClick={handleSubmit}
                >Publish Link</Button>
            </div>
            <Row className='mt-3' >
                <Col className='col-md-8' >
                    <Card>
                        <CardBody>
                            {alert.display ? <Alert color={alert.color} >{alert.message}</Alert> : <></>}

                            <Form>
                                <Label for='file' ><img src={img} alt="" width={80} /></Label>
                                <Input
                                    className='d-none'
                                    id='file'
                                    type='file'
                                    name='photo'
                                    onChange={handleOnChange}
                                />
                                <FormInput
                                    Label='Title'
                                    placeholder='Your Title'
                                    name='title'
                                    value={form.title}
                                    onChange={handleOnChange}
                                />
                                <FormInput
                                    Label='Description'
                                    placeholder='Your Description'
                                    name='description'
                                    value={form.description}
                                    onChange={handleOnChange}
                                />
                                <FormInput
                                    Label='Vlog'
                                    placeholder='Your Vlog'
                                    name='vlog'
                                    value={form.vlog}
                                    onChange={handleOnChange}
                                />
                                <FormInput
                                    Label='Facebook'
                                    placeholder='Your Facebook'
                                    name='facebook'
                                    value={form.facebook}
                                    onChange={handleOnChange}
                                />
                                <FormInput
                                    Label='Galery'
                                    placeholder='Your Galery'
                                    name='galery'
                                    value={form.galery}
                                    onChange={handleOnChange}
                                />
                                <FormInput
                                    Label='Contact'
                                    placeholder='Your Contact'
                                    name='contact'
                                    value={form.contact}
                                    onChange={handleOnChange}
                                />
                                <FormInput
                                    Label='About'
                                    placeholder='Your About'
                                    name='about'
                                    value={form.about}
                                    onChange={handleOnChange}
                                />
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col className='col-md-4 text-center' >
                    <img className='mt-5' src='/template2.png' alt="" width={250} />
                </Col>
            </Row>
        </Sidebar>
    )
}
const Template3 = () => {

    const [img, setImg] = useState('/image1.png')
    const [alert, setAlert] = useState({
        display: false,
        color: '',
        message: '',
    })
    const [form, setForm] = useState({
        type: "template3",
        description: "",
        photo: "",
        whatsapp: "",
        web: "",


    });
    const handleOnChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
        });

        if (e.target.type === "file") {
            const file = e.target.files[0]
            setImg(URL.createObjectURL(file))
        }
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
                "Content-type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            },
        };

        const formData = new FormData();
        formData.set("userId", localStorage.getItem('id'));
        formData.set("type", form.type);
        formData.set("description", form.description);
        formData.set("whatsapp", form.whatsapp);
        formData.set("web", form.web);
        if (form.photo != "" && form.photo != null) {
            formData.set("photo", form.photo[0], form.photo[0].name);
        }

        (async () => {
            try {
                await API.post("/link", formData, config)
                setForm({
                    type: "template3",
                    description: "",
                    photo: "",
                    whatsapp: "",
                    web: "",
                })
                setImg('/image1.png')
                setAlert({
                    display: true,
                    color: 'success',
                    message: 'Added successfully'
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
        <Sidebar title='Template' >
            <div className='d-flex justify-content-between my-4' >
                <span className='fs-6 fw-bold' >Create Link</span>
                <Button className='ms-5 text-white fw-bold' color='warning'
                    onClick={handleSubmit}
                >Publish Link</Button>
            </div>
            <Row className='mt-3' >
                <Col className='col-md-8' >
                    <Card>
                        <CardBody>
                            {alert.display ? <Alert color={alert.color} >{alert.message}</Alert> : <></>}

                            <Form>
                                <Label for='file' ><img src={img} alt="" width={80} /></Label>
                                <Input
                                    className='d-none'
                                    id='file'
                                    type='file'
                                    name='photo'
                                    onChange={handleOnChange}
                                />
                                <FormInput
                                    Label='Description'
                                    placeholder='Your Description'
                                    name='description'
                                    value={form.description}
                                    onChange={handleOnChange}
                                />
                                <FormInput
                                    Label='WhatsApp'
                                    placeholder='Your WhatsApp'
                                    name='whatsapp'
                                    value={form.whatsapp}
                                    onChange={handleOnChange}
                                />
                                <FormInput
                                    Label='Web'
                                    placeholder='Your Web'
                                    name='web'
                                    value={form.web}
                                    onChange={handleOnChange}
                                />
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col className='col-md-4 text-center' >
                    <img className='mt-5' src='/template3.png' alt="" width={250} />
                </Col>
            </Row>
        </Sidebar>
    )
}
const Template4 = () => {

    const [img, setImg] = useState('/image1.png')
    const [alert, setAlert] = useState({
        display: false,
        color: '',
        message: '',
    })
    const [form, setForm] = useState({
        type: "template4",
        title: "",
        description: "",
        photo: "",
        facebook: "",
        instagram: "",
        twitter: "",
        whatsapp: "",
        lazada: "",

    });
    const handleOnChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
        });

        if (e.target.type === "file") {
            const file = e.target.files[0]
            setImg(URL.createObjectURL(file))
        }
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
                "Content-type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            },
        };

        const formData = new FormData();
        formData.set("userId", localStorage.getItem('id'));
        formData.set("type", form.type);
        formData.set("title", form.title);
        formData.set("description", form.description);
        formData.set("facebook", form.facebook);
        formData.set("instagram", form.instagram);
        formData.set("twitter", form.twitter);
        formData.set("whatsapp", form.whatsapp);
        formData.set("lazada", form.lazada);
        if (form.photo != "" && form.photo != null) {
            formData.set("photo", form.photo[0], form.photo[0].name);
        }

        (async () => {
            try {
                await API.post("/link", formData, config)
                setForm({
                    type: "template4",
                    title: "",
                    description: "",
                    photo: null,
                    facebook: "",
                    instagram: "",
                    twitter: "",
                    whatsapp: "",
                    lazada: "",
                })
                setImg('/image1.png')
                setAlert({
                    display: true,
                    color: 'success',
                    message: 'Added successfully'
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
        <Sidebar title='Template' >
            <div className='d-flex justify-content-between my-4' >
                <span className='fs-6 fw-bold' >Create Link</span>
                <Button className='ms-5 text-white fw-bold' color='warning'
                    onClick={handleSubmit}
                >Publish Link</Button>
            </div>
            <Row className='mt-3' >
                <Col className='col-md-8' >
                    <Card>
                        <CardBody>
                            {alert.display ? <Alert color={alert.color} >{alert.message}</Alert> : <></>}

                            <Form>
                                <Label for='file' ><img src={img} alt="" width={80} /></Label>
                                <Input
                                    className='d-none'
                                    id='file'
                                    type='file'
                                    name='photo'
                                    onChange={handleOnChange}
                                />
                                <FormInput
                                    Label='Title'
                                    placeholder='Your Title'
                                    name='title'
                                    value={form.title}
                                    onChange={handleOnChange}
                                />
                                <FormInput
                                    Label='Description'
                                    placeholder='Your Description'
                                    name='description'
                                    value={form.description}
                                    onChange={handleOnChange}
                                />
                                <FormInput
                                    Label='Facebook'
                                    placeholder='Your Facebook'
                                    name='facebook'
                                    value={form.facebook}
                                    onChange={handleOnChange}
                                />
                                <FormInput
                                    Label='Instagram'
                                    placeholder='Your Instagram'
                                    name='instagram'
                                    value={form.instagram}
                                    onChange={handleOnChange}
                                />
                                <FormInput
                                    Label='Twitter'
                                    placeholder='Your Twitter'
                                    name='twitter'
                                    value={form.twitter}
                                    onChange={handleOnChange}
                                />
                                <FormInput
                                    Label='Whatsapp'
                                    placeholder='Your Whatsapp'
                                    name='whatsapp'
                                    value={form.whatsapp}
                                    onChange={handleOnChange}
                                />
                                <FormInput
                                    Label='Lazada'
                                    placeholder='Your Lazada'
                                    name='lazada'
                                    value={form.lazada}
                                    onChange={handleOnChange}
                                />
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col className='col-md-4 text-center' >
                    <img className='mt-5' src='/template4.png' alt="" width={250} />
                </Col>
            </Row>
        </Sidebar>
    )
}


const AddLink = () => {
    const params = useParams()

    switch (params.name) {
        case 'template1':
            return (<Template1 />)
        case 'template2':
            return (<Template2 />)
        case 'template3':
            return (<Template3 />)
        default:
            return (<Template4 />)
    }
}

export default AddLink