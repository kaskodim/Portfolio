import React from 'react';
import {Icon} from "../../../../../conponents/Icon/Icon";
import {FlexWrapper} from "../../../../../conponents/FlexWrapper";
import {S} from "../Skills_Styles";


type SkillPropsType = {
    iconId: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <FlexWrapper direction="column" align="center">

                <S.IconWrapper>
                    <Icon iconId={props.iconId}/>
                </S.IconWrapper>

                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillText>{props.description}</S.SkillText>
            </FlexWrapper>
        </S.Skill>
    );
};

