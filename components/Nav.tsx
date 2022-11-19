import React, {useState, useEffect} from 'react'
import styels from '../styles/css/nav.module.css'
import  PersonIcon from '@mui/icons-material/Person';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddIcon from '@mui/icons-material/Add';

const Nav = () => {
return (
<div className={styels.container}>
    <div className={styels.logo}>여름일기</div>
    <div className={styels.navContents}>
        <div className={styels.cate0}>
            <div className={styels.navSearch}></div>
            <ul className={styels.gnb}>
                <li className={styels.navLogin}>로그인</li>
                <li className={styels.navSignUp}>회원가입</li>
                <li className={styels.sc}>고객센터</li>
                <li className={styels.cu}>문의하기</li>
                <li className={styels.mp}><PersonIcon/></li>
                <li className={styels.mc}><ShoppingCartCheckoutIcon/></li>
                <li className={styels.ml}><FavoriteBorderIcon/></li>
                <li className={styels.ms}><StarBorderIcon/></li>
            </ul>
        </div>
        <div className={styels.cate1}>
            <ul className={styels.cate1Left}>
                <li className={styels.bestItemView}>베스트</li>
                <li className={styels.eventItemView}>이벤트</li>
            </ul>
            <ul className={styels.cate1Right}>
                <li className={styels.freeDeliveryView}>무료배송</li>
                <li className={styels.outerView}>아우터</li>
                <li className={styels.dressView}>원피스</li>
                <li className={styels.knitView}>니트</li>
                <li className={styels.topView}>상의</li>
                <li className={styels.skirtView}>스커트</li>
                <li className={styels.pantsView}>팬츠</li>
                <li className={styels.plusView}><AddIcon/></li>
            </ul>
        </div>
    </div>

</div>
)
}

export default Nav