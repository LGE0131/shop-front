import React from 'react'
import styles from '../styles/css/signup.module.css'

const Signup = () => {
    
return (
<div className={styles.container}>
    <div className={styles.signupFormBox}>
        <form className={styles.signupForm} name='orderForm' method='post' action='/'>
            <fieldset className={styles.signupFormFieldset}>
                <legend className={styles.signupFormTitle}>회원가입</legend>
                <div className={styles.name}>
                    <input className={styles.nameInput} type='text' name='name' placeholder='이름' autoComplete='off' />
                </div>
                <div className={styles.email}>
                    <input className={styles.emailInput} type='text' name='orderNo' placeholder='이메일'
                        autoComplete='off' />
                </div>
                <div className={styles.Pw}>
                    <input className={styles.pwInput} type='password' name='orderPw' placeholder='비밀번호'
                        autoComplete='off' />
                </div>
                <div className={styles.PwConfirm}>
                    <input className={styles.PwConfirmInput} type='password' name='orderPw' placeholder='비밀번호 확인'
                        autoComplete='off' />
                </div>
                <input className={styles.signupDone} type='submit' value='가입완료!' />
            </fieldset>
        </form>
    </div>
</div>

)
}

export default Signup