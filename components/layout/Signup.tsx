import React, { useState, useEffect, useRef } from 'react'
import styles from '../../styles/css/signup.module.css'
import { useAppDispatch } from '../../redux/hooks/index'
import { signup } from '../../redux/slices/userSlice'


const Signup = () => {

    // const [input, setInput] = useState({
    //     userName: '',
    //     userEmail: '',
    //     userPw:'',
    //     userPwConfirm:''
    // })

    // const {userName, userEmail, userPw, userPwConfirm} = input

    // const [userName, setUserName] = useState<string>('');
    // const [userEmail, setUserEmail] = useState<string>('');
    // const [userPw, setUserPw] = useState<string>('');
    // const [userPwConfirm, setUserPwConfirm] = useState<string>('');


    const [pwError, setPwError] = useState<boolean>(false);

    const userNameRef: React.LegacyRef<HTMLInputElement> = useRef(null);
    const userPwRef: React.LegacyRef<HTMLInputElement> = useRef(null);
    const userEmailRef: React.LegacyRef<HTMLInputElement> = useRef(null);
    const userPwConfilrmRef: React.LegacyRef<HTMLInputElement> = useRef(null)

    const dispatch = useAppDispatch();
     
    useEffect(() => {
        if (userPwRef.current?.value !== userPwConfilrmRef.current?.value) {
            setPwError(true);
        }
        return () => {
          setPwError(false);
        };
    }, [userPwRef.current?.value, userPwConfilrmRef.current?.value]);

    const signupSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const input = {
            userName: userNameRef.current?.value,
            userEmail: userEmailRef.current?.value,
            userPw: userPwRef.current?.value,
            userPwConfilrm: userPwConfilrmRef.current?.value,
        }
        console.log(input)
        dispatch(signup(input))
    }


    return (
        <div className={styles.container}>
            <div className={styles.signupFormBox}>
                <form className={styles.signupForm} onSubmit={signupSubmit} name='orderForm'>
                    <fieldset className={styles.signupFormFieldset}>
                        <legend className={styles.signupFormTitle}>????????????</legend>
                        <div className={styles.name}>
                            <input className={styles.nameInput} type='text' name='name' placeholder='??????'
                                autoComplete='off' ref={userNameRef} />
                        </div>
                        <div className={styles.email}>
                            <input className={styles.emailInput} type='text' name='email' placeholder='?????????'
                                autoComplete='off' ref={userEmailRef} />
                        </div>
                        <div className={styles.Pw}>
                            <input className={styles.pwInput} type='password' name='password' placeholder='????????????'
                                autoComplete='off' ref={userPwRef} />
                        </div>
                        <div className={styles.PwConfirm}>
                            <input className={styles.PwConfirmInput} type='password' name='passwordConfirm'
                                placeholder='???????????? ??????' autoComplete='off' ref={userPwConfilrmRef} />
                        </div>
                        {pwError && (<span>??????????????? ???????????? ????????????.</span>)}
                        <input className={styles.signupDone} type='submit' value='????????????!' />
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Signup