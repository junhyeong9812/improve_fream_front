import './../../css/home/homeRecommend.css';
import React from 'react';
import RecommendWrap from '../recommendWrap';

const HomeRecommend: React.FC = () => {

    return(
        <div className='home_recommend_container'>
            <div className='home_recommend_title'>회원님을 위한 추천 상품</div>
            <RecommendWrap />
        </div>
    )
}

export default HomeRecommend;