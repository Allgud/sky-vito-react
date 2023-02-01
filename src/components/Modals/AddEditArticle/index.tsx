import * as S from './styles'
import CloseModalButton from '../../UI_Kit/CloseModalButton';
import useModal from '../../../hooks/useModal';
import ImagesBarItem from '../../ImagesBarItem';
import PublishButton from '../../UI_Kit/PublishButton';
import { useForm } from 'react-hook-form'

type I = {
    link: string
}

type AddEditProps = {
    modalTitle: string,
    artTitle?: string, 
    text?: string 
    images?: Array<I>
}
 
const AddEditArticle = ({modalTitle, artTitle, text}:AddEditProps) => {
    const { close } = useModal()

    return (
        <S.AddEditContent>
            <S.AddEditTitle>{modalTitle}</S.AddEditTitle>
            <CloseModalButton handler={close}/>
            <S.AddEditForm>
                <S.FormBlock>
                    <S.FormBlockLabel htmlFor='name'>Название</S.FormBlockLabel>
                    <S.FormBlockInput 
                        name='name'
                        placeholder="Введите название"
                    >
                        {artTitle}
                    </S.FormBlockInput>
                </S.FormBlock>
                <S.FormBlock>
                    <S.FormBlockLabel htmlFor='text'>Описание</S.FormBlockLabel>
                    <S.FormBlockArea
                        name='text'
                        placeholder="Введите описание"
                    >
                        {text}
                    </S.FormBlockArea>
                </S.FormBlock>
                <S.FormBlock>
                    <S.ImagesTitle>
                        Фотографии товара<S.ImagesTitleSpan>не более 5 фотографий</S.ImagesTitleSpan>
                    </S.ImagesTitle>
                    <S.ImagesBar>
                        <ImagesBarItem />
                    </S.ImagesBar>
                </S.FormBlock>
                <S.FormBlock>
                    <S.FormBlockLabel htmlFor='price'>Цена</S.FormBlockLabel>
                    <S.FormBlockInputPrice
                        name='price'
                    ></S.FormBlockInputPrice>
                </S.FormBlock>
                <PublishButton />
            </S.AddEditForm>
        </S.AddEditContent>
    )
}
 
export default AddEditArticle;