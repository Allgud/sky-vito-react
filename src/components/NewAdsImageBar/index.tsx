import { createContext, useEffect, useState } from 'react'
import ImagesBarItem from '../ImagesBarItem'
import AddPictureButton from '../UI_Kit/AddPictureButton'
import * as S from './styles'

const NewAdsImageBar = () => {
    const [images, setImages] = useState<string[]>([])
    const [visible, setVisible] = useState<boolean>(true)

    const addPicToLocal = (link:string) => {
        setImages([...images, link])
    }

    useEffect(() => {
        if(images.length >= import.meta.env.VITE_MAX_IMAGES_COUNT) {
            setVisible(false)
        }
        return () => setVisible(true)
    }, [images])

    return(
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
                <AddPictureButton  
                    visible={visible} 
                    addPreview={addPicToLocal}
                />
            </S.ImagesBarList>
        </S.ImagesBar>
    )
}

export default NewAdsImageBar