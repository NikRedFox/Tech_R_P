import '../styles/Header.css'
import Logo from '../assets/images/Logo-TechRP-2.svg'
import IconWhats from '../assets/images/Whats-logo.svg'
import LoginIcon from '../assets/images/login-icon.png'

export default function Header(){
    return(
        <header>
            <img src={Logo} alt="Logo-Tech-R&P"/>
        
            <div class="header-container">
                <nav class="header-links">
                    <ul class="header-items">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Quem somos</a></li>
                        <li><a href="/">Produtos</a></li>
                        <li><a href="/">Descarte</a></li>
                    </ul>
                </nav>

                <nav class="button-container">
                    <a href="/">Contato</a>                
                    <img src={IconWhats} alt="Whatsapp-icon" title="Whatsapp-icon"/>                
                </nav>

                <nav class="button-container">
                    <a href="/">Login</a>                
                    <img src={LoginIcon} alt="Login-icon" title="Login-icon"/>                
                </nav>
            </div>
        </header>
    )
}