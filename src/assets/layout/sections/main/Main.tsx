import React from 'react';
import photoMain from '../../../images/photo.webp';
import {S} from './Main_Styles'
import {FlexWrapper} from "../../../../conponents/FlexWrapper";
import {Container} from "../../../../conponents/Container";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


export const Main: React.FC = () => {
    return (
        <S.Main id={'home'}>
            <Container>
                <FlexWrapper align="center" justify="space-around" wrap="wrap">
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>
                            I am <span>Dmitriy Gulevich</span>
                        </S.Name>

                        <S.MainTitle>
                            <p>A Web Developer.</p>
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer.', 'A Frontend Developer.', 'A Web Designer.'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100,
                                }}
                            />
                        </S.MainTitle>
                    </div>


                    <Tilt
                        className="parallax-effect-img"
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={1.1}
                        gyroscope={true}
                    >
                    <S.PhotoWrapper>
                        <S.Photo src={photoMain} alt={'photoMain'}/>
                    </S.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.Main>

    );
};
