import * as S from './styles'
import { ComponentTitle } from '../../types'

const NoDataBlock = ({title}:ComponentTitle) => {
    return (
        <S.NoDataDiv>{title}</S.NoDataDiv>
    )
}

export default NoDataBlock