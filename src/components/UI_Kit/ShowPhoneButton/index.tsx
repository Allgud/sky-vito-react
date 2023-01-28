import { useEffect, useState } from 'react'
import * as S from './styles'

type PhoneNumder = {
    phone: string | null
}

const ShowPhoneButton = ({phone}:PhoneNumder) => {
    const [number, setNumber] = useState('')
    const maskNumber = (phoneString:string):void => {
        const masked = phoneString.slice(0, 6) + 'XXXXXXX'
        setNumber(masked)
    }
    
    useEffect(() => {
        if(phone) {
            maskNumber(phone)
        }
    }, [])

    const showPhone = () => phone && setNumber(phone)

    return (
        <S.ShowPhoneButton onClick={showPhone}>
            Показать телефон
            <S.ShowPhoneButtonSpan>{number}</S.ShowPhoneButtonSpan>
        </S.ShowPhoneButton>
    )
}

export default ShowPhoneButton