import * as S from './styles'
import Logo from '../Logo'
import MainButton from '../UI_Kit/MainButton'
import { useState, ChangeEvent } from 'react'
import { useDebounce } from '../../hooks/useDebounce'

const SearchBox = () => {
    const [text, setText] = useState('')
    const debounced = useDebounce(() => console.log(text))

    const handleChange = (evt:ChangeEvent<HTMLInputElement>) => {
        const { value } = evt.target
        debounced(value)
        setText(value)
    } 

    return (
        <S.SearchContent>
            <Logo />
            <S.SearchForm>
                <S.SearchInput
                    value={text} 
                    placeholder="Поиск по объявлениям"
                    onChange={handleChange}
                />
                <MainButton title="Найти"/>
            </S.SearchForm>
        </S.SearchContent>
    )
}

export default SearchBox