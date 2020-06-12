import React from 'react'
import { Form, Container } from 'semantic-ui-react'
import Header from "../components/Header"
import Input from "../components/Input"
import Button from "../components/Button"
import styled from "styled-components";
import { Card, Icon } from 'semantic-ui-react'


const DivStyle = styled.div`
    width: 60%;
    margin: auto;
    padding-bottom: 13px
`
const Pstyle = styled.p`
    text-align: center;
    color: red
`
const Signaler = () => {
   return (
        <>
            <Header />
            <Container>
                <h1>Signaler un problème</h1>
                <Form>
                    <Form.Field control='select'>
                        <option value='male'>Selectionnez la catégorie</option>
                        <option value='female'>Female</option>
                    </Form.Field>
                    <Form.Field control='select'>
                        <option value=''>Selectionnez la ville</option>
                        <option value='female'>Female</option>
                    </Form.Field>
                    <Form.Field control='select'>
                        <option value='male'>Selectionnez la commune</option>
                        <option value='Bandalungwa'>Bandalungwa</option>
                        <option value='Barumbu'>Barumbu</option>
                    </Form.Field>
                    <Input placeholder="Adresse (Ex)" />
                    <Form.Field placeholder="Decrivez l'incident ici..." control='textarea' rows='4' />
                    <DivStyle>
                        <Card>
                            {/* <Card.Content description={description} /> */}
                            <Card.Content extra>
                                <Icon name='camera' size={"big"} />
                                <Icon name='image outline' size={"big"} />
                                <Card.Content description={"Inserez une image de l'incident"} />
                            </Card.Content>
                            {/* <Card.Content header='About Amy' /> */}
                        </Card>
                    </DivStyle>
                    <Input placeholder="Indiquez votre nom" />
                    <Form.Field control='select'>
                        <option value='male'>Institution à contacter</option>
                        <option value='female'>Female</option>
                    </Form.Field>
                    <Button backgroundbutton="red" color ="white"   namebutton="Soumettre" />
                    <Pstyle>*L'incident ne sera pas modifiable une fois posté</Pstyle>
                </Form>
            </Container>
        </>
   )
}

export default Signaler;