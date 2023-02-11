import * as S from './styles'

type ModalButtonProps = {
    handler: () => void
}
 
const CloseModalButton = ({handler}:ModalButtonProps) => {
    return (
        <S.ModalBtnClose onClick={handler}>
            <S.ModalBtnCloseLine />
        </S.ModalBtnClose>
    );
}
 
export default CloseModalButton;