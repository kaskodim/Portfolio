import React from 'react';
import {Icon} from "../../../conponents/Icon/Icon";
import {FlexWrapper} from "../../../conponents/FlexWrapper";
import {S} from "./Footer_Styles";


const socialItemData = [
    {
        iconId: 'instagram'
    },
    {
        iconId: 'telegram'
    },
    {
        iconId: 'vk'
    },
    {
        iconId: 'linkedin'
    },
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.Name>Dmitriy</S.Name>
                <S.SocialList>

                    {socialItemData.map((s, index) => {
                        return (
                            <S.SocialItem key={index}>
                                <S.SocialLink>
                                    <Icon iconId={s.iconId} width={'21'} height={'21'}
                                          viewBox={'0,0,21,21'}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}

                </S.SocialList>
                <S.Copyright>© 2023 Dmitriy Gulevich, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

