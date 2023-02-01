import * as S from './styles'
import MainButton from '../../components/UI_Kit/MainButton'
import PageTitle from '../../components/PageTitle'
import PageMenu from '../../components/PageMenu'
import CardsBlock from '../../components/CardsBlock'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { ProfileFormValues } from '../../types'
import { updateUserData } from '../../store/slices/userSlice'

const UserProfile = () => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector(state => state.user)
    const { register, handleSubmit, setValue } = useForm<ProfileFormValues>()

    const onFormSubmit:SubmitHandler<ProfileFormValues> = (data) => {
        dispatch(updateUserData(data))
    }

    useEffect(() => {
        if(user) {
            setValue("name", user.name)
            setValue("surname", user.surname)
            setValue("city", user.city)
            setValue("phone", user.phone)
        }
    }, [user])

    return (
        <S.ProfileContainer>
            <S.ProfileCenterBlock>
                <PageMenu />
                <PageTitle title={`Здравствуйте, ${user?.name}!`}/>
                <S.ProfileBlock>
                    <S.ProfileContent>
                        <S.ProfileContentTitle>Настройки профиля</S.ProfileContentTitle>
                        <S.ProfileSettings>
                            <S.SettingsLeft>
                                <S.ProfileImage>
                                    <S.ProfileImageImg />
                                </S.ProfileImage>
                                <S.ChangeImgBtnLabel
                                    htmlFor='change-user-pic'
                                >
                                    Заменить
                                    <S.ChangeImgButton
                                    name='change-user-pic'
                                    type='file' 
                                />  
                                </S.ChangeImgBtnLabel>
                            </S.SettingsLeft>
                            <S.SettingsRight>
                                <S.SettingsForm onSubmit={handleSubmit(onFormSubmit)}>
                                    <S.SettingsDiv>
                                        <S.SettingsInputLabel
                                            htmlFor="name"
                                        >
                                            Имя
                                        </S.SettingsInputLabel>
                                        <S.SettingsInput 
                                            {...register("name")}
                                        />
                                    </S.SettingsDiv>
                                    <S.SettingsDiv>
                                        <S.SettingsInputLabel
                                            htmlFor="surname"
                                        >
                                            Фамилия
                                        </S.SettingsInputLabel>
                                        <S.SettingsInput 
                                            {...register('surname')}
                                        />
                                    </S.SettingsDiv>
                                    <S.SettingsDiv>
                                        <S.SettingsInputLabel
                                            htmlFor="city"
                                        >
                                            Город
                                        </S.SettingsInputLabel>
                                        <S.SettingsInput 
                                            {...register('city')}
                                        />
                                    </S.SettingsDiv>
                                    <S.SettingsDiv>
                                        <S.SettingsInputLabel
                                            htmlFor="phone"
                                        >
                                            Телефон
                                        </S.SettingsInputLabel>
                                        <S.PhoneSettingsInput 
                                            {...register('phone')}
                                        />
                                    </S.SettingsDiv>
                                    <MainButton title="Сохранить" />
                                </S.SettingsForm>
                            </S.SettingsRight>
                        </S.ProfileSettings>
                    </S.ProfileContent>
                </S.ProfileBlock>
            </S.ProfileCenterBlock>
            <CardsBlock title="Мои товары"/>
        </S.ProfileContainer>
    )
}

export default UserProfile