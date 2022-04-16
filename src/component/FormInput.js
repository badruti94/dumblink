import React from 'react'
import { FormGroup, Input, Label } from 'reactstrap'

const FormInput = (props) => {
    const { label, placeholder, name, value, onChange } = props

    return (
        <FormGroup >
            <Label>{label}</Label>
            <Input
                className='shadow-none'
                name={name}
                value={value}
                onChange={onChange}
                style={{ border: 'none', borderBottom: '2px solid  grey' }}
                placeholder={`ex. ${placeholder}`} />
        </FormGroup>
    )
}

export default FormInput