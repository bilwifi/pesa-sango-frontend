import React from 'react'

import styled from "styled-components";

const CardStyle = styled.body`
div{display: flex;}
.photo{
    height: 90px;
    width: 100px;
    border-radius: 15px;
    margin-top: 20px;
}
.paragraphe{
    width: 60%;
    height: 90px;
    padding-left: 20px;
    margin-right: 25px;
    margin-top: 20px;
    max-width: 100%
}
`

const Card = (props,descriptionBtn, image) =>{
    return(
        <CardStyle>
            <div>
                <img src={props.image} className='photo' alt=''/>
                <span className='paragraphe'>
                    {props.descriptionBtn}
                </span>
            </div>   
        </CardStyle>

    )
}

export default Card;