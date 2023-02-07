import * as S from './styles'
import { ChangeEvent, useRef } from 'react'
import { useImgCollector } from '../../../hooks/useImgCollector'

const AddPictureButton = () => {
    const filePicker = useRef<HTMLInputElement>(null)
    const { visible, addPicToLocal, getFiles } = useImgCollector()

    const handlePick = () => {
        if (filePicker.current) {
            filePicker.current.click()
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
        getFiles(evt)
    }

    return (
        <S.AddImageButtonBlock $visible={visible}>
            <S.AddImageButton
                onClick={handlePick}
                type="button"
            />
            <S.AddPictureInput
                type="file"
                ref={filePicker}
                onChange={(evt) => onAddPicture(evt)}
                multiple
            />
        </S.AddImageButtonBlock>
    )
}

export default AddPictureButton