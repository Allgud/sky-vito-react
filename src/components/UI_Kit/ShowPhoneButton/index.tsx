import * as S from './styles'

type PhoneNumder = {
    phone: string
}

const ShowPhoneButton = ({phone}:PhoneNumder) => {
    return (
        <S.ShowPhoneButton>
            Показать телефон
            <S.ShowPhoneButtonSpan>{phone}</S.ShowPhoneButtonSpan>
        </S.ShowPhoneButton>
    )
}

export default ShowPhoneButton