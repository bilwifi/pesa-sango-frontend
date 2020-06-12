import React from 'react'
import { Form, Container } from 'semantic-ui-react'
import Input from "../components/Input"

const Connexion = () => {
   return ( 
        <Container>
            <Form>
                <Input placeholder="Nom Utilisateur" type="text" />
                <Input  placeholder="Mot de Passe" type="password" />
            </Form>
        </Container>
   )
}


export default Connexion