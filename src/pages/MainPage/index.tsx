import { useEffect } from "react"
import { getAllAds } from "../../store/slices/adsSlice"
import { useAppSelector } from "../../hooks/useAppSelector"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import SearchBox from "../../components/SearchBox"
import PageTitle from "../../components/PageTitle"
import GoodCard from "../../components/GoodCard"
import * as S from './styles'
import { dateFormatter } from "../../constants/dateFormatter"
import { ucFirst } from "../../constants/ucFirst"
import { createLink } from "../../constants/createLink"

const MainPage = () => {
    const { allGoods } = useAppSelector(state => state.ads)
    const dispatch = useAppDispatch()

    useEffect(() => {
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
                            allGoods.map(good => {
                                return (
                                    <GoodCard
                                        key={good.id} 
                                        title={ucFirst(good.title)}
                                        price={good.price}
                                        date={dateFormatter(good.created_on)}
                                        place={good.user.city}
                                        imgUrl={createLink(good.images)}
                                />
                                )
                            })
                        }
                    </S.ContentCards>
                </S.MainContent>
            </S.MainContainer>
        </>  
    )
}

export default MainPage