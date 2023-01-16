import * as S from './styles'
import logo1 from '../../assets/img/icon_01.png'
import logo2 from '../../assets/img/icon_02.png'
import logo3 from '../../assets/img/icon_03.png'

const Footer = () => {
    return (
        <S.Footer>
            <S.FooterContainer>
                <S.FooterImage>
                    <S.FooterImageImg src={logo1}/>
                </S.FooterImage>
                <S.FooterImage>
                    <S.FooterImageImg src={logo2}/>
                </S.FooterImage>
                <S.FooterImage>
                    <S.FooterImageImg src={logo3}/>
                </S.FooterImage>
            </S.FooterContainer>
        </S.Footer>
    )
}

export default Footer