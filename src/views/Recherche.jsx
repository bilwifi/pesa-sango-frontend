import React from 'react'
import { Container,  Input } from 'semantic-ui-react'
import Wrapper from "../components/Wrapper"


const Recherche = () => {
    return (
        <>
            <Wrapper>
                <Container>
                    <h1>Rechercher</h1>
                    {/* <Form> */}
                    <Input fluid icon='search' placeholder='Rechercher' />
                    {/* </Form> */}
                </Container>    
            </Wrapper>
        </>
    )
}


export default Recherche;