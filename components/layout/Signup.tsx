import React, { useState, useEffect, useRef } from 'react'
import styles from '../../styles/css/signup.module.css'
import { useAppDispatch } from '../../redux/hooks/index'
import { signup } from '../../redux/slices/userSlice'

const Signup = () => {

    // const [userData, setUserData] = useState<UserData>({
    //     userName: '',
    //     userEmail: '',
    //     userPw: '',
    //     userPwConfirm: '',
    //     pwError: false
    // })
    
    const [userName, setUserName] = useState<string>('');
    const [userEmail, setUserEmail] = useState<string>('');
    const [userPw, setUserPw] = useState<string>('');
    const [userPwConfirm, setUserPwConfirm] = useState<string>('');
    const [pwError, setPwError] = useState<boolean>(false);

    const userNameRef: any = useRef();
    const userPwRef: any = useRef();
    const userEmailRef: any = useRef();

    const dispatch = useAppDispatch();
     
    useEffect(() => {
        if (userPw !== userPwConfirm) {
            setPwError(true);
        }
        return () => {
          setPwError(false);
        };
    }, [userPw, userPwConfirm]);


    const signupSubmit = (e: any) => {
        console.log(e)
        e.preventDefault();
        dispatch(signup(e))
    }


return (
<div className={styles.container}>
    <div className={styles.signupFormBox}>
        <form className={styles.signupForm} onSubmit={signupSubmit} name='orderForm'>
            <fieldset className={styles.signupFormFieldset}>
                <legend className={styles.signupFormTitle}>회원가입</legend>
                <div className={styles.name}>
                    <input className={styles.nameInput} onChange={e => {setUserName(e.target.value)}} type='text' name='name' placeholder='이름' autoComplete='off' ref={userNameRef} />
                </div>
                <div className={styles.email}>
                    <input className={styles.emailInput} onChange={e => {setUserEmail(e.target.value)}} type='text' name='email' placeholder='이메일'
                        autoComplete='off' ref={userEmailRef}/>
                </div>
                <div className={styles.Pw}>
                    <input className={styles.pwInput} onChange={e => {setUserPw(e.target.value)}} type='password' name='password' placeholder='비밀번호'
                        autoComplete='off' ref={userPwRef}/>
                </div>
                <div className={styles.PwConfirm}>
                    <input className={styles.PwConfirmInput} onChange={e => {setUserPwConfirm(e.target.value)}} type='password' name='passwordConfirm' placeholder='비밀번호 확인'
                        autoComplete='off' />
                </div>
                {pwError && (<span>비밀번호가 일치하지 않습니다.</span>)}
                <input className={styles.signupDone} type='submit' value='가입완료!' />
            </fieldset>
        </form>
    </div>
</div>

)
}

export default Signup