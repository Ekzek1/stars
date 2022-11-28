import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';
import './stars.css'

const Stars = ({count}) => {

  if(count === 0 ){
    return null
  }

  let stack = []
  for(let i = 1; i <= count; i++){
    if(count >= 1 && count <= 5){
      stack.push(i);
    }else{
      return null
    }
  }

  return (
    <ul className='card-body-stars'>
      {
        stack.map((item) => 
          <Star key={item}/>
        )
      }
    </ul>
  )
}

Stars.propTypes = {
  count: PropTypes.number.isRequired
}

export default Stars