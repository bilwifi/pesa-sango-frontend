import React from 'react'
import { Form } from 'semantic-ui-react'


const Input = (props) => {
    return (
            <Form.Field>
                <div>
                    <label>{props.label}</label>
                    <input placeholder={props.placeholder} type={props.type} className='input' style= {{ borderRadius:'10px', fontSize:'12px', height:'50px', marginTop:'0px', marginBottom:'0px', border: '1px solid #77787B'}} />
                </div>
            </Form.Field>
    )
}

export default Input 