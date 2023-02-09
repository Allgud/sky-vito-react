import { useAppSelector } from "../../hooks/useAppSelector"
import SearchBox from "../../components/SearchBox"
import PageTitle from "../../components/PageTitle"
import GoodCard from "../../components/GoodCard"
import * as S from './styles'
import { createLink } from "../../helpers"
import NoDataBlock from "../../components/NoDataBlock"
import Paginator from "../../components/Paginator"

const MainPage = () => {
    const { appGoods } = useAppSelector(state => state.ads)

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
                                : <NoDataBlock title="Нет совпадений" />
                        }
                    </S.ContentCards>
                </S.MainContent>
            </S.MainContainer>
            <Paginator />
        </>
    )
}

export default MainPage