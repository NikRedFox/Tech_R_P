import styled from 'styled-components'
import Logo from '../assets/images/Logo-TechRP-2.svg'
import SearchIcon from '../assets/images/SearchIcon.svg';
import IconWhats from '../assets/images/WhatsIcon.svg'
import LoginIcon from '../assets/images/LoginIcon.svg'
import PerfilIcon from '../assets/images/Perfil.svg'
import InputCustom from '../components/Input'

const StyledHeader = styled.header`
    display: flex;
    background-color: var(--color-neutral-02);
    justify-content: space-around;    
    width: 100%;
    align-items: center;
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 200px;    
`

const HeaderLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const HeaderItems = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;   

    a{
        text-decoration:  none;
        color: var(--color-neutral-01);
        font-size: var(--header-links);
    }
    
`

const LogoIcon = styled.img`
    width: 145px;
    height: 145px;
`

const SearchWrapper = styled.div`
    display: flex;
`

const Button = styled.button`
    display: flex;
    align-items: center;
    width: 60px;
    height: 45px;
    padding: 8px;
    border-radius: 0px 4px 4px 0px;
    background-color: var(--color-secondary-02);
    cursor: pointer;

    img{
        width: 40px;
        height: 40px;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    gap: 30px;
       
`

const ButtonContainer = styled.nav`    
    width: 40px;
    height: 40px;
    
    img{
        width: 100%;
    }
`

export default function Header() {
    return (
        <StyledHeader>
            <HeaderContainer>
                <LogoIcon src={Logo} alt="Logo-Tech-R&P" />

                <HeaderLinks>
                    <HeaderItems>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Quem somos</a></li>
                        <li><a href="/">Produtos</a></li>
                        <li><a href="/">Descarte</a></li>
                    </HeaderItems>

                    <SearchWrapper>
                        <InputCustom 
                            placeholder ="Faça sua pesquisa"
                            width="900px" 
                            height="45px" 
                            fontSize="var(--paragraph-big)" 
                        />
                        <Button width="50px"><img src={SearchIcon} alt="Search-icon" /></Button>
                    </SearchWrapper>
                </HeaderLinks>

                <ButtonWrapper>
                    <ButtonContainer>
                        <a href="/">
                            <img src={PerfilIcon} alt="Perfil-icon" title="Login-icon" />
                        </a>
                    </ButtonContainer>

                    <ButtonContainer>
                        <a href="/">
                            <img src={IconWhats} alt="Whatsapp-icon" title="Whatsapp-icon" />
                        </a>
                    </ButtonContainer>

                    <ButtonContainer>
                        <a href="/">
                            <img src={LoginIcon} alt="Login-icon" title="Login-icon" />
                        </a>
                    </ButtonContainer>
                </ButtonWrapper>

            </HeaderContainer>
        </StyledHeader>
    )
}