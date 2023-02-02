import { useEffect } from "react"
import { getAllAds } from "../../store/slices/adsSlice"
import { useAppSelector } from "../../hooks/useAppSelector"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import SearchBox from "../../components/SearchBox"
import PageTitle from "../../components/PageTitle"
import GoodCard from "../../components/GoodCard"
import * as S from './styles'
import { createLink } from "../../helpers"
import { checkIsAuth } from "../../store/slices/userSlice"
import NoDataBlock from "../../components/NoDataBlock"

const MainPage = () => {
    const { appGoods } = useAppSelector(state => state.ads)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(localStorage.getItem('token')) {
            dispatch(checkIsAuth())
        }
        dispatch(getAllAds())
    }, [])

    return (
        <>
            <SearchBox />
            <S.MainContainer>
                <PageTitle title="Объявления" />
                <S.MainContent>
                    <S.ContentCards>
                        {
                            appGoods.length
                            ? appGoods.map(good => (
                                <GoodCard
                                    key={good.id} 
                                    title={good.title}
                                    price={good.price}
                                    date={good.created_on}
                                    place={good.user.city}
                                    imgUrl={createLink(good.images)}
                                    id={good.id}
                                />
                                ))
                            : <NoDataBlock title="Нет совпадений"/>
                        }
                    </S.ContentCards>
                </S.MainContent>
            </S.MainContainer>
        </>  
    )
}

export default MainPage