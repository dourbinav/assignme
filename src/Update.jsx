import React from 'react'
import { useFormik } from 'formik'

export default function Update() {
     
    const initialvalues = {
        description:'',
        Status:'',
        Deadline:''
    }

    const formik =useFormik({
        initialValues:initialvalues,
    onSubmit :values =>(
        console.log("submitted values",values)
    )})
    
  return (
    <div className=' bg-bg h-screen flex flex-col justify-center items-center'>
    <div className='  m-4'>
      <form onSubmit={formik.handleSubmit} className='bg-bg border-4 flex justify-center flex-col  border-slate-300 shadow-md shadow-slate-100 p-10 space-y-2 '>
        <p className='text-white'>Title</p>
        <input type='text' className='outline-indigo-400 '  />
        <p className='text-white'>Deadline</p>
        <input type='date' onChange={formik.handleChange} className='outline-indigo-400  '  />
        <p className='text-white'>Status</p>
        <input type='text' onChange={formik.handleChange} className='outline-indigo-400  '  />
        <p className='text-white'>Description:</p>
        <textarea rows="3" cols="25" className='outline-indigo-400  '  />
        <button  className='bg-white p-2 rounded-md font-bold '>Submit</button>
      </form>
  </div>
  
</div>
  )
}
