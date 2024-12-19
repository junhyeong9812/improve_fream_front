import './../../css/home/homeTop.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeTop: React.FC = () => {
    const navigate = useNavigate();

    let [subjectSelect, setSubjectSelect] = useState<string>("추천");

    return (
        <div className='home_top_container'>
            <div className='home_top_content'>
                <div onClick={() => { setSubjectSelect("추천"); navigate("/") }} className={subjectSelect  === "추천" ? 'home_top_first_subject_content' : "home_top_first_subject_none_content"}>추천</div>
                <div onClick={() => { setSubjectSelect("랭킹"); navigate("/ranking") }} className={subjectSelect  === "랭킹" ? 'home_top_subject_content' : "home_top_subject_none_content"}>랭킹</div>
                <div onClick={() => { setSubjectSelect("럭셔리"); navigate("/luxury") }} className={subjectSelect  === "럭셔리" ? 'home_top_subject_content' : "home_top_subject_none_content"}>럭셔리</div>
                <div onClick={() => { setSubjectSelect("남성"); navigate("/men") }} className={subjectSelect  === "남성" ? 'home_top_subject_content' : "home_top_subject_none_content"}>남성</div>
                <div onClick={() => { setSubjectSelect("여성"); navigate("/women") }} className={subjectSelect  === "여성" ? 'home_top_subject_content' : "home_top_subject_none_content"}>여성</div>
                <div onClick={() => { setSubjectSelect("발견"); navigate("/discovery") }} className={subjectSelect  === "발견" ? 'home_top_subject_content' : "home_top_subject_none_content"}>발견</div>
                <div onClick={() => { setSubjectSelect("이벤트트"); navigate("/exhibition") }} className={subjectSelect  === "이벤트" ? 'home_top_subject_content' : "home_top_subject_none_content"}>이벤트</div>
            </div>
        </div>
    )
}

export default HomeTop;