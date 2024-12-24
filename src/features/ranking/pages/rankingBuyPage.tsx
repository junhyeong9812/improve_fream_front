import '../css/rankingBuyPage.css';
import React from 'react';
import HomeTop from '../../common/components/top';
import RankingTop from '../../common/components/rankingTop';

const RankingBuyPage: React.FC = () => {
    
    return(
        <div className='ranking_buy_page_container'>
            <HomeTop select="ranking" />
            <RankingTop select="buy" />

        </div>
    )
}

export default RankingBuyPage;