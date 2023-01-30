import * as S from './styles'
import formLogo from '../../../assets/img/logo_modal.png'
import FormButton from '../../UI_Kit/FormButton'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { changeIsUser, createUser, login } from '../../../store/slices/userSlice'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormValues } from '../../../types'
import useModal from '../../../hooks/useModal'

const SignIn = () => {
    const dispatch = useAppDispatch()
    const { close } = useModal()
    const { isUser } = useAppSelector(state => state.user)
    const {handleSubmit, register, reset, formState: {errors}, watch} = useForm<FormValues>()

    const onEventSubmit: SubmitHandler<FormValues> = (data) => {
        if(data.name){
            dispatch(createUser(data))
        } else {
            dispatch(login(data))
            close()
        }

        reset()
    }

    const handleForms = () => {
        dispatch(changeIsUser())
    }

    return(
        <S.FormLogin onSubmit={handleSubmit(onEventSubmit)}>
            <S.FormLogo>
                <S.FormLogoImg src={formLogo} />
            </S.FormLogo>
            <S.FormInput
                {...register("email", {
                    required: "Поле обязательно для заполнения",
                    pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: 'Введите валидный email'
                    }
                })} 
                placeholder='email'
            />
            <S.ErrorMessage>{errors?.email ? errors?.email?.message : ''}</S.ErrorMessage>
            <S.FormInput
                type='password' 
                {...register("password", {
                    required: "Поле обязательно для заполнения",
                    minLength: {
                        value: 4,
                        message: 'Минимум 4 символа'
                    }
                })} 
                placeholder='Пароль'
            />
            <S.ErrorMessage>{errors?.password && errors?.password?.message}</S.ErrorMessage>
            {
                !isUser && 
                <>
                    <S.FormInput 
                        type="password"
                        {...register("confirm_password", {
                            required: "Поле обязательно для заполнения",
                            validate: (val:string | undefined) => {
                                if(watch("password") !== val) {
                                    return 'Пароли долны совпадать'
                                }
                            }
                        })} 
                        placeholder='Повторите пароль' 
                    />
                    <S.ErrorMessage>{errors?.confirm_password && errors?.confirm_password?.message}</S.ErrorMessage>
                    <S.FormInput 
                        {...register("name", {
                            required: "Поле обязательно для заполнения"
                        })} 
                        placeholder='Имя' 
                    />
                    <S.ErrorMessage>{errors?.name && errors?.name?.message}</S.ErrorMessage>
                    <S.FormInput 
                        {...register("surname")} 
                        placeholder='Фамилия' />
                    <S.ErrorMessage></S.ErrorMessage>
                    <S.FormInput 
                        {...register("city", {
                            required: "Поле обязательно для заполнения"
                        })} 
                        placeholder='Город' 
                    />
                    <S.ErrorMessage>{errors?.city && errors?.city?.message}</S.ErrorMessage>
                </>
            }
            {
                isUser  
                ? <>
                    <FormButton title='Войти' id='Enter' handler={() => {}}/>
                    <FormButton title='Зарегистрироваться' id='SignUp' handler={handleForms}/>
                </>
                : <FormButton title='Зарегистрироваться' id='' handler={() => {}}/> 
            }
            
        </S.FormLogin>
    )
}

export default SignIn