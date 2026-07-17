import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import LogoImg from "../../assets/LogoImg.svg";

import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={LogoImg} alt="dt money" />
                <h1>DT Money</h1>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton type="button">
                            Nova transação
                        </NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransactionModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}