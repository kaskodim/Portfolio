import React, {FC, useState} from 'react';
import {Logo} from "../../../conponents/logo/Logo";
import {Container} from "../../../conponents/Container";
import {FlexWrapper} from "../../../conponents/FlexWrapper";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Heder_Styles"

export const Header: FC = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>

                    {width < breakpoint ? <MobileMenu/>
                                        : <DesktopMenu/>}

                </FlexWrapper>
            </Container>
        </S.Header>
    );
};
