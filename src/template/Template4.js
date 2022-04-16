import { useEffect } from 'react'
import { API } from '../config/api'

import './template4.css'

const Template4 = ({ data }) => {

    useEffect(() => {
        (async () => {
            await API.get(`/link/${data.id}/count`)
        })()
    }, [])


    const openNewTab = link => window.open(link, '_blank')

    return (
        <div
            className="template4-wrapper"
            style={{ backgroundImage: `url(http://localhost:3000/uploads/${data.photo})` }}
        >
            <div className="template4-card">
                <div className="title">{data.title}</div>
                <div className="description">{data.description}</div>
                <div className='template4-link'>
                    <div
                        onClick={() => { openNewTab(data.lazada) }}
                        style={{ cursor: 'pointer' }}
                    >
                        <span className='icon' ><i className='fa fa-shopping-bag' ></i> </span><span className='text' >LAZADA</span><span className='button' >BUY</span>
                    </div>
                    <div
                        onClick={() => { openNewTab(`https://wa.me/${data.whatsapp}`) }}
                        style={{ cursor: 'pointer' }}

                    >
                        <span className='icon' ><i className='fab fa-whatsapp' ></i> </span><span className='text' >WhatsApp</span><span className='button' >Order</span>
                    </div>
                </div>
                <div className='template4-link2'>
                    <div
                        onClick={() => { openNewTab(data.facebook) }}
                        style={{ cursor: 'pointer' }}
                    >
                        <span><i className='fab fa-facebook fa-xl' ></i></span>
                    </div>
                    <div
                        onClick={() => { openNewTab(data.instagram) }}
                        style={{ cursor: 'pointer' }}
                    >
                        <span><i className='fab fa-instagram fa-xl' ></i></span>
                    </div>
                    <div
                        onClick={() => { openNewTab(data.twitter) }}
                        style={{ cursor: 'pointer' }}
                    >
                        <span><i className='fab fa-twitter fa-xl' ></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Template4