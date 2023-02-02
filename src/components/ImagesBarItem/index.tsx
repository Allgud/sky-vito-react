import * as S from './styles'

type ImagesBarItemProps = {
    imgUrl?: string
}
 
const ImagesBarItem = ({imgUrl}:ImagesBarItemProps) => {
    return ( 
        <S.ImagesBarItem>
            <S.ImagesBarItemImg src={imgUrl} />
        </S.ImagesBarItem>
     );
}
 
export default ImagesBarItem;