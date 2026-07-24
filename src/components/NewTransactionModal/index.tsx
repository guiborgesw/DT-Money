import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>

                <CloseButton>
                    <X />
                </CloseButton>

                <form>
                    <input type="text" placeholder="Descrição" />
                    <input type="Number" placeholder="Preço" />
                    <input type="text" placeholder="Categoria" />

                    <TransactionType>
                        <TransactionTypeButton variant="income" value="income">
                            <ArrowCircleUp />
                            Entrada
                        </TransactionTypeButton>
                        <TransactionTypeButton variant="outcome" value="outcome">
                            <ArrowCircleDown />
                            Saída
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}