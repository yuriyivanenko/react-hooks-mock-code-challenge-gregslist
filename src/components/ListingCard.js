import React, { useState } from 'react'

function ListingCard({ listingInfo: { description, image, location } }) {
  const [favorite, setFavorite] = useState(false)
  const handleFavoriteClick = () => setFavorite(!favorite)

  return (
    <li className='card'>
      <div className='image'>
        <span className='price'>$0</span>
        <img src={image} alt={description} />
      </div>
      <div className='details'>
        {favorite ? (
          <button className='emoji-button favorite active' onClick={handleFavoriteClick}>
            ★
          </button>
        ) : (
          <button className='emoji-button favorite' onClick={handleFavoriteClick}>
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className='emoji-button delete'>🗑</button>
      </div>
    </li>
  )
}

export default ListingCard
