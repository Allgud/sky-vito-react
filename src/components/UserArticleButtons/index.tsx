import * as S from './styles'
import MainButton from '../UI_Kit/MainButton'
import { removeAds } from '../../store/slices/userSlice'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { getCurrentsAdsId } from '../../helpers'
import { useLocation, useNavigate } from 'react-router'
import useModal from '../../hooks/useModal'

const UserArticleButtons = () => {
    const dispatch = useAppDispatch()
    const location = useLocation()
    const { getModal } = useModal()
    const navigate = useNavigate()

    const clickHandler = (evt: React.MouseEvent<Element, MouseEvent>) => {
        const btnTitle = evt.target.innerText

        if (btnTitle === "Снять с публикации") {
            dispatch(removeAds(getCurrentsAdsId(location.pathname)))
            navigate('/profile')
            return
        }

        if (btnTitle === "Редактировать") {
            getModal(evt)
        }
    }

    return (
        <S.ButtonBox id="user_article" onClick={(evt) => clickHandler(evt)}>
            <MainButton title="Редактировать" />
            <MainButton title="Снять с публикации" />
        </S.ButtonBox>
    )
}

export default UserArticleButtons