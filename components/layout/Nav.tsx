import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import styels from '../../styles/css/nav.module.css'
import  PersonIcon from '@mui/icons-material/Person';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/configureStore';

const Nav = () => {

    const ifLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

    return (
    <div className={styels.container}>
        <div className={styels.logo}>
            <Link href="/">여름일기</Link>
        </div>
        <div className={styels.navContents}>
            <div className={styels.cate0}>
                <ul className={styels.navSearch}>
                    <li className={styels.searchBar}><input className={styels.searchBarInput} type='search'
                            placeholder='검색' /></li>
                    <li className={styels.searchIcon}><button className={styels.searchIconBtn}>
                            <SearchIcon /></button></li>
                </ul>
                <ul className={styels.gnb}>
                    <li className={styels.navLogin}>
                        { ifLoggedIn ?
                        <Link href='/Loginout'>로그인</Link> :
                        <Link href='/Main'>로그아웃</Link>}
                    </li>
                    <li className={styels.navSignUp}>
                        <Link href='/signup'>회원가입</Link>
                    </li>
                    <li className={styels.sc}>고객센터</li>
                    <li className={styels.cu}>문의하기</li>
                    <li className={styels.mp}>
                        <PersonIcon />
                    </li>
                    <li className={styels.mc}>
                        <ShoppingCartCheckoutIcon />
                    </li>
                    <li className={styels.ml}>
                        <FavoriteBorderIcon />
                    </li>
                    <li className={styels.ms}>
                        <StarBorderIcon />
                    </li>
                </ul>
            </div>
            <div className={styels.cate1}>
                <ul className={styels.cate1Left}>
                    <li className={styels.navMenu}>
                        <MenuIcon />
                    </li>
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
                    <li className={styels.plusView}>
                        <AddIcon />
                    </li>
                </ul>
            </div>
        </div>

    </div>
    )
}

export default Nav