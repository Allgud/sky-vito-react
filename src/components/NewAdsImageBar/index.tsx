import ImagesBarItem from '../ImagesBarItem'
import AddPictureButton from '../UI_Kit/AddPictureButton'
import * as S from './styles'
import { useImgCollector } from '../../hooks/useImgCollector'

const NewAdsImageBar = () => {
    const { images } = useImgCollector()

    return (
        <S.ImagesBar>
            <S.ImagesBarList>
                {
                    images.length >= import.meta.env.VITE_MIN_IMAGES_COUNT
                    && images.map((image) => (
                        <ImagesBarItem
                            key={image}
                            imgUrl={image}
                        />
                    ))
                }
                <AddPictureButton />
            </S.ImagesBarList>
        </S.ImagesBar>
    )
}

export default NewAdsImageBar