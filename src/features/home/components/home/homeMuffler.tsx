import './../../css/home/homeMuffler.css';
import React from 'react';
import ProductWrap from '../productWrap';
import { productType } from '@features/home/types/homeTypes';

const HomeMuffler: React.FC = () => {

    const productCategory: productType = "muffler";

    return(
        <div className='home_muffler_container'>
            <div className='home_muffler_title'>모헤어 목도리로 포근함 UP</div>
            <div className='home_muffler_serve_title'>지금 가장 핫한 목도리</div>
            <ProductWrap productCategory={productCategory} />
        </div>
    )
}

export default HomeMuffler;