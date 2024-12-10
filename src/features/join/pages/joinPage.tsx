import './../css/joinPage.css';
import React, { useState } from 'react';

const JoinPage: React.FC = () => {

    const agreementTexts: string[] = ["[필수] 만 14세 이상입니다", "[필수] 이용약관 동의", "[필수] 개인 정보 수집 및 이용 동의", "[선택] 개인 정보 수집 및 이용 동의", "[선택] 광고성 정보 수신 모두 동의"];
    const [agreementCheck1, setAgreementCheck1] = useState<boolean>(false);
    const [agreementCheck2, setAgreementCheck2] = useState<boolean>(false);
    const [agreementCheck3, setAgreementCheck3] = useState<boolean>(false);
    const [agreementCheck4, setAgreementCheck4] = useState<boolean>(false);
    const [agreementCheck5, setAgreementCheck5] = useState<boolean>(false);

    return(
        <div className='signup_form_container'>
            <div className='signup_form_margin_content'>
                <div className='signup_form_content'>
                    <div className='signup_form_title_content'>
                        회원가입
                    </div>

                    <div className='signup_form_email_input_content'>
                        <label className='signup_form_email_input_title'>이메일 주소</label>
                        <br />
                        <input className='signup_form_email_input' placeholder='예) kream@kream.co.kr' type='text'></input>
                    </div>

                    <div className='signup_form_password_input_content'>
                        <label className='signup_form_password_input_title'>비밀번호</label>
                        <br />
                        <input className='signup_form_password_input' placeholder='영문, 숫자, 특수문자 조합 8-16자' type='password'></input>
                    </div>

                    {/* <div className='signup_form_referrer_input_content'>
                        <label className='signup_form_referrer_input_title'>추천인코드</label>
                        <br />
                        <input className='signup_form_referrer_input' placeholder='추천인 코드를 입력하세요' type='text'></input>
                    </div> */}

                    <div className='signup_form_shoes_input_content'>
                        <label className='signup_form_shoes_input_title'>신발 사이즈</label>
                        <br />
                        <input className='signup_form_shoes_input'></input>
                    </div>

                    <div className='signup_form_agreement_input_container'>
                        <div className='signup_form_agreement_input_title_container'>
                            <div className='signup_form_agreement_input_title_checkbox_content'>
                                <input id='check1' className='signup_form_agreement_input_title_checkbox' type='checkbox' />
                                <label htmlFor='check1' className='signup_form_agreement_input_title_checkbox_label' >
                                </label>
                            </div>
                            <div className='signup_form_agreement_input_title_content'>
                                <p className='signup_form_agreement_input_title1'>
                                    모두 동의합니다
                                    <p className='signup_form_agreement_input_title2'>선택 동의 항목 포함</p>
                                </p>
                            </div>
                        </div>
                        {agreementTexts.map((item, index) => (
                            <div className='signup_form_agreement_input_content'>
                                <div className='signup_form_agreement_input_content_check'>
                                    ✔
                                </div>
                                <div className='signup_form_agreement_input_content_text'>
                                    {item}
                                </div>  
                            </div>
                        ))}
                    </div>
                    {

                    }
                    <div className='signup_form_signup_btn_content'>
                        본인 인증하고 가입하기
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinPage;