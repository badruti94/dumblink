import { useEffect } from 'react'
import { API } from '../config/api'

import './template3.css'

const Template3 = ({ data }) => {

    useEffect(() => {
        (async () => {
            await API.get(`/link/${data.id}/count`)
        })()
    }, [])

    const openNewTab = link => window.open(link, '_blank')

    return (
        <div
            className="template3-wrapper"
            style={{ backgroundImage: `url(http://localhost:3000/uploads/${data.photo})` }}
        >
            <div className="template3-card">
                <img src={`http://localhost:3000/uploads/${data.photo}`} alt="" />
                <div className="title">{data.user.name}</div>
                <div className="description">{data.description}</div>
                <div className='template3-link'>
                    <div
                        onClick={() => { openNewTab(`mailto:${data.user.email}`) }}
                        style={{ cursor: 'pointer' }}

                    >
                        <span><i className='fa fa-envelope fa-xl' ></i></span>
                    </div>
                    <div
                        onClick={() => { openNewTab(`https://wa.me/${data.whatsapp}`) }}
                        style={{ cursor: 'pointer' }}

                    >
                        <span><i className='fab fa-whatsapp fa-xl' ></i></span>
                    </div>
                    <div
                        onClick={() => { openNewTab(data.web) }}
                        style={{ cursor: 'pointer' }}

                    >
                        <span><i className='fas fa-globe fa-xl' ></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Template3