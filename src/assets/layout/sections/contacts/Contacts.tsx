import React, {ElementRef, useRef} from 'react';
import {SectionTitle} from "../../../../conponents/SectionTitle";
import {Button} from "../../../../conponents/Button";
import {Container} from "../../../../conponents/Container";
import {S} from "./Contacts_Styles";
import emailjs from '@emailjs/browser';

export const Contacts: React.FC = () => {


    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return

        emailjs
            .sendForm('service_4n2w3p7', 'template_5m05lem', form.current, {
                publicKey: 'WmqsiOI-YlvTijjtJ',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset();
    };


    return (
        <S.Contacts id={'contacts'}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder={'name'} name={'user_name'}></S.Field>
                    <S.Field required placeholder={'email'} name={'email'} type={'email'}></S.Field>
                    <S.Field required placeholder={'subject'} name={'subject'}></S.Field>
                    <S.Field required placeholder={'message'} as={'textarea'} name={'message'}></S.Field>
                    <Button type={"submit"}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};

