import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/css/signup.module.css";
import { useAppDispatch } from "../../redux/hooks/index";
import { signup } from "../../redux/slices/userSlice";

interface Input {
  userName: string | undefined;
  userEmail: string | undefined;
  userPw: string | undefined;
  userPwConfirm: string | undefined;
}

const Signup = () => {
  const [validationInput, setValidationInput] = useState({
  });

  const [pwSame, setPwSame] = useState<boolean>(true);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPw, setIsPw] = useState<boolean>(false);
  const [isName, setIsName] = useState<boolean>(false);
  const [isBtn, setIsBtn] = useState<boolean>(false)

  const userNameRef: React.LegacyRef<HTMLInputElement> = useRef(null);
  const userPwRef: React.LegacyRef<HTMLInputElement> = useRef(null);
  const userEmailRef: React.LegacyRef<HTMLInputElement> = useRef(null);
  const userPwConfilrmRef: React.LegacyRef<HTMLInputElement> = useRef(null);

  const input: Input = {
    userName: userNameRef.current?.value,
    userEmail: userEmailRef.current?.value,
    userPw: userPwRef.current?.value,
    userPwConfirm: userPwConfilrmRef.current?.value,
  };

  const dispatch = useAppDispatch();

  const handlerChange = (e: any) => {
    setValidationInput({
      ...validationInput,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if(input.userName) {
      setIsName(true)
    }
    return () => {
      setIsName(false)
    }
  }, [input.userName])

  useEffect(() => {
    if (input.userPw !== input.userPwConfirm) {
      setPwSame(false);
    }
    return () => {
      setPwSame(true);
    };
  }, [input.userPw, input.userPwConfirm]);

  useEffect(() => {
    let regex = new RegExp(
      "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    );
    if (regex.test(input.userEmail)) {
      setIsEmail(true);
    }
    return () => {
      setIsEmail(false);
    };
  }, [input.userEmail]);

  useEffect(() => {
    let reg = new RegExp(
     "^[a-zA-Z\\d`~!@#$%^&*()-_=+]{8,24}$"
    );
    if (reg.test(input.userPw)) {
      setIsPw(true);
    }
    return () => {
      setIsPw(false)
    }
  },[input.userPw])

  useEffect(() => {
    if (isName && isEmail && isPw && pwSame) {
      setIsBtn(true)
    }
    return () => {
      setIsBtn(false)
    }
  }, [isName, isEmail, isPw, pwSame])

  const signupSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    console.log(input);
    dispatch(signup(input));
  };

  return (
    <div className={styles.container}>
      <div className={styles.signupFormBox}>
        <form
          className={styles.signupForm}
          onSubmit={signupSubmit}
          name="orderForm"
        >
          <fieldset className={styles.signupFormFieldset}>
            <legend className={styles.signupFormTitle}>회원가입</legend>
            <div className={styles.name}>
              <input
                className={styles.nameInput}
                type="text"
                name="name"
                placeholder="이름 2자 이상"
                autoComplete="off"
                ref={userNameRef}
                onChange={handlerChange}
              />
            </div>
            {isName ? null : <span>이름을 입력해주세요.</span>}
            <div className={styles.email}>
              <input
                className={styles.emailInput}
                type="text"
                name="email"
                placeholder="test@email.com"
                autoComplete="off"
                ref={userEmailRef}
                onChange={handlerChange}
              />
            </div>
            {isEmail ? null : <span>유효한 이메일 주소가 아닙니다.</span>}
            <div className={styles.Pw}>
              <input
                className={styles.pwInput}
                type="password"
                name="password"
                placeholder="최소8자, 하나 이상의 문자, 하나의 숫자 및 하나의 특수 문자"
                autoComplete="off"
                ref={userPwRef}
                onChange={handlerChange}
              />
            </div>
            {isPw ? null : <span>유효한 비밀번호 양식이 아닙니다.</span>}
            <div className={styles.PwConfirm}>
              <input
                className={styles.PwConfirmInput}
                type="password"
                name="passwordConfirm"
                placeholder="비밀번호 확인"
                autoComplete="off"
                ref={userPwConfilrmRef}
                onChange={handlerChange}
              />
            </div>
            {pwSame ? null : <span>비밀번호가 일치하지 않습니다.</span>}
            {isBtn ? <input
              className={styles.signupDone}
              type="submit"
              value="가입완료!"
            /> : <input
            className={styles.signupDone}
            type="submit"
            value="양식에 맞춰 진행해주세용!"
            disabled
          />}
            
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Signup;
