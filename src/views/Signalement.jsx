import React from 'react';
import Header from '../components/Header'
import imag from '../images/homepage.jpeg'

import styled from "styled-components";
import Card from '../components/card';
const Corps = styled.body`
    .body{
        margin-left: 6%
    }
`

const Signalement = () => {
    return (
        <Corps>
            <Header/>
            <div className='body'>
                
                <h2>Liste des signalement</h2>
                <Card
                image = {imag}
                descriptionBtn="kjcniohecohopwerilmfmpe mpmpomreoklcnlkdfjn kjoorwi"
                />
                <Card
                image = {imag}
                descriptionBtn="kjcniohecohopwerilmfmpe mpmpomreoklcnlkdfjn kjoorwi"
                />
                <Card
                image = {imag}
                descriptionBtn="kjcniohecohopwerilmfmpe mpmpomreoklcnlkdfjn kjoorwi"
                />


            </div>
        </Corps>

    )
}

export default Signalement;