import Logo from '../Logo'
import MainButton from '../UI_Kit/MainButton'
import * as S from './styles'

const PageMenu = () => {
    return (
        <S.PageMenu>
            <Logo />
            <S.ButtonBox to="/">
                <MainButton title="Вернуться на главную"/>
            </S.ButtonBox>
        </S.PageMenu>
    )
}

export default PageMenu