import React from 'react'
import { Form, Container,Checkbox,Grid,Segment,Icon } from 'semantic-ui-react'
import Input from "../components/Input"
import '../views/css/Inscription.css'



const Inscription = () => {
    return (
        <Container>

            <p>Inscription</p>
            <Form>
            <Input label='nom utilisateur' placeholder='votre nom' type='text'/>
            <Input label='Télephone' placeholder='Télephone' type='number'/>
            <Input label='Email' placeholder='Email' type='Email'/>
            <Input label='Mot de passe' placeholder='Mot de passe' type='text'/>
            <Input label='Confirmer mot de passe' placeholder='Confirmer le mot de passe' type='text'/>
            <Checkbox radio label="j'ai lu et j'accepte les conditions d'utilisation et la politique de confidentialité de PESA SANGO" />
            </Form><br/><br/>

            <p>Ou s'inscrire avec</p>
            <div>
                 <Grid columns='equal'>
                 <Grid.Row>
                    <Grid.Column>
                        <Segment>1</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>2</Segment>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <Segment> <Icon name='facebook' /> Facebook</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>4</Segment>
                    </Grid.Column>
                </Grid.Row>

                 </Grid>
            </div>

            <p>Vous avez déja un compte?</p>



           
        </Container>
           
    )
}

export default Inscription 