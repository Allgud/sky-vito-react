import * as S from './styles'
import { ChangeEvent, useRef } from 'react'
import { useImgCollector } from '../../../hooks/useImgCollector'
import { useReference } from '../../../hooks/useReference'

const AddPictureButton = () => {
    const { visible, addPicToLocal } = useImgCollector()
    const { inputRef } = useReference()

    const handlePick = () => {
        if (inputRef.current) {
            inputRef.current.click()
        }
    }

    const onAddPicture = (evt: ChangeEvent<HTMLInputElement>) => {
        const images = []
        if (evt.target.files?.length) {
            for (let i = 0; i < evt.target.files.length; i++) {
                const link = URL.createObjectURL(evt.target.files[i])
                images.push(link)
            }
        }
        addPicToLocal(images)
    }

    return (
        <S.AddImageButtonBlock $visible={visible}>
            <S.AddImageButton
                onClick={handlePick}
                type="button"
            />
            <S.AddPictureInput
                type="file"
                ref={inputRef}
                onChange={(evt) => onAddPicture(evt)}
                multiple
            />
        </S.AddImageButtonBlock>
    )
}

export default AddPictureButton