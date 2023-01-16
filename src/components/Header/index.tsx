import * as S from './styles'
import HeaderButton from '../UI_Kit/HeaderButton'

const Header = () => {
    return (
        <S.Header>
            <S.HeaderNav>
                <HeaderButton title="Вход в личный кабинет"/>
            </S.HeaderNav>
        </S.Header>
    )
}

export default Header