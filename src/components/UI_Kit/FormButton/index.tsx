import * as S from './styles'

type FormButtonProps = {
    title: string,
    id: string
}

const FormButton = ({title, id}:FormButtonProps) => {
    return (
        <S.FormButton id={id}>{title}</S.FormButton>
    )
}

export default FormButton