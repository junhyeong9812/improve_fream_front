import './../css/loginPage.css';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { SiNaver } from "react-icons/si";
import { FaApple } from "react-icons/fa";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  let [emailValue, setEmailValue] = useState<string>('');
  let [emailWarn, setEmailWarn] = useState<boolean>(true);
  let [emailSuccess, setEmailSuccess] = useState<boolean>(false);

  let [passwordValue, setPasswordValue] = useState<string>('');
  let [passwordWarn, setPasswordWarn] = useState<boolean>(true);
  let [passwordSuccess, setPasswordSuccess] = useState<boolean>(false);

  let [loginBtn, setLoginBtn] = useState<boolean>(false);

  useEffect(() => {
    // 이메일 정규식
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    if (emailValue.length > 0) {
      if (emailRegex.test(emailValue)) {
        setEmailWarn(false);
        console.log("이메일 완성")
      }else{
        setEmailWarn(!emailRegex.test(emailValue));
      }
    }else{
      setEmailWarn(false);
    }

    // 비밀번호 정규식
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>~\-=_+\[\]/])[A-Za-z\d!@#$%^&*(),.?":{}|<>~\-=_+\[\]/]{8,16}$/;
    if (passwordValue.length > 0) {
      if (emailRegex.test(passwordValue)) {
        setPasswordWarn(false);
        console.log("비밀번호 완성");
      }else{
        setPasswordWarn(!passwordRegex.test(passwordValue));
        console.log("비밀번호 미완성")
      }
    }else{
      setPasswordWarn(false);
    }

  }, [emailValue, passwordValue])

  // useEffect(() => {
  //   if ((emailValue.length > 0) && (passwordValue.length > 0)) {
  //       setLoginBtn(true);
  //   }else{
  //       setLoginBtn(false);
  //   }
  // }, [emailValue, passwordValue, loginBtn])

  return (
    <div className='login_form_container'>
      <div className='login_form_content'>
          <div className='login_form_logo_content'>
              <img onClick={() => {navigate('/')}} className='login_form_logo' src={`${process.env.PUBLIC_URL}/img/kream-login-logo.png`}></img>
          </div>
          <div className='login_form_email_input_container'>
              <div className={`login_form_email_input_title ${emailWarn? 'login_form_email_input_title_warn' : ''}`}>이메일 주소</div>
              <input className={`login_form_email_input ${emailWarn? 'login_form_email_input_warn' : ''}`} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailValue(e.target.value)} type='text' placeholder='예) kream@kream.co.kr'></input>
              <div className={`login_form_email_input_bottom ${emailWarn ? 'login_form_email_input_bottom_warn' : ''}`}>{emailWarn ? "이메일 주소를 정확히 입력해주세요." : ""}</div>
          </div>
          <div className='login_form_password_input_container'>
              <div className='login_form_password_input_title'>비밀번호</div>
              <input className='login_form_password_input' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordValue(e.target.value)} type='password' maxLength={16}></input>
              <div className='login_form_password_input_bottom'>영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)</div>
          </div>
          {loginBtn ?
              <div className='login_form_login_btn_container'>
                  로그인
              </div>
          :
              <div className='login_form_login_none_btn_container'>
                  로그인
              </div>
          }
          <div className='login_form_category_container'>
              <div onClick={() => {navigate('/join')}} className='login_form_category1'>
                  이메일 가입
              </div>
              <div className='login_form_category2'>
                  이메일 찾기
              </div>
              <div className='login_form_category3'>
                  비밀번호 찾기
              </div>
          </div>
          <div className='login_form_sns_conatiner'>
              <div className='login_form_sns_content'>
                  <div className='login_form_sns_icon_content'>
                      <SiNaver className='login_form_sns_naver'/>
                  </div>
                  <div className='login_form_sns_text'>
                      네이버로 로그인
                  </div>  
              </div>
              <div className='login_form_sns_content'>
                  <div className='login_form_sns_icon_content'>
                      <FaApple className='login_form_sns_apple'/>
                  </div>
                  <div className='login_form_sns_text'>
                      Apple로 로그인
                  </div>
              </div>
          </div>
      </div>  
    </div>
  );
};

export default LoginPage;
