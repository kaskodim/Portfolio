import React from 'react';
import {FlexWrapper} from "../../../../conponents/FlexWrapper";
import {SectionTitle,} from "../../../../conponents/SectionTitle";
import {Skill} from "./Skill/Skill";
import {Container} from "../../../../conponents/Container";
import {S} from "./Skills_Styles";
import { Fade } from "react-awesome-reveal";


const skillData = [
    {
        iconId: 'code',
        title: 'html5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'css',
        title: 'css3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'react',
        title: 'React',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'typeScript',
        title: 'typescript',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'styledComponents',
        title: 'styled components',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'figma',
        title: 'WEB DESIgN',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
]

export const Skills = () => {
    return (
        <S.Skills id={'skills'}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify="space-between">

                    <Fade cascade={true} damping={0.2}>
                        {skillData.map((s, index) => {
                            return <Skill   iconId = {s.iconId} key={index}
                                            title = {s.title}
                                            description = {s.description}/>
                        })}
                    </Fade>



                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};

