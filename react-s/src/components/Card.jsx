import React from 'react'

function Card({dataBoom, aniClick, indexNumber}) {
  
  const {image, artist, name, added} = dataBoom;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img src={image} alt="Music Image" className="w-full h-48 object-cover"/>
    <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-orange-500">{artist}</div>
        <p className="text-gray-700 text-base mb-4">{name}</p>
        <button onClick={()=>aniClick(indexNumber)} className={` ${added ? "bg-teal-400" : "bg-orange-400" } ${added ? "hover:bg-teal-700" : "hover:bg-orange-700" }  text-white font-bold py-2 px-4 rounded`}>
            {added  ? "Added" : "Add"}
        </button>
    </div>
</div>
  )
}

export default Card
