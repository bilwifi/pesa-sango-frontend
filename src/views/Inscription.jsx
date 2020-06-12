import React from 'react'
import { Form, Container,Checkbox,Grid,Segment,Icon } from 'semantic-ui-react'
import Input from "../components/Input"
import Button from "../components/Button"
import Header from '../components/Header'
import '../views/css/Inscription.css'



const Inscription = () => {
    return (
        <Container>
            <Header/>
            
             <p id="para">Inscription</p>
            
            <Form>
                <Input label='Nom utilisateur' placeholder='votre nom' type='text'/>
                <Input label='Télephone' placeholder='Télephone' type='number'/>
                <Input label='Email' placeholder='Email' type='Email'/>
                <Input label='Mot de passe' placeholder='Mot de passe' type='text'/>
                <Input label='Confirmer mot de passe' placeholder='Confirmer le mot de passe' type='text'/>
                <Checkbox radio label="j'ai lu et j'accepte les conditions d'utilisation et la politique de confidentialité de PESA SANGO" />
            </Form><br/><br/>
            <div>
                < Button backgroundbutton='red' color='white' namebutton="S'inscrire"/>
            </div><br/><br/>
            
             <p>Ou s'inscrire avec</p>
            

            <div>
                 <Grid columns='equal'>
                 <Grid.Row>
                    <Grid.Column>
                        <Segment id='icon1'> <a  id="lien1" href="">< Icon id="fb" name='facebook f' /> Facebook</a></Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment id='icon2'><a id="lien2"href="">< Icon name='twitter' color='twitter'/> twitter</a></Segment>
                    </Grid.Column>
                </Grid.Row>
                 </Grid>
            </div><br/><br/>
            <div>
                 <p>Vous avez déja un compte?</p>
            </div>

        </Container>
           
    )
}

export default Inscription 