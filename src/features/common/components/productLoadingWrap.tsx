import '../css/productLoadingWrap.css';
import React, { useEffect, useState } from 'react';
import Product from './product';
import { productInfo } from '../types/commonTypes';
import { productLoadingProps } from '../types/commonTypes';
import { fetchRecommendData } from '../../home/services/homeRecommendService';
import { recommendData } from '../data/commonDummyData';

const ProductLoadingWrap: React.FC<productLoadingProps> = ({ select }) => {

    const [productList, setProductList] = useState<productInfo[]>([]);
    const [loading, setLoading] = useState<boolean>(false);  // 로딩 상태
    const [productListCount, setProductListCount] = useState<number>(15);  // 보여줄 제품 개수
    const [allDataLoaded, setAllDataLoaded] = useState<boolean>(false);  // 모든 데이터 로드 여부

    // Recommend 정보
    async function handleRecommend() {
        try {
            const productData = await fetchRecommendData();
            if (productData === "no") {
                setProductList(recommendData);  // 더미 데이터 사용
            } else {
                setProductList(productData);
            }
        } catch (error) {
            console.error("데이터 로드 오류:", error);
            setProductList(recommendData);  // 에러 발생 시 더미 데이터 사용
        }
    } 


    useEffect(() => {
        if (select === "home") {
            handleRecommend();
        }
    }, [])

    // 스크롤 이벤트 처리
    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        // 페이지 끝에 도달했는지 확인
        if (scrollTop + clientHeight >= scrollHeight - 450 && !loading && !allDataLoaded) {
            console.log('스크롤 끝에 도달했습니다!');  // 콘솔 로그 추가
            loadMoreProducts();
        }
    };

    // 15개씩 추가로 로딩
    const loadMoreProducts = () => {
        setLoading(true);  // 로딩 시작
        setTimeout(() => {  // 1초 후에 더 로딩
            setProductListCount(prevCount => {
                if (productListCount >= productList.length) {
                    setAllDataLoaded(true);  // 모든 데이터가 로드되었을 때
                    setLoading(false);  // 로딩 끝
                    return prevCount;  // 더 이상 데이터 로딩하지 않음
                }
                setLoading(false);  // 로딩 끝
                return prevCount + 15;  // 15개씩 추가
            });
        }, 1000);  // 1초 딜레이 후 추가 로딩
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loading, allDataLoaded, productList]);

    return(
        <div>
            <div className='recommend_wrap_container'>
                {productList.slice(0, productListCount).map((product, index) => (
                    <Product key={index} product={product}/>
                ))}
            </div>
            {loading && !allDataLoaded &&   
                <div className='recommend_wrap_loading_content'>
                    <div className="recommend_wrap_loading"></div> 
                </div>
            }
        </div>
    )
}

export default ProductLoadingWrap;