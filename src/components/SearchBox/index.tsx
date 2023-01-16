import * as S from './styles'
import Logo from '../Logo'
import MainButton from '../UI_Kit/MainButton'

const SearchBox = () => {
    return (
        <S.SearchContent>
            <Logo />
            <S.SearchForm>
                <S.SearchInput 
                    placeholder="Поиск по объявлениям"
                />
                <MainButton title="Найти"/>
            </S.SearchForm>
        </S.SearchContent>
    )
}

export default SearchBox