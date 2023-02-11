import * as S from './styles'

type FormButtonProps = {
    title: string,
    id: string,
    handler: () => void
}

const FormButton = ({title, id, handler}:FormButtonProps) => {
    return (
        <S.FormButton 
            id={id}
            onClick={handler}
        >
            {title}
        </S.FormButton>
    )
}

export default FormButton