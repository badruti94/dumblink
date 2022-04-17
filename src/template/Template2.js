import { useEffect } from 'react'
import { API } from '../config/api'

import './template2.css'

const Template2 = ({ data }) => {

    useEffect(() => {
        (async () => {
            await API.get(`/link/${data.id}/count`)
        })()
    }, [])

    const openNewTab = link => window.open(link, '_blank')

    return (
        <div className='wrapper' >
            <div className='content' >
                <div className='profile' >
                    <img src={data.photo} alt="" />
                    <div className="title">{data.title}</div>
                    <div className="description">{data.description}</div>
                </div>
                <div className='link'>
                    <div
                        onClick={() => { openNewTab(data.vlog) }}
                        style={{ cursor: 'pointer' }}

                    >
                        <span>Vlog</span>
                    </div>
                    <div
                        onClick={() => { openNewTab(data.facebook) }}
                        style={{ cursor: 'pointer' }}

                    >
                        <span>Facebook</span>
                    </div>
                    <div
                        onClick={() => { openNewTab(data.galery) }}
                        style={{ cursor: 'pointer' }}

                    >
                        <span>Galery</span>
                    </div>
                    <div
                        onClick={() => { openNewTab(`tel:${data.contact}`) }}
                        style={{ cursor: 'pointer' }}

                    >
                        <span>Contact</span>
                    </div>
                    <div
                        onClick={() => { openNewTab(data.about) }}
                        style={{ cursor: 'pointer' }}

                    >
                        <span>About</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Template2