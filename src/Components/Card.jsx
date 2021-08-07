import React from 'react'
import '../Css/Card.css'
import left from '../images/left.png'
import right from '../images/right.png'
export default function Card({side}) {
   
    return (
        <div className='card'>
            <div className='cardContent'>
                <h3 className='cardHead'>Ready for autumn collection</h3>
                <p className='cardText'>Treat yourself to some of our brand new autumn collection - all with the wonderful colours sorroundign you</p>
                <button className='cardButton'>PURCHASE NOW</button>        
             </div>
             <div >
                {side ? <img src={left} alt="" className='cardImage' />: <img src={right} alt="" className='cardImage' />}
             </div>
        </div>
    )
}