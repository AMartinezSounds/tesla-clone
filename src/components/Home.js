import React from 'react';
import styled from 'styled-components';

import Section from "./Section"
function Home() {
    return (
        <Container>
            <Section 
                title= "Model S"
                description= "Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnTxt= "Custom Order"
                rightBtnTxt= "Existing Inventory"
            />
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
`;

export default Home
