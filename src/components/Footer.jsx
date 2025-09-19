
import styled from 'styled-components';

const StyledFooter = styled.footer`
    .footer-links-container{
        color: var(--color-neutral-white);
        background-color: var(--color-neutral-black); 
        display:  flex;
        height: 490px;
        padding: 0px 22px;
        justify-content: space-between;
        margin-top: 140px;
    }

    .logo-container{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .logo-container img{
        width: 25%;
    }

    .logo-container p:nth-of-type(2){
        width: 535px;
    }

    .footer-button-box{
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .footer-button-box input{
        width: 342px;
        height: 43px;
        border-radius: 20px;
        padding-left: 20px;
    }

    .footer-button-box button{
        width: 89px;
        height: 43px;
        border-radius: 20px;
    }

    .footer-links-list{
        display: flex;
        gap: 100px;  
        margin-top: 50px;  
        font-size: var(--footer-links2);
    }

    .footer-links-list ul{
        display:  flex;
        flex-direction: column;
        list-style: none;
        gap: 50px;
    }

    .footer-links-list li:nth-of-type(1){
        font-size: var(--footer-links1);
    }
    .footer-links-list a{
        text-decoration: none;
        color: var(--color-neutral-white);
    }

    .footer-footer{
        display: flex;
        color: var(--color-neutral-white);
        background-color: var(--color-neutral-black); 
        justify-content: space-between;
        padding: 5px 22px;
        font-size: var(--footer-links2);
    }

    .tos-box{
        display: flex;
        gap: 23px;    
    }

    .tos-box a{
        text-decoration: none;
        color: var(--color-neutral-white);
    }
`

export default function Footer(){
    return(
        <>
            <StyledFooter>
                <div className="footer-links-container">
                    <div className="logo-container">
                        <img src="./src/assets/images/global/Logo-TechRP.svg" alt=""/>
                        
                        <p>Se inscreva em nosso site para obter novas nóticias</p>
                        <div className="footer-button-box">
                            <input type="text" placeholder="Seu e-mail"/>
                            <button>Enviar</button>
                            
                        </div>
                    <p>Se inscrevendo, você concorda com nossa Política de Privacidade e concorda em receber atualizações.</p>
                    </div>

                    <div className="footer-links-list">
                        <ul>
                            <li>Links Rápidos</li>
                            <li><a href="./src/pages/products.html">Nossos Produtos</a></li>
                            <li><a href="./src/pages/about.html">Sobre nós</a></li>
                            <li><a href="./src/pages/page-contact_us.html">Contato</a></li>
                            <li><a href="./src/pages/descarte-responsavel.html">Descarte Responsavel</a></li>  
                        </ul>

                        <ul>
                            <li>Mídias Sociais</li>
                            <li><img src="./src/assets/images/home/Face-logo.svg" alt=""/><a href=""> Facebook</a></li>
                            <li><img src="./src/assets/images/home/Insta-logo.svg" alt=""/><a href=""> Instagram</a></li>
                            <li><img src="./src/assets/images/home/Twitter-logo.svg" alt=""/><a href=""> Twitter</a></li>
                            <li><img src="./src/assets/images/home/Linkedin-logo.svg" alt=""/><a href=""> Linkedln</a></li>
                        </ul>

                        <ul>
                            <li>Informações Adicionais</li>
                            <li>Endereço: Rua Oscar ,900</li>
                            <li>Email: techrp.suporte@gmail.com</li>                 
                        </ul>
                    </div>
                </div>

                <div className="footer-footer">
                    <p>© 2025 Tech R&P. All rights reserved.</p>
                    <div className="tos-box">
                        <a href="">Privacy Policy</a>
                        <a href="">Terms of Service</a>
                        <a href="">Cookie Settings</a>
                    </div>           
                </div>
            </StyledFooter>
    </>
    )
}