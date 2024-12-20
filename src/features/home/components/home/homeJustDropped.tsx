import './../../css/home/homeJustDropped.css';
import React from 'react';
import ProductWrap from '../productWrap';
import { productType } from '@features/home/types/homeTypes';

const HomeJustDropped: React.FC = () => {

    const productCategory: productType = "justDropped";

    return(
        <div className='home_just_dropped_container'>
            <div className='home_just_dropped_title'>Just Dropped</div>
            <div className='home_just_dropped_serve_title'>발매 상품</div>
            <ProductWrap productCategory={productCategory} />
        </div>
    )
}

export default HomeJustDropped;