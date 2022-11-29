import React, { useState, useEffect } from 'react'
import styles from '../styles/css/signup.module.css'

const Signup = () => {

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPw, setUserPw] = useState('');
    const [userPwConfirm, setUserPwConfirm] = useState('');

    const [pwError, setPwError] = useState(false);
     
    useEffect(() => {
        if (userPw !== userPwConfirm) {
            setPwError(true);
        }
        return () => {
          setPwError(false);
        };
      }, [userPw, userPwConfirm]);

    const signupSubmit = (e: any) => {
        e.preventDefault();
    }

return (
<div className={styles.container}>
    <div className={styles.signupFormBox}>
        <form className={styles.signupForm} onSubmit={signupSubmit} name='orderForm'>
            <fieldset className={styles.signupFormFieldset}>
                <legend className={styles.signupFormTitle}>회원가입</legend>
                <div className={styles.name}>
                    <input className={styles.nameInput} onChange={e => {setUserName(e.target.value)}} type='text' name='name' placeholder='이름' autoComplete='off' />
                </div>
                <div className={styles.email}>
                    <input className={styles.emailInput} onChange={e => {setUserEmail(e.target.value)}} type='text' name='email' placeholder='이메일'
                        autoComplete='off' />
                </div>
                <div className={styles.Pw}>
                    <input className={styles.pwInput} onChange={e => {setUserPw(e.target.value)}} type='password' name='password' placeholder='비밀번호'
                        autoComplete='off' />
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