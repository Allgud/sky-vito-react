import { Outlet } from 'react-router-dom'
import useModal from '../../hooks/useModal'
import Header from '../Header'
import Modal from '../Modal'
import * as S from './styles.js'

const Layout = () => {
    const { active, currentModal } = useModal()
    return (
        <S.Wrapper $active={active}>
            <S.Container>
                <Header />
                <S.Main>
                    <Outlet />
                    {
                        active && <Modal>{currentModal}</Modal>
                    }
                </S.Main>
            </S.Container>
        </S.Wrapper>
    )
}

export default Layout