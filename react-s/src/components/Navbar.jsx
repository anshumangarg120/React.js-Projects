import React from 'react'

function Navbar({allData}) {
  return (
    <div className='w-full px-20 py-3 flex justify-between items-center'>
      <h3>Orange</h3>
      <div className='flex p-2 bg-orange-600 text-white px-4 roounded-md text-sm gap-3 '>
        <h3>Favourite</h3>
        <h4>{allData.filter(item => item.added).length}</h4>
      </div>
    </div>
  )
}

export default Navbar
