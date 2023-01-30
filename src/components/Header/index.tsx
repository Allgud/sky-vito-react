import * as S from './styles'
import HeaderButton from '../UI_Kit/HeaderButton'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useAppSelector'
import { logout } from '../../store/slices/userSlice'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import useModal from '../../hooks/useModal'
import { getCurrentUser } from '../../store/slices/userSlice'

const Header = () => {
    const { isAuth } = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const { getModal } = useModal()

    return (
        <S.Header>
            <S.HeaderNav>
                {
                    isAuth 
                    ? 
                    <>
                        <HeaderButton id="addArt" title="Разместить объявление" action={getModal}/>
                        <Link to="/profile">
                            <HeaderButton id="link" title='Личный кабинет' action={() => dispatch(getCurrentUser())}/>
                        </Link>
                        <Link to="/">
                            <HeaderButton id="logout" title='Выйти' action={() => dispatch(logout())}/> 
                        </Link>  
                    </>
                    : <HeaderButton 
                        id="signin" 
                        title="Вход в личный кабинет"
                        action={getModal}
                    />
                }
            </S.HeaderNav>
        </S.Header>
    )
}

export default Header