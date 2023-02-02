import * as S from './styles'
import CloseModalButton from '../../UI_Kit/CloseModalButton';
import useModal from '../../../hooks/useModal';
import PublishButton from '../../UI_Kit/PublishButton';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { ComponentTitle } from '../../../types';
import { useState, createContext, SetStateAction } from 'react';
import NewAdsImageBar from '../../NewAdsImageBar';

type AdsFormProps = {
    ads_title: string,
    text: string,
    price: number
}

const AddEditArticle = ({title}:ComponentTitle) => {
    const { register, handleSubmit } = useForm()
    const { close } = useModal()

    const onSubmitForm:SubmitHandler<AdsFormProps> = (data) => {
        console.log(data);
    }

    return (
        <S.AddEditContent>
            <S.AddEditTitle>{title}</S.AddEditTitle>
            <CloseModalButton handler={close}/>
            <S.AddEditForm onSubmit={handleSubmit(onSubmitForm)}>
                <S.FormBlock>
                    <S.FormBlockLabel htmlFor='ads_title'>Название</S.FormBlockLabel>
                    <S.FormBlockInput 
                        {...register("ads_title")}
                        placeholder="Введите название"
                    />
                </S.FormBlock>
                <S.FormBlock>
                    <S.FormBlockLabel htmlFor='text'>Описание</S.FormBlockLabel>
                    <S.FormBlockArea
                        {...register("text")}
                        placeholder="Введите описание"
                    />
                </S.FormBlock>
                <S.FormBlock>
                    <S.ImagesTitle htmlFor='images'>
                        Фотографии товара<S.ImagesTitleSpan>не более 5 фотографий</S.ImagesTitleSpan>
                    </S.ImagesTitle>
                    <NewAdsImageBar /> 
                </S.FormBlock>
                <S.FormBlock>
                    <S.FormBlockLabel htmlFor='price'>Цена</S.FormBlockLabel>
                    <S.FormBlockInputPrice
                       {...register('price')}
                       type="number"
                    />
                </S.FormBlock>
                <PublishButton />
            </S.AddEditForm>
        </S.AddEditContent>
    )
}
 
export default AddEditArticle;