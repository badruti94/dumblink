import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Alert, Container } from 'reactstrap'
import { API } from '../config/api'
import Template1 from '../template/Template1'
import Template2 from '../template/Template2'
import Template3 from '../template/Template3'
import Template4 from '../template/Template4'

const Link = () => {
    const params = useParams()
    const [data, setData] = useState({ type: '' })

    useEffect(() => {
        (async () => {
            const response = await API.get(`/link-uniqid/${params.uniqid}`)
            if (response.data.data.link) {
                setData(response.data.data.link)
            } else {
                setData({ type: null })
            }
        })()
    }, [])

    switch (data.type) {
        case 'template1':
            return (<Template1 data={data} />)
        case 'template2':
            return (<Template2 data={data} />)
        case 'template3':
            return (<Template3 data={data} />)
        case 'template4':
            return (<Template4 data={data} />)
        case null:
            return (<Container className='mt-5' ><Alert color='danger' >Link not found</Alert></Container>)
        default:
            return (
                <div>Loading...</div>
            )
    }
}

export default Link