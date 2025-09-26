import styled from 'styled-components';
import Logo from '../assets/images/Logo-TechRP-2.svg';
import FaceIcon from '../assets/images/Face-logo.svg';
import InstaIcon from '../assets/images/Insta-logo.svg';
import TwitterIcon from '../assets/images/Twitter-logo.svg';
import LinkedinIcon from '../assets/images/Linkedin-logo.svg';
import InputCustom from '../components/Input';
import ButtonCustom from '../components/Button';

const StyledFooter = styled.footer`  
`

const FooterLinksContainer = styled.div`
    color: var(--color-neutral-01);
    background-color: var(--color-neutral-02); 
    display:  flex;
    height: 490px;
    padding: 20px 22px;
    justify-content: space-around;
     margin-top: 140px;
`

const LogoContainer = styled.div`    
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 535px;

    img{
        width: 25%;
    }    
`

const FooterButtonBox = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;

    input{
        width: 342px;
        height: 43px;
        border-radius: 20px;
        padding-left: 20px;
    }

    button{
        width: 89px;
        height: 43px;
        border-radius: 20px;
    }    
`

const FooterLinksList = styled.div`
    display: flex;
    gap: 100px;  
    margin-top: 50px;  
    font-size: var(--footer-links2);  

    ul{
        display:  flex;
        flex-direction: column;
        list-style: none;
        gap: 50px;
    }

    li:nth-of-type(1){
        font-size: var(--footer-links1);
    }

    a{
        text-decoration: none;
        color: var(--color-neutral-01);
    }    
`

const FooterBottom = styled.div`
    display: flex;
    color: var(--color-neutral-01);
    background-color: var(--color-neutral-02); 
    justify-content: space-between;
    padding: 5px 22px;
    font-size: var(--footer-links2);
    
`

const ToSBox = styled.div`
    display: flex;
    gap: 23px;        

    a{
        text-decoration: none;
        color: var(--color-neutral-01);
    }
`

export default function Footer() {
    return (
        <>
            <StyledFooter>
                <FooterLinksContainer>
                    <LogoContainer>
                        <img src={Logo} alt="Logo-Tech-R&P" />

                        <p>Se inscreva em nosso site para obter novas notícias</p>
                        <FooterButtonBox>
                            <InputCustom
                                placeholder="Seu e-mail"
                                width='342px'
                            />
                            <ButtonCustom>Enviar</ButtonCustom>
                        </FooterButtonBox>
                        <p>Se inscrevendo, você concorda com nossa Política de Privacidade e concorda em receber atualizações.</p>
                    </LogoContainer>

                    <FooterLinksList>
                        <ul>
                            <li>Links Rápidos</li>
                            <li><a href="/">Nossos Produtos</a></li>
                            <li><a href="/">Sobre nós</a></li>
                            <li><a href="/">Contato</a></li>
                            <li><a href="/">Descarte Responsavel</a></li>
                        </ul>

                        <ul>
                            <li>Mídias Sociais</li>
                            <li><img src={FaceIcon} alt="" /><a href="/"> Facebook</a></li>
                            <li><img src={InstaIcon} alt="" /><a href="/"> Instagram</a></li>
                            <li><img src={TwitterIcon} alt="" /><a href="/"> Twitter</a></li>
                            <li><img src={LinkedinIcon} alt="" /><a href="/"> Linkedln</a></li>
                        </ul>

                        <ul>
                            <li>Informações Adicionais</li>
                            <li>Endereço: Rua Oscar ,900</li>
                            <li>Email: techrp.suporte@gmail.com</li>
                        </ul>
                    </FooterLinksList>
                </FooterLinksContainer>

                <FooterBottom>
                    <p>© 2025 Tech R&P. All rights reserved.</p>
                    <ToSBox>
                        <a href="">Privacy Policy</a>
                        <a href="">Terms of Service</a>
                        <a href="">Cookie Settings</a>
                    </ToSBox>
                </FooterBottom>
            </StyledFooter>
        </>
    )
}