import '../css/rankingBrand.css';
import React, { useEffect, useState } from 'react';
import { PiBookmarkSimpleThin } from "react-icons/pi";
import { rankingBrandInfo } from '../types/rankingTypes';
import { fetchRankingBrandData } from '../services/rankingBrandService';
import { rankingBrandData } from '../data/rankingDummyData';

const RankingBrand: React.FC = () => {

    const [rankingList, setRankingList] = useState<rankingBrandInfo[]>([]);

    async function handleRankingBrand() {
        const productData = await fetchRankingBrandData();
        if (productData === "no") {
            // console.log("더미데이터 들어옴");
            setRankingList(rankingBrandData);
        }else {
            console.log("정상적으로 데이터 들어옴");
            setRankingList(productData);
        }
    } 
    useEffect(() => {
        handleRankingBrand();
    }, [])

    // arrow
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        console.log('prev clicked', currentIndex); // 디버깅을 위한 로그
        if (rankingList[currentIndex] && (rankingList[currentIndex].imgs || []).length > 0) {
            setCurrentIndex(prevIndex => {
                const newIndex = Math.max(prevIndex - 1, 0);
                console.log('new prevIndex', newIndex); // 새로운 인덱스 확인
                return newIndex;
            });
        }
    };

    const handleNext = () => {
        console.log('next clicked', currentIndex); // 디버깅을 위한 로그
        if (rankingList[currentIndex] && (rankingList[currentIndex].imgs || []).length > 0) {
            setCurrentIndex(prevIndex => {
                const newIndex = Math.min(prevIndex + 1, (rankingList[currentIndex].imgs || []).length - 1);
                console.log('new nextIndex', newIndex); // 새로운 인덱스 확인
                return newIndex;
            });
        }
    };

    return(
        <div className='ranking_brand_container'>
            {rankingList.map((ranking, index) => (
                <div className='ranking_brand_content'>
                    <div className='ranking_brand_info'>
                        <div className='ranking_brand_info_trend'>
                            <div className='ranking_brand_info_trend_rank'>
                                {index+1}
                            </div>
                                {ranking.polarity ? 
                                    <div className='ranking_brand_info_trend_polarity'>
                                        ▲{ranking.porarityNum}
                                    </div>
                                :
                                    <div className='ranking_brand_info_trend_none_polarity'>
                                        ▼{ranking.porarityNum}
                                    </div>
                                }
                        </div>
                        <img src={ranking.logo} className='ranking_brand_info_logo'/>
                        <div className='ranking_brand_info_name'>
                            <div className='ranking_brand_info_name_eng'>
                                {ranking.brandEng}
                                <svg className='ranking_brand_info_name_eng_arrow' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path style={{cursor:"pointer"}} d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className='ranking_brand_info_name_kor'>{ranking.brandKor} · 관심 {ranking.interest}</div>
                        </div>
                        <div className='ranking_brand_info_bookmark'>
                            <PiBookmarkSimpleThin />
                        </div>
                    </div>
                    <div className='ranking_brand_img_container'>
                        
                        <div onClick={handlePrev} className='ranking_brand_img_left_arrow'>
                            &lt;
                        </div>
                        <div className='ranking_brand_img_wrapper'>
                            {ranking.imgs.map((img, index) => (
                                <div className='ranking_brand_img_content' key={index}>
                                    <PiBookmarkSimpleThin className='ranking_brand_img_bookmark' />
                                    <img className='ranking_brand_img' src={img} />
                                </div>
                            ))}
                        </div>
                        <div onClick={handleNext} className='ranking_brand_img_right_arrow'>
                            &gt;
                        </div>

                    </div>
                    <div className='ranking_brand_more_content'>
                        브랜드 더보기
                    </div>
                </div>
            ))}

            <div className='ranking_brand_content'>zxcv</div>
            <div className='ranking_brand_content'>zxcv</div>
            <div className='ranking_brand_content'>zxcv</div>
        </div>
    )
}

export default RankingBrand;