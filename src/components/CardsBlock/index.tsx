import * as S from './styles'
import GoodCard from '../GoodCard'
import { useLocation, useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { getUserAds } from '../../store/slices/userSlice'
import { createLink } from '../../helpers'
import { Good, ComponentTitle } from '../../types'
import { getSellerGoods } from '../../store/slices/adsSlice'
import NoDataBlock from '../NoDataBlock'

const CardsBlock = ({title}:ComponentTitle) => {
    const [array, setArray] = useState<Good[]>([])
    const location = useLocation()
    const dispatch = useAppDispatch()
    const { userGoods }= useAppSelector(state => state.user)
    const { sellerGoods } = useAppSelector(state => state.ads)
    const params = useParams()

    useEffect(() => {
        if(location.pathname === '/profile') {
            dispatch(getUserAds())
            return
        }

        if(location.pathname.includes('/seller')) {
            dispatch(getSellerGoods(Number(params.id)))
            return
        }
    }, [])
    
    useEffect(() => {
        setArray(userGoods)
    }, [userGoods])

    useEffect(() => {
        setArray(sellerGoods)
    }, [sellerGoods])

    return(
        <>
            <S.BlockTitle>{title}</S.BlockTitle>
            <S.CardsList>
                {
                    array.length 
                        ? array.map(good => (
                            <GoodCard
                                key={good.id} 
                                imgUrl={createLink(good.images)}
                                title={good.title}
                                price={good.price}
                                date={good.created_on}
                                id={good.id}
                                place={good.user.city}
                            />
                          ))
                          : <NoDataBlock title="Пока нет товаров"/>
                }
                         
            </S.CardsList>
        </>
    )
}

export default CardsBlock

