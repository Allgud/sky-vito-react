import { FormEvent, useEffect, useState } from 'react'
import * as S from './styles'
import Logo from '../Logo'
import MainButton from '../UI_Kit/MainButton'
import { ChangeEvent } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { filterByText } from '../../store/slices/adsSlice'
import { debounce } from '../../helpers'

const SearchBox = () => {
    const [text, setText] = useState('')
    const dispatch = useAppDispatch()

    const debounced = debounce(() => {
        dispatch(filterByText(text))
    })

    const handleChange = (evt:ChangeEvent<HTMLInputElement>) => {
        const { value } = evt.target
        setText(value)
    }

    const handleSubmit = (evt:FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        dispatch(filterByText(text))
    }

    useEffect(() => {
        debounced(text)
    }, [text])

    return (
        <S.SearchContent>
            <Logo />
            <S.SearchForm onSubmit={handleSubmit}>
                <S.SearchInput
                    value={text}
                    placeholder="Поиск по объявлениям"
                    onChange={(evt) => handleChange(evt)}
                />
                <MainButton title="Найти" />
            </S.SearchForm>
        </S.SearchContent>
    )
}

export default SearchBox