import * as S from './styles'
import CloseModalButton from '../../UI_Kit/CloseModalButton';
import useModal from '../../../hooks/useModal';

type I = {
    link: string
}

type AddEditProps = {
    modalTitle: string,
    artTitle: string | undefined,
    text: string | undefined,
    images: Array<I>
}
 
const AddEditArticle = ({modalTitle}:AddEditProps) => {
    const { handleActive } = useModal()

    return (
        <S.AddEditContent>
            <S.AddEditTitle>{modalTitle}</S.AddEditTitle>
            <CloseModalButton handler={handleActive}/>
            <S.AddEditForm></S.AddEditForm>
        </S.AddEditContent>
    )
}
 
export default AddEditArticle;