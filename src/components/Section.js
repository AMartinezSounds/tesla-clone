import React from 'react'
import styled from 'styled-components'

function Section({title, description, leftBtnTxt, rightBtnTxt}) {
    return (
        <Wrap>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnTxt}
                    </LeftButton>
                    <RightButton>
                        {rightBtnTxt}
                    </RightButton>
                </ButtonGroup>
                <DownArrow src="images/down-arrow.svg" />
            </Buttons>
            
        </Wrap>
    )
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`;

const Buttons = styled.div`

`;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`;

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, .8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: .85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`;

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: .65;
    color: black;
`;

const DownArrow = styled.img`
    /* margin-top: 20px; */
    height: 40px;
    animation: animateDown infinite 1.5s;
`;