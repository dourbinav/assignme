import React from 'react'

export default function TaskTemplate({data}) {
  return (
    <div className='flex justify-center m-10 p-5 bg-red-100'>
        <div className='bg-white text-bg max-w-max rounded-md shadow-md shadow-slate-200 p-4'>
            <p>title:{data.title}</p>
            <p>deadline:{data.deadline}</p>
            <p>Status:{data.status}</p>
            <p>Description:{data.description}</p>
        </div>
    </div>
  )
}
