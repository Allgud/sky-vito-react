import { Outlet } from 'react-router-dom'
import Header from '../Header'
import * as S from './styles.js'

const Layout = () => {
    return (
        <S.Wrapper>
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