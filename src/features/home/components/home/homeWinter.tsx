import './../../css/home/homeWinter.css';
import React from 'react';
import ProductWrap from '../productWrap';
import { productType } from '@features/home/types/homeTypes';

const HomeWinter: React.FC = () => {

    const productCategory: productType = "winter";

    return(
        <div className='home_winter_container'>
            <div className='home_winter_title'>겨울 잡화 거래 랭킹</div>
            <div className='home_winter_serve_title'>지금 가장 인기 있는 겨울 잡화</div>
            <ProductWrap productCategory={productCategory} />
        </div>
    )
}

export default HomeWinter;