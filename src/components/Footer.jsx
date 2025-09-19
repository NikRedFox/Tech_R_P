import '../styles/Footer.css'

export default function Footer(){
    return(
        <>
            <footer>
                <div class="footer-links-container">
                    <div class="logo-container">
                        <img src="./src/assets/images/global/Logo-TechRP.svg" alt=""/>
                        
                        <p>Se inscreva em nosso site para obter novas nóticias</p>
                        <div class="footer-button-box">
                            <input type="text" placeholder="Seu e-mail"/>
                            <button>Enviar</button>
                            
                        </div>
                    <p>Se inscrevendo, você concorda com nossa Política de Privacidade e concorda em receber atualizações.</p>
                    </div>

                    <div class="footer-links-list">
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

                <div class="footer-footer">
                    <p>© 2025 Tech R&P. All rights reserved.</p>
                    <div class="tos-box">
                        <a href="">Privacy Policy</a>
                        <a href="">Terms of Service</a>
                        <a href="">Cookie Settings</a>
                    </div>           
                </div>
            </footer>
    </>
    )
}