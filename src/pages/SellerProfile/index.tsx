import * as S from './styles'
import PageMenu from '../../components/PageMenu'
import PageTitle from '../../components/PageTitle'
import CardsBlock from '../../components/CardsBlock'
import ShowPhoneButton from '../../components/UI_Kit/ShowPhoneButton'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { getCurrentSeller } from '../../store/slices/sellerSlice'
import { sellsFromFormat } from '../../helpers'

const SellerProfile = () => {
    const params = useParams()
    const dispatch = useAppDispatch()
    const { currentSeller } = useAppSelector(state => state.seller)

    useEffect(() => {
        dispatch(getCurrentSeller(Number(params.id)))
    }, [])

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
                                    <S.SellerImageImg src={`${import.meta.env.VITE_API_URL}/${currentSeller.avatar}`} />
                                </S.SellerImage>
                            </S.SellerLeft>
                            <S.SellerRight>
                                <S.SellerTitle>{currentSeller && currentSeller.name}</S.SellerTitle>
                                <S.SellerCity>{currentSeller && currentSeller.city}</S.SellerCity>
                                <S.SellerInfo>Продает товары с {sellsFromFormat(currentSeller.sells_from)}</S.SellerInfo>
                                <ShowPhoneButton phone={currentSeller.phone}/>
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