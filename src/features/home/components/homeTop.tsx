import React from 'react';
import './../css/homeTop.css';

const HomeTop: React.FC = () => {
    return (
        <div className='home_top_container'>
            <div className='home_top_first_subject_content'>프로젝트G/R</div>
            <div>추천</div>
            <div>랭킹</div>
            <div>럭셔리</div>
            <div>남성</div>
            <div>여성</div>
            <div>발견</div>
            <div>이벤트</div>
        </div>
    )
}

export default HomeTop;