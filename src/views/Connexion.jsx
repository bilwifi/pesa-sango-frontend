import React from 'react'
import { Form, Container } from 'semantic-ui-react'
import Header from "../components/Header"
import Input from "../components/Input"
import Button from "../components/Button"
import styled from "styled-components";


const DivStyle = styled.div`
 padding-top: 5vh
`;

const LinkStyle = styled.div`
 text-align: center;
 padding-top: 20px
`;

const Connexion = () => {
   return ( 
        <>
            <Header /> 
            <br/> <br/> <br/>
            <DivStyle>
                <Container>
                    <h1>Connexion</h1>
                    <Form>
                        <Input placeholder="Nom Utilisateur" type="text" />
                        <Input  placeholder="Mot de Passe" type="password" />
                        <Button backgroundbutton="red" color ="white"   namebutton="Se connecter" />
                    </Form>
                    <LinkStyle>
                        <a href="/signup">S'inscrire</a> 
                    </LinkStyle>

                </Container>
            </DivStyle>
        </>
   )
}


export default Connexion