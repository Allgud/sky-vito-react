import * as S from './styles'
import HeaderButton from '../UI_Kit/HeaderButton'
import { Link } from 'react-router-dom'

const Header = () => {
    const isAuth = false

    return (
        <S.Header>
            <S.HeaderNav>
                {
                    isAuth 
                    ? 
                    <>
                        <HeaderButton id="addArt" title="Разместить объявление" />
                        <Link to="/profile">
                            <HeaderButton id="link" title='Личный кабинет' />
                        </Link>    
                    </>
                    : <HeaderButton 
                        id="signin" 
                        title="Вход в личный кабинет"
                    />
                }
            </S.HeaderNav>
        </S.Header>
    )
}

export default Header