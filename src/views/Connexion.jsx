import React from 'react'
import { Form, Container } from 'semantic-ui-react'
import Header from "../components/Header"
import Input from "../components/Input"
import Button from "../components/Button"
import styled from "styled-components";


const DivStyle = styled.div`
 padding-top: 20vh
`;

const Connexion = () => {
   return ( 
        <>
            <Header /> 
            <DivStyle>
                <Container>
                    <Form>
                        <Input placeholder="Nom Utilisateur" type="text" />
                        <Input  placeholder="Mot de Passe" type="password" />
                        <Button backgroundbutton="red" color ="white"   namebutton="Se connecter" />
                    </Form>
                </Container>
            </DivStyle>
        </>
   )
}


export default Connexion