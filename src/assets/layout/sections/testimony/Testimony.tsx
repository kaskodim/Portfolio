import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../../conponents/SectionTitle";
import {Icon} from "../../../../conponents/Icon/Icon";
import {Slider} from "../../../../conponents/Slider/Slider";
import {FlexWrapper} from "../../../../conponents/FlexWrapper";
import {S} from "../skills/Skills_Styles";
import {Container} from "../../../../conponents/Container";

export const Testimony: React.FC = () => {
    return (
        <STestimony id={'testimony'}>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'}>
                    <S.IconWrapper>
                        <Icon iconId={'quote'}/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </STestimony>
    );
};

const STestimony = styled.section`
    position: relative;
    background-color: lightgreen;
    ${S.IconWrapper}{
        margin: 40px 0 72px;
    }
`