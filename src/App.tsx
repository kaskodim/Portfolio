import './App.css';
import {Header} from "./assets/layout/header/Heder";
import {Main} from "./assets/layout/sections/main/Main";
import {Works} from "./assets/layout/sections/works/Works";
import {Testimony} from "./assets/layout/sections/testimony/Testimony";
import {Contacts} from "./assets/layout/sections/contacts/Contacts";
import {Slogan} from "./assets/layout/sections/slogan/Slogan";
import {Footer} from "./assets/layout/footer/Footer";
import {Skills} from "./assets/layout/sections/skills/Skills";
import {Particle} from "./conponents/particle/Particle";
import {GoTopBtn} from "./conponents/goTopBtn/GoTopBtn";

function App() {
    return (
        <div>
            <Particle/>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contacts/>
            <Slogan/>
            <Footer/>
            <GoTopBtn/>
        </div>
    );
}

export default App;
