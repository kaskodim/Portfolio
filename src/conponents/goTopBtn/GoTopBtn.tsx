import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../Icon/Icon";
import {animateScroll as scroll} from "react-scroll/modules";
import {theme} from "../../styles/Theme";

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])

    return (
        <>
            {showBtn && (
                <SGoTopBtn onClick={() => {
                    scroll.scrollToTop()
                }}>
                    <Icon iconId={'arrowGoTop'} height={'15'} width={'16'} viewBox={'0 0 16 15'}/>
                </SGoTopBtn>
            )}
        </>
    );
};

const SGoTopBtn = styled.button`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
`
