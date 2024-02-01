import React from 'react';
import './AdventureCard.css'

const AdventureCard = () => {
  return (
    <div className='adventure_card_container'>

      <img src='https://images.pexels.com/photos/258045/pexels-photo-258045.jpeg'></img>
      <div className='adventure_card_text'>
        <div className='adventure_name_price'>
            <div>Fort Shilbluff</div>
            <div><b>$ 90</b></div>
        </div>
        <div className='adventure_duration'>
            <div>Duration</div>
            <div><b>19 Hours</b></div>
        </div>
      </div>

      <div className='adventure_tag'>
        <span>HillSide</span>
      </div>
    </div>
  )
}

export default AdventureCard
