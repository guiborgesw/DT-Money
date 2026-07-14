import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import LogoImg from "../../assets/LogoImg.svg";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={LogoImg} alt="dt money" />
                <h1>DT Money</h1>
                
                <NewTransactionButton type="button">
                    Nova transação
                </NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}