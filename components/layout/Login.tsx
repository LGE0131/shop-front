import React, { useState, useEffect, useRef }  from 'react'
import Link from 'next/link';
import styles from '../../styles/css/loginout.module.css'
import { useAppDispatch } from '../../redux/hooks';
import { login, logout } from '../../redux/slices/userSlice' 


const Login = () => {

    const [validationInput, setValidationInput] = useState<Object>({});

    const [isBtn, setIsBtn] = useState<boolean>(false)

    const userPwRef: React.LegacyRef<HTMLInputElement> = useRef(null);
    const userEmailRef: React.LegacyRef<HTMLInputElement> = useRef(null);

    const dispatch = useAppDispatch();

    const input = {
        userEmail: userEmailRef.current?.value,
        userPw: userPwRef.current?.value,
    }

    const loginSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()

        console.log(input)
        dispatch(login(input))
    }

    useEffect(() => {
        if(input.userEmail && input.userPw ) {
            setIsBtn(true)
        }
        return () => {
            setIsBtn(false)
        }
      }, [input.userEmail, input.userPw])


      const handlerChange = (e: any) => {
        setValidationInput({
          ...validationInput,
          [e.target.name]: e.target.value,
        });
      };
    

    return (
        <div className={styles.container}>
            <div className={styles.loginLogo}>LOGIN</div>
            <div className={styles.cntBody}>
                {/* 회원로그인 */}
                <div className={styles.loginFormBox}>
                    <form className={styles.loginForm} onSubmit={loginSubmit} name='loginform' method='post' action='/'>
                        <fieldset className={styles.loginFieldset}>
                            <legend className={styles.memberLoginTitle}>회원로그인</legend>
                            <div className={styles.loginId}>
                                <input className={styles.loginIdInput} type='text' name='id' placeholder='아이디' autoComplete='off' ref={userEmailRef} onChange={handlerChange}/>
                            </div>
                            <div className={styles.loginPw}>
                                <input className={styles.loginPwInput} type='password' name='pw' placeholder='비밀번호' autoComplete='off' ref={userPwRef} onChange={handlerChange}/>
                            </div>
                            <div className={styles.loginCheckBox}>
                                <div className={styles.saveId}>
                                    <input className={styles.saveIdCheckBox} type='checkbox' name='saveId' value='Y'/>
                                    <span className={styles.saveIdText}>아이디 저장</span>
                                </div>
                                <div className={styles.autoLogin}>
                                    <input className={styles.autoLoginCheckBox} type='checkbox' name='autoLogin' value='Y'/>
                                    <span className={styles.autoLoginText}>자동 로그인</span>
                                </div>
                            </div>
                            {isBtn ? <input className={styles.memberLoginBtn} type='submit' value='로그인'/> : <input className={styles.memberLoginBtn} type='submit' value='아이디와 비밀번호를 입력해주세요' disabled/>}
                        </fieldset>
                        <ul className={styles.find}>
                            <li className={styles.findIdPw}>아이디/비밀번호 찾기</li>
                            <li className={styles.signUp}><Link href='/signup'>회원가입</Link></li>
                        </ul>
                    </form>
                    <div className={styles.snsLogin}>
                        <span className={styles.snsLoginText}>SNS 로그인</span>
                        <ul className={styles.snsLoginBtn}>
                            <li className={styles.naverLogin}>Naver</li>
                            <li className={styles.kakaoLogin}><Link href="http://localhost:3051/auth/kakao">KaKao</Link></li>
                            <li className={styles.googleLogin}><Link href="http://localhost:3051/auth/google/callback">Google</Link></li>
                        </ul>
                    </div> 
                </div>
                {/* 비회원 주문조회 */}
                <div className={styles.orderFormBox}>
                    <form className={styles.orderForm} name='orderForm' method='post' action='/'>
                        <fieldset className={styles.orderFormFieldset}>
                            <legend className={styles.orderFormTitle}>비회원 주문조회</legend>
                            <div className={styles.name}>
                                <input className={styles.nameInput} type='text' name='name' placeholder='이름' autoComplete='off'/>
                            </div>
                            <div className={styles.orderNo}>
                                <input className={styles.orderNoInput} type='text' name='orderNo' placeholder='주문번호' autoComplete='off'/>
                            </div>
                            <div className={styles.orderPw}>
                                <input className={styles.orderPwInput} type='password' name='orderPw' placeholder='주문비밀번호' autoComplete='off'/>
                            </div>
                            <input className={styles.orderSearch} type='submit' value='주문조회'/>
                            <input className={styles.findOrderSearch} type='submit' value='주문번호/비밀번호 찾기'/>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login