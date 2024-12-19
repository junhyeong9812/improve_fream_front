import './../css/advertisement.css';
import React from 'react';

const Advertisement: React.FC = () => {

    return(
        <div className='advertisement_container'>
            <img className='advertisement_content' src={`${process.env.PUBLIC_URL}/advertisement/advertisement1.webp`} />
        </div>
    )
}

export default Advertisement;