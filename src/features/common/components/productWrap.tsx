import '../css/productWrap.css';
import React, { useEffect, useState } from 'react';
import Product from './product';
import { productWrapProps } from '../types/commonTypes';
import { productInfo } from '../types/commonTypes';
import { fetchJustDroppedData } from '../../home/services/homeJustDroppedService';
import { fetchMostPopularData } from '../../home/services/homeMostPopularService';
import { fetchNewInData } from '../../home/services/homeNewInService';
import { fetchMufflerData } from '../../home/services/homeMufflerService';
import { fetchOutdoorData } from '../../home/services/homeOutdoorService';
import { fetchPeachesData } from '../../home/services/homePeachesService';
import { fetchBlrLeebokData } from '../../home/services/homeBlrLeebokService';
import { fetchWinterData } from '../../home/services/homeWinterService';
import { justDroppedData } from '../data/commonDummyData';
import { mostPopularData } from '../data/commonDummyData';
import { newInData } from '../data/commonDummyData';
import { mufflerData } from '../data/commonDummyData';
import { outdoorData } from '../data/commonDummyData';
import { peachesData } from '../data/commonDummyData';
import { blrLeebokData } from '../data/commonDummyData';
import { winterData } from '../data/commonDummyData';

const ProductWrap: React.FC<productWrapProps> = ({ productCategory }) => {

    const [productList, setProductList] = useState<productInfo[]>([]);
    
    useEffect(() => {
        if (productCategory === "justDropped") {
            handleJustDropped();
        }
        if (productCategory === "mostPopular") {
            handleMostPopular();
        }
        if (productCategory === "newIn") {
            handleNewIn();
        }
        if (productCategory === "muffler") {
            handleMuffler();
        }
        if (productCategory === "outdoor") {
            handleOutdoor();
        }
        if (productCategory === "peaches") {
            handlePeaches();
        }
        if (productCategory === "blrLeebok") {
            handleBlrLeebok();
        }
        if (productCategory === "winter") {
            handleWinter();
        }
    }, [productCategory]);
    
    // JustDropped 정보
    async function handleJustDropped() {
        const productData = await fetchJustDroppedData();
        if (productData === "no") {
            // console.log("더미데이터 들어옴");
            setProductList(justDroppedData);
        }else {
            console.log("정상적으로 데이터 들어옴");
            setProductList(productData);
        }
    }    
    // MostPopular 정보
    async function handleMostPopular() {
        const productData = await fetchMostPopularData();
        if (productData === "no") {
            // console.log("더미데이터 들어옴");
            setProductList(mostPopularData);
        }else {
            console.log("정상적으로 데이터 들어옴");
            setProductList(productData);
        }
    }  
    // NewIn 정보
    async function handleNewIn() {
        const productData = await fetchNewInData();
        if (productData === "no") {
            // console.log("더미데이터 들어옴");
            setProductList(newInData);
        }else {
            console.log("정상적으로 데이터 들어옴");
            setProductList(productData);
        }
    }  
    // muffler 정보
    async function handleMuffler() {
        const productData = await fetchMufflerData();
        if (productData === "no") {
            // console.log("더미데이터 들어옴");
            setProductList(mufflerData);
        }else {
            console.log("정상적으로 데이터 들어옴");
            setProductList(productData);
        }
    }  
    // outdoor 정보
    async function handleOutdoor() {
        const productData = await fetchOutdoorData();
        if (productData === "no") {
            // console.log("더미데이터 들어옴");
            setProductList(outdoorData);
        }else {
            console.log("정상적으로 데이터 들어옴");
            setProductList(productData);
        }
    }
    // peaches 정보
    async function handleBlrLeebok() {
        const productData = await fetchBlrLeebokData();
        if (productData === "no") {
            // console.log("더미데이터 들어옴");
            setProductList(blrLeebokData);
        }else {
            console.log("정상적으로 데이터 들어옴");
            setProductList(productData);
        }
    }
    // blrLeebok 정보
    async function handlePeaches() {
        const productData = await fetchPeachesData();
        if (productData === "no") {
            // console.log("더미데이터 들어옴");
            setProductList(peachesData);
        }else {
            console.log("정상적으로 데이터 들어옴");
            setProductList(productData);
        }
    }
    // winter 정보
    async function handleWinter() {
        const productData = await fetchWinterData();
        if (productData === "no") {
            // console.log("더미데이터 들어옴");
            setProductList(winterData);
        }else {
            console.log("정상적으로 데이터 들어옴");
            setProductList(productData);
        }
    }
    


    // 더보기 버튼
    const [productListCount, setProductListCount] = useState<number>(5);

    const handleProductListMore = () => {
        setProductListCount(prevCount => prevCount + 5);
    };

    return(
        <div>
            <div className='product_wrap_container'>
                {productList.slice(0, productListCount).map((product, index) => (
                    <Product product={product} key={index}/> 
                ))}
            </div>
            {productListCount < productList.length && (
                <div className='product_wrap_btn_content' onClick={handleProductListMore}>
                    더보기
                </div>
            )}
        </div>
    )
}

export default ProductWrap;