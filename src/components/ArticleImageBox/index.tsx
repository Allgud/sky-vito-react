import { FC, useState } from 'react'
import * as S from './styles'
import { useAppSelector } from '../../hooks/useAppSelector'
import blank from '../../assets/img/no-image.png'

const ArticleImageBox:FC  = () => {
    const [mainImg, setMainImg] = useState(0)
    const { currentGood } = useAppSelector(state => state.ads)
    const images = currentGood?.images

    return (
        <S.ImageBox>
            <S.ImageBoxContent>
                <S.MainImage>
                    <S.Image 
                       src={images?.length ? `${import.meta.env.VITE_API_URL}/${images[mainImg].url}` : blank}
                    />
                </S.MainImage>
                <S.ImageBar>
                    {
                        currentGood?.images.map((image, idx) => (
                            <S.ImageBarItem
                                key={image.id}
                                onClick={() => setMainImg(idx)}
                                $active={mainImg === idx}
                            >
                                <S.Image src={images && `${import.meta.env.VITE_API_URL}/${images[idx].url}`} />
                            </S.ImageBarItem>
                        ))
                    }
                </S.ImageBar>
            </S.ImageBoxContent>
        </S.ImageBox>
    )
}

export default ArticleImageBox