import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/css/signup.module.css";
import { useAppDispatch } from "../../redux/hooks/index";
import { signup } from "../../redux/slices/userSlice";

// interface ValidationInput {
//   validUserName: string | undefined;
//   validUserEmail: string | undefined;
//   validUserPw: string | undefined;
//   validUserPwConfirm: string | undefined;
// }

interface Input {
  userName: string | undefined;
  userEmail: string | undefined;
  userPw: string | undefined;
  userPwConfirm: string | undefined;
}

// interface FrontSignupValidation {
//   isEmail: boolean;
//   isPw: boolean;
//   isName: boolean;
//   disabledSignupBtn: boolean;
// }

const Signup = () => {
  const [validationInput, setValidationInput] = useState({
    // validUserName: "",
    // validUserEmail: "",
    // validUserPw: "",
    // validUserPwConfirm: "",
  });

  const [pwSame, setPwSame] = useState<boolean>(false);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPw, setIsPw] = useState<boolean>(false);
  const [isName, setIsName] = useState<boolean>(false);
  const [disabledSignupBtn, setDisabledSignupBtn] = useState<boolean>(false);

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

  //   const frontSignupValidation: FrontSignupValidation = {
  //     isEmail: false,
  //     isPw: false,
  //     isName: false,
  //     disabledSignupBtn: false,
  //   };

  const dispatch = useAppDispatch();

  const handlerChange = (e: any) => {
    setValidationInput({
      ...validationInput,
      [e.target.name]: e.target.value,
    });
    console.log(validationInput);
  };

  useEffect(() => {
    if (input.userPw === input.userPwConfirm) {
      setPwSame(true);
    } else {
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
    } else {
      setIsEmail(false);
    }
    return () => {
      setIsEmail(false);
    };
  }, [input.userEmail]);

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
                placeholder="특수문자, 숫자, 영대소문자 각 3가지 포함 8 ~ 25자"
                autoComplete="off"
                ref={userPwRef}
                onChange={handlerChange}
              />
            </div>
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
            <input
              className={styles.signupDone}
              type="submit"
              value="가입완료!"
              disabled
            />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Signup;
