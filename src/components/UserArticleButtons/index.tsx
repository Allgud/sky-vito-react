import * as S from './styles'
import MainButton from '../UI_Kit/MainButton'

const UserArticleButtons = () => {
    return (
        <S.ButtonBox>
            <MainButton title="Редактировать" />
            <MainButton title="Снять с публикации" />
        </S.ButtonBox>
    )
}

export default UserArticleButtons