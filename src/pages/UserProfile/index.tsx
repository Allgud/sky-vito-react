import * as S from './styles'
import MainButton from '../../components/UI_Kit/MainButton'
import PageTitle from '../../components/PageTitle'
import PageMenu from '../../components/PageMenu'
import CardsBlock from '../../components/CardsBlock'

const UserProfile = () => {
    return (
        <S.ProfileContainer>
            <S.ProfileCenterBlock>
                <PageMenu />
                <PageTitle title="Здравствуйте, Антон!"/>
                <S.ProfileBlock>
                    <S.ProfileContent>
                        <S.ProfileContentTitle>Настройки профиля</S.ProfileContentTitle>
                        <S.ProfileSettings>
                            <S.SettingsLeft>
                                <S.ProfileImage>
                                    <S.ProfileImageImg />
                                </S.ProfileImage>
                                <S.ChangeImgButton>Заменить</S.ChangeImgButton>
                            </S.SettingsLeft>
                            <S.SettingsRight>
                                <S.SettingsForm>
                                    <S.SettingsDiv>
                                        <S.SettingsInputLabel
                                            htmlFor="fname"
                                        >
                                            Имя
                                        </S.SettingsInputLabel>
                                        <S.SettingsInput 
                                            name="fname"
                                            type="text"
                                            value="Ан"
                                            placeholder=""
                                            onChange={() => {}}
                                        />
                                    </S.SettingsDiv>
                                    <S.SettingsDiv>
                                        <S.SettingsInputLabel
                                            htmlFor="lname"
                                        >
                                            Фамилия
                                        </S.SettingsInputLabel>
                                        <S.SettingsInput 
                                            name="lname"
                                            type="text"
                                            value="Городецкий"
                                            placeholder=""
                                            onChange={() => {}}
                                        />
                                    </S.SettingsDiv>
                                    <S.SettingsDiv>
                                        <S.SettingsInputLabel
                                            htmlFor="city"
                                        >
                                            Город
                                        </S.SettingsInputLabel>
                                        <S.SettingsInput 
                                            name="city"
                                            type="text"
                                            value="Санкт-Петербург"
                                            placeholder=""
                                            onChange={() => {}}
                                        />
                                    </S.SettingsDiv>
                                    <S.SettingsDiv>
                                        <S.SettingsInputLabel
                                            htmlFor="phone"
                                        >
                                            Телефон
                                        </S.SettingsInputLabel>
                                        <S.PhoneSettingsInput 
                                            name="phone"
                                            type="tel"
                                            value="89161234567"
                                            placeholder="+79161234567"
                                            onChange={() => {}}
                                        />
                                    </S.SettingsDiv>
                                    <MainButton title="Сохранить"/>
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