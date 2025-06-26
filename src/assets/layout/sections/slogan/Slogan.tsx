import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../../conponents/SectionTitle";
import {Button} from "../../../../conponents/Button";
import {Container} from "../../../../conponents/Container";
import {FlexWrapper} from "../../../../conponents/FlexWrapper";

export const Slogan: React.FC = () => {
    return (
        <SSlogan>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SectionTitle>I Am Available For Freelance</SectionTitle>
                    <Button>Hire me</Button>
                </FlexWrapper>
            </Container>
        </SSlogan>
    );
};

const SSlogan = styled.section`
    background-color: lightgreen;
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`