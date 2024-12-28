import '../css/exhibition.css';
import React, { useEffect, useState } from 'react';
import { fetchExhibitionData } from '../services/exhibitionService';
import { exhibitionData } from '../data/exhibitionDummyData';

const Exhibition: React.FC = () => {

    const [exhibitionList, setExhibitionList] = useState([]);

    useEffect(() => {
        handleJustDropped();
    }, [])

    // exhibition 정보
    async function handleJustDropped() {
        const productData = await fetchExhibitionData();
        if (productData === "no") {
            // console.log("더미데이터 들어옴");
            setExhibitionList(exhibitionData);
        }else {
            console.log("정상적으로 데이터 들어옴");
            setExhibitionList(productData);
        }
    }    

    return(
        <div className='exhibition_container'>
            asdf
        </div>
    )
}

export default Exhibition;