import { useEffect } from 'react'
import { API } from '../config/api'

import './template1.css'

const Template1 = ({ data }) => {

    useEffect(() => {
        (async () => {
            await API.get(`/link/${data.id}/count`)
        })()
    }, [])

    const openNewTab = link => window.open(link, '_blank')

    return (
        <div style={{ textAlign: 'center' }} >
            <div className='profile' >
                <img src={`http://localhost:3000/uploads/${data.photo}`} alt="" />
                <div className="title">{data.title}</div>
                <div className="description">{data.description}</div>
            </div>
            <div className='template1-link'>
                <div
                    onClick={() => { openNewTab(data.facebook) }}
                    style={{ cursor: 'pointer' }}
                >
                    <span className='icon' ><i className='fab fa-facebook-square' ></i> </span><span className='text' >Facebook</span>
                </div>
                <div
                    onClick={() => { openNewTab(data.instagram) }}
                    style={{ cursor: 'pointer' }}
                >
                    <span className='icon' ><i className='fab fa-instagram' ></i> </span><span className='text' >Instagram</span>
                </div>
                <div
                    onClick={() => { openNewTab(data.twitter) }}
                    style={{ cursor: 'pointer' }}
                >
                    <span className='icon' ><i className='fab fa-twitter' ></i> </span><span className='text' >Twitter</span>
                </div>
                <div
                    onClick={() => { openNewTab(data.youtube) }}
                    style={{ cursor: 'pointer' }}
                >
                    <span className='icon' ><i className='fab fa-youtube' ></i> </span><span className='text' >Youtube</span>
                </div>
                <div
                    onClick={() => { openNewTab(`https://wa.me/${data.whatsapp}`) }}
                    style={{ cursor: 'pointer' }}
                >
                    <span className='icon' ><i className='fab fa-whatsapp' ></i> </span><span className='text' >WhatsApp</span>
                </div>
            </div>
        </div>
    )
}

export default Template1