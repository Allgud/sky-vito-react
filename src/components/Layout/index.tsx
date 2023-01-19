import { Outlet } from 'react-router-dom'
import useModal from '../../hooks/useModal'
import Header from '../Header'
import * as S from './styles.js'

const Layout = () => {
    const { active } = useModal()
    return (
        <S.Wrapper $active={active}>
            <S.Container>
                <Header />
                <S.Main>
                    <Outlet />
                </S.Main>
            </S.Container>
        </S.Wrapper>
    )
}

export default Layout