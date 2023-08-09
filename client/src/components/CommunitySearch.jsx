import React, {useState} from 'react'

const CommunitySearch = () => {
const [search, setSearch] = useState('')
  return (
    <div className='w-full flex flex-col items-start gap-5'>
        <span className='flex items-center justify-center gap-2'><p className='text-[#777] text-sm font-bold'>Search from your generated images.</p>
        </span>
        <div className="h-fit overflow-hidden pl-4 w-full rounded-md shadow-md bg-clip-border flex justify-between items-center">
        <input required value={search && `${search}`} onChange={(e) => setSearch(e.target.value)} placeholder='Eg: Gun' type="text" className='py-3 px-4 text-black bg-white w-full border-none outline-none'/>
        <button className={`${search ? 'bg-black text-white' : 'text-[#777] hover:text-black'} py-3 border-l border-l-[#e6ebf4] px-3`}>Search</button>
        </div>
    </div>
  )
}

export default CommunitySearch