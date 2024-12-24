import '../css/rankingPage.css';
import React from "react";
import HomeTop from '../../common/components/top';
import RankingTop from '../../common/components/rankingTop';

const RankingPage: React.FC = () => {

    return(
        <div className='ranking_page_conatainer'>
            <HomeTop select="ranking" />
            <RankingTop select="see" />
            adsf
        </div>
    )
}

export default RankingPage;