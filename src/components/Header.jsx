import styled from 'styled-components'
import Logo from '../assets/images/Logo-TechRP-2.svg'
import IconWhats from '../assets/images/WhatsIcon.svg'
import LoginIcon from '../assets/images/LoginIcon.svg'
import PerfilIcon from '../assets/images/Perfil.svg'
import Input from '../components/Input'

const StyledHeader = styled.header`
    display: flex;
    background-color: var(--color-neutral-black);
    justify-content: space-around;    

    img{
        width: 10%;
    }

    .header-container{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 100px;
    }

    .header-items{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 100px;
    }

    .header-items a{
        text-decoration:  none;
        color: var(--color-neutral-white);
    }

    .header-links{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .buttonWrapper{
        display: flex;
        gap: 30px;
    }

    .button-container {
        width: 40px;
        height: 40px;
    }
    .button-container img{
        width: 100%;
    }
`

export default function Header(){
    return(
        <StyledHeader>         
        
            <div className="header-container">
                <img src={Logo} alt="Logo-Tech-R&P"/>

                <nav className="header-links">
                    <ul className="header-items">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Quem somos</a></li>
                        <li><a href="/">Produtos</a></li>
                        <li><a href="/">Descarte</a></li>
                    </ul>
                    <Input width="900px"/>
                </nav>

                <div className="buttonWrapper">
                    <nav className="button-container">
                        <a href="/"><img src={PerfilIcon} alt="Perfil-icon" title="Login-icon"/></a>                
                    </nav>

                    <nav className="button-container">
                        <a href="/"><img src={IconWhats} alt="Whatsapp-icon" title="Whatsapp-icon"/></a>                
                    </nav>

                    <nav className="button-container">
                        <a href="/"><img src={LoginIcon} alt="Login-icon" title="Login-icon"/></a>                
                    </nav>
                </div>
                                
            </div>
        </StyledHeader>
    )
}