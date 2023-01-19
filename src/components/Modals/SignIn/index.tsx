import * as S from './styles'
import formLogo from '../../../assets/img/logo_modal.png'
import FormButton from '../../UI_Kit/FormButton'

const SignIn = () => {
    const isUser = true

    return(
        <S.FormLogin>
            <S.FormLogo>
                <S.FormLogoImg src={formLogo} />
            </S.FormLogo>
            <S.FormInput placeholder='email'/>
            <S.FormInput placeholder='Пароль'/>
            {
                !isUser && 
                <>
                    <S.FormInput placeholder='Повторите пароль' />
                    <S.FormInput placeholder='Имя (необязательно)' />
                    <S.FormInput placeholder='Фамилия (необязательно)' />
                    <S.FormInput placeholder='Город (необязательно)' />
                </>
            }
            {
                isUser && 
                <FormButton 
                    title='Войти' 
                    id='Enter' 
                />
            }
            <FormButton title='Зарегистрироваться' id={isUser ? 'SignUp' : ''} />
        </S.FormLogin>
    )
}

export default SignIn