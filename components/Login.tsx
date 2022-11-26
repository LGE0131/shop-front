import React, { useState, useRef, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import { logIn } from '../actions/user';
import useInput from '../hooks/useInput';
import { RootState } from '../slices/loginSlice';

import styles from '../styles/css/loginout.module.css'

const Login = () => {

    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');
  
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
  
    const isLoading = useSelector((state: RootState) => state.user.isLoading);
    const logInError = useSelector((state: RootState) => state.user.logInError);
    const passwordInput = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
  
    useEffect(() => {
      setPasswordError(false);
      setEmailError(false);
    }, []);
  
    useEffect(() => {
      if (logInError) {
        if (logInError === '이메일 또는 비밀번호가 일치하지 않습니다.') {
          setPasswordError(true);
          passwordInput.current?.focus();
        } else {
          setEmailError(true);
        }
      }
    }, [logInError]);
  
    const onSubmitLogIn = useCallback(
      function (e: any) {
            e.preventDefault();
            dispatch(
                logIn({
                    email,
                    password,
                })
            );
        },
      [email, password, dispatch]
    );

  return (
    <div className={styles.container}>
        <div className={styles.loginLogo}>LOGIN</div>
        <div className={styles.cntBody}>
            {/* 회원로그인 */}
            <div className={styles.loginFormBox}>
                <form className={styles.loginForm} name='loginform' method='post' action='/'>
                    <fieldset className={styles.loginFieldset}>
                        <legend className={styles.memberLoginTitle}>회원로그인</legend>
                        <div className={styles.loginId}>
                            <input className={styles.loginIdInput} value={email} onChange={onChangeEmail} type='text' name='id' placeholder='아이디' autoComplete='off'/>
                        </div>
                        <div className={styles.loginPw}>
                            <input className={styles.loginPwInput} value={password} onChange={onChangePassword} type='text' name='pw' placeholder='비밀번호' autoComplete='off'/>
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
                        {emailError && <span>{logInError}</span>}
                        {passwordError && <span>{logInError}</span>}
                        <input className={styles.memberLoginBtn} type='submit' value='로그인'/>
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
                        <li className={styles.kakaoLogin}>KaKao</li>
                        <li className={styles.googleLogin}>Google</li>
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
                            <input className={styles.orderPwInput} type='text' name='orderPw' placeholder='주문비밀번호' autoComplete='off'/>
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