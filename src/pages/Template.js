import { Link } from 'react-router-dom'
import {
    Col, Row
} from 'reactstrap'
import Sidebar from '../component/Sidebar'

const List = (props) => {
    const { name } = props

    return (
        <Col className='col-md-3 mt-3 mb-3'>
            <Link to={'/template/' + name}>
                <img src={`${name}.png`} alt="" width={150} />
            </Link>
        </Col>
    )
}

const Template = () => {
    return (
        <Sidebar title='Template' >
            <Row style={{ width: '900px' }} >
                <List name='template1' />
                <List name='template2' />
                <List name='template3' />
                <List name='template4' />
            </Row>
        </Sidebar>
    )
}

export default Template