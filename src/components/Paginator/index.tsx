import { SyntheticEvent, useEffect, useState } from 'react'
import * as S from './styles'
import { createPaginationRow } from '../../helpers'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { switchPage } from '../../store/slices/adsSlice'

const Paginator = () => {
    const [activePage, setActivePage] = useState(1)
    const [array, setArray] = useState<number[]>([])
    const [disabledBack, setDisabledBack] = useState(true)
    const [disabledForward, setDisabledForward] = useState(false)
    const { allGoods } = useAppSelector(state => state.ads)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const pagin = createPaginationRow(allGoods.length)
        setArray(pagin)
    }, [allGoods])

    useEffect(() => {
        if (activePage === 1) {
            setDisabledBack(true)
        } else {
            setDisabledBack(false)
        }

        if (activePage === array.length) {
            setDisabledForward(true)
        } else {
            setDisabledForward(false)
        }
        dispatch(switchPage(activePage))
    }, [activePage])

    const clickHandler = (evt: SyntheticEvent) => {
        const target = (evt.target as HTMLElement).innerText
        if (target === ">" && activePage < array.length) {
            setActivePage(prev => prev + 1)
            return
        }

        if (target === "<" && activePage !== 1) {
            setActivePage(prev => prev - 1)
            return
        }

        if (target !== ">" && target !== "<") {
            setActivePage(Number(target))
            return
        }
    }

    return (
        <S.PaginationBlock>
            <S.PaginationItemsBlock onClick={(evt) => clickHandler(evt)}>
                <S.PaginationArrow $disabled={disabledBack}>&lt;</S.PaginationArrow>
                {
                    array.map(el => (
                        <S.PaginationItem
                            key={el}
                            $active={activePage === el}
                        >
                            {el}
                        </S.PaginationItem>
                    ))
                }
                <S.PaginationArrow $disabled={disabledForward}>&gt;</S.PaginationArrow>
            </S.PaginationItemsBlock>
        </S.PaginationBlock>
    )
}

export default Paginator