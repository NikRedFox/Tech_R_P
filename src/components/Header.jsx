import styled from 'styled-components'
import Logo from '../assets/images/Logo-TechRP-2.svg'
import IconWhats from '../assets/images/Whats-logo.svg'
import LoginIcon from '../assets/images/login-icon.png'

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

    .button-container a{
        text-decoration: none;
        color: var(--color-primary-blue);
    }
`

export default function Header(){
    return(
        <StyledHeader>
            <img src={Logo} alt="Logo-Tech-R&P"/>
        
            <div className="header-container">
                <nav className="header-links">
                    <ul className="header-items">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Quem somos</a></li>
                        <li><a href="/">Produtos</a></li>
                        <li><a href="/">Descarte</a></li>
                    </ul>
                </nav>

                <nav className="button-container">
                    <a href="/">Contato</a>                
                    <img src={IconWhats} alt="Whatsapp-icon" title="Whatsapp-icon"/>                
                </nav>

                <nav className="button-container">
                    <a href="/">Login</a>                
                    <img src={LoginIcon} alt="Login-icon" title="Login-icon"/>                
                </nav>
            </div>
        </StyledHeader>
    )
}