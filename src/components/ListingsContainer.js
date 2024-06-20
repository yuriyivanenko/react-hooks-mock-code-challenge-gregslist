import React, { useEffect, useState } from 'react'
import ListingCard from './ListingCard'

function ListingsContainer() {
  const [listings, setListings] = useState(null)

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then((res) => res.json())
      .then((data) => setListings(data))
  }, [])

  if (!listings) return <h1>Loading...</h1>

  return (
    <main>
      <ul className='cards'>
        {listings.map((listing) => {
          return <ListingCard key={`listing-${listing.id}`} listingInfo={listing} />
        })}
      </ul>
    </main>
  )
}

export default ListingsContainer
