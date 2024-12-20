import './../../css/home/homePeaches.css';
import React from 'react';
import ProductWrap from '../productWrap';
import { productType } from '@features/home/types/homeTypes';

const HomePeaches: React.FC = () => {

    const productCategory: productType = "peaches";

    return(
        <div className='home_peaches_container'>
            <div className='home_peaches_title'>Peaches 24FW</div>
            <div className='home_peaches_serve_title'>KREAM 단독 드랍</div>
            <ProductWrap productCategory={productCategory} />
        </div>
    )
}

export default HomePeaches;