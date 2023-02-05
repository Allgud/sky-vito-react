import * as S from './styles'
import CloseModalButton from '../../UI_Kit/CloseModalButton';
import useModal from '../../../hooks/useModal';
import PublishButton from '../../UI_Kit/PublishButton';
import { SubmitHandler, useForm } from 'react-hook-form'
import { ComponentTitle, AdsFormProps } from '../../../types';
import NewAdsImageBar from '../../NewAdsImageBar';
import { createNewAds, editAds } from '../../../store/slices/adsSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useEffect } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';

const AddEditArticle = ({ title }: ComponentTitle) => {
    const { register, handleSubmit, setValue } = useForm()
    const { close } = useModal()
    const dispatch = useAppDispatch()
    const { currentGood } = useAppSelector(state => state.ads)

    const onFormSubmit: SubmitHandler<AdsFormProps> = (data) => {
        if (title === "Новое объявление") {
            dispatch(createNewAds(data))
        }

        if (title === "Редактировать объявление") {
            const body = {
                ads_title: data.ads_title,
                text: data.text,
                price: data.price
            }
            if (currentGood) {
                dispatch(editAds({ id: currentGood?.id, body }))
            }
        }
        close()
    }

    useEffect(() => {
        if (title === "Редактировать объявление") {
            setValue("ads_title", currentGood?.title)
            setValue("text", currentGood?.description)
            setValue("price", currentGood?.price)
        }
    }, [])

    return (
        <S.AddEditContent>
            <S.AddEditTitle>{title}</S.AddEditTitle>
            <CloseModalButton handler={close} />
            <S.AddEditForm onSubmit={handleSubmit(onFormSubmit)}>
                <S.FormBlock>
                    <S.FormBlockLabel htmlFor='ads_title'>Название</S.FormBlockLabel>
                    <S.FormBlockInput
                        {...register("ads_title")}
                        placeholder="Введите название"
                        required
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
                    />
                </S.FormBlock>
                <PublishButton />
            </S.AddEditForm>
        </S.AddEditContent>
    )
}

export default AddEditArticle;