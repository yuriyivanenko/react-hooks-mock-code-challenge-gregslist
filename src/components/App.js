import React, { useState } from 'react'
import Header from './Header'
import Sort from './Sort'
import ListingsContainer from './ListingsContainer'

function App() {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(false)

  const handleSearch = (searchText) => {
    setSearch(searchText)
  }

  return (
    <div className='app'>
      <Header handleSearch={handleSearch} />
      <Sort setSort={setSort} />
      <ListingsContainer search={search} sort={sort} />
    </div>
  )
}

export default App
