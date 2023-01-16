import * as S from './styles'
import PageMenu from '../../components/PageMenu'
import PageTitle from '../../components/PageTitle'
import CardsBlock from '../../components/CardsBlock'
import ShowPhoneButton from '../../components/UI_Kit/ShowPhoneButton'

const SellerProfile = () => {
    return(
        <S.SellerProfileCont>
            <S.SellerProfileCenter>
                <PageMenu />
                <PageTitle title="Профиль продавца"/>
                <S.ProfileSell>
                    <S.ProfileSellContent>
                        <S.ProfileSellSeller>
                            <S.SellerLeft>
                                <S.SellerImage>
                                    <S.SellerImageImg />
                                </S.SellerImage>
                            </S.SellerLeft>
                            <S.SellerRight>
                                <S.SellerTitle>Кирилл Матвеев</S.SellerTitle>
                                <S.SellerCity>Санкт-Петербург</S.SellerCity>
                                <S.SellerInfo>Продает товары с августа 2021</S.SellerInfo>
                                <ShowPhoneButton phone="8-925-893-27-89"/>
                            </S.SellerRight>
                        </S.ProfileSellSeller>
                    </S.ProfileSellContent>
                </S.ProfileSell>
            </S.SellerProfileCenter>
            <CardsBlock title='Товары продавца'/>
        </S.SellerProfileCont>
    )
}

export default SellerProfile