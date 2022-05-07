import React, { useState } from 'react'
import { FaStar } from "react-icons/fa"

const StarRating = () => {
    const[rating, setRating] = useState(null);
    const[hover, setHover] = useState(null);
  return (
    <div>
        {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;
        
            return (
                <label>
                    <input 
                    type ="radio" 
                    name="rating" 
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}/>
                    <FaStar className="star"
                    color = {ratingValue <= (hover || rating) ? "#ffa500" : "#808080"}  // hover first then rating
                    size={30}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                    />
                </label>
            );          
        })}
        <p><em> Rate This : {rating}</em></p>
       
    </div>
  )
}
export default StarRating;