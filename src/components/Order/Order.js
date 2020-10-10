import React from 'react';

import { StyledOrder } from './Order.styled'

import PayPal from '../PayPal/PayPal'

const Order = () => {

    return (
        <StyledOrder>
            <h2>Order</h2>
            <div className='img'>
                <img src={require('../../images/photopackage.png')} alt='diagram of package contents' />
            </div>
            <p>This page is used to order pictures from senior night events.</p>
            <p>There is only one package available, which includes two(2) 8"x10" photos: one group photo and one photo of senior with family.</p>
            <p>The cost is $25.</p>
            <p>Please place your order before the end of the event.</p>
            <p className='address'>Important: Photos will either be given to the team coach or delivered to the billing address.</p>
            <PayPal />
            <p className='questions'>Questions? Email me at <a href="mailto: jake@jakegrella.com">jake@jakegrella.com</a>.</p>
        </StyledOrder>
          );
        }


  
export default Order;