import React from 'react';
import './Oneway.css';
import mimi from './mimi.png';

function Oneway() {
    const originalPrice = 25.00;
    const salePrice = 15.00;
    const discountPercentage = ((originalPrice - salePrice) / originalPrice) * 100;

    return (
        <div>
            <img src={mimi} alt='mimi' className='mimiglass' />
            <div className='contenant'>
                <p className='title-brand'>BOHOBYMIA</p>
                <p className='title-item'>Copie de <br /> Coffee_Arty</p>
                <p className='price'>
                    <span className='original-price'>{`${originalPrice.toFixed(2)} CAD`}</span>
                    <span className='sale-price'>{`${salePrice.toFixed(2)} CAD`}</span>
                </p>
                <p className='discount'>{`-${discountPercentage.toFixed(0)}%`}</p>
                <button className='buy'>BUY</button>
            </div>
        </div>
    );
}

export default Oneway;
