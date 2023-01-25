import SearchBox from "../../components/SearchBox"
import PageTitle from "../../components/PageTitle"
import GoodCard from "../../components/GoodCard"
import Modal from '../../components/Modal'
import SignIn from "../../components/Modals/SignIn"
import * as S from './styles'
import useModal from "../../hooks/useModal"

const MainPage = () => {
    const { active } = useModal()

    return (
        <>
            <SearchBox />
            <S.MainContainer>
                <PageTitle title="Объявления" />
                <S.MainContent>
                    <S.ContentCards>
                        <GoodCard 
                            imgUrl=""
                            title="Ракетка для большого тенниса Triumph Pro ST"
                            price="2 200 ₽"
                            place="Санкт Петербург"
                            date="Сегодня в 10:45"
                        />
                    </S.ContentCards>
                </S.MainContent>
            </S.MainContainer>
        </>  
    )
}

export default MainPage