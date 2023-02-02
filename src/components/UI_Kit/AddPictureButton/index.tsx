import * as S from './styles'
import { ChangeEvent, useRef } from 'react'

type ButtonProps = {
    addPreview: (args0:string) => void,
    visible: boolean
}

const AddPictureButton = ({addPreview, visible}:ButtonProps) => {
    const filePicker = useRef<HTMLInputElement>(null)

    const handlePick = () => {
        if(filePicker.current) {
            filePicker.current.click()
        }
    }

    const onAddPicture = (evt:ChangeEvent<HTMLInputElement>) => {
       if(evt.target.files?.length) {
        const link = URL.createObjectURL(evt.target.files[0])
        addPreview(link)
       }
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
            />
        </S.AddImageButtonBlock>
    )
}

export default AddPictureButton