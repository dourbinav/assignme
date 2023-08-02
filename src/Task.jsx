import React from 'react'
import { useNavigate } from 'react-router'
import { useFormik } from 'formik'
import axios from 'axios'
import { useState } from 'react'
import Loading from './Loading'
import { Link } from 'react-router-dom'

export default function Task() {
  

  const navigate=useNavigate()
  const token=localStorage.getItem("token")
  const user=localStorage.getItem('user')
  const [loading,setloading]=useState(false)
  if(!token){
    navigate("/")
  }

  const initialvalues = {
    title:'',
    description:'',
    Status:'',
    Deadline: Date()
}

const formik =useFormik({
    initialValues:initialvalues,
onSubmit :values =>(
    addtask(values)
)})

  function addtask(values){
    setloading(true)
    axios.post("https://latest-xi.vercel.app/task/add",{
      username:user,
      title:values.title,
      deadline: values.deadline,
      status:false,
      description:values.description
    }).then((res)=>{
      setloading(false)
      console.log(res)
    }).catch((err)=>(
      console.log(err)
    ))
  }

  if(loading){
    return <Loading />
  }

  return (
    <div className=' bg-bg h-screen flex flex-col justify-center items-center'>

    <Link to="/tasks"><button  className='max-w-fit bg-white p-2' >Dashboard</button></Link>
        <div className='  m-4'>
          <form onSubmit={formik.handleSubmit} className='bg-bg border-4 flex justify-center flex-col  border-slate-300 shadow-md shadow-slate-100 p-10 space-y-2 '>
            <p className='text-white'>Title</p>
            <input type='text' onChange={formik.handleChange} name='title' className='outline-indigo-400 '  />
            <p className='text-white'>Deadline</p>
            <input type='date' onChange={formik.handleChange} name='Deadline' className='outline-indigo-400  '  />
            <p className='text-white'>Status</p>
            <input type='boolean' onChange={formik.handleChange} name='Status' className='outline-indigo-400  '  />
            <p className='text-white'>Description:</p>
            <textarea rows="3"onChange={formik.handleChange} name='description' cols="25" className='outline-indigo-400  '  />
            <button className='bg-white p-2 rounded-md font-bold '>Submit</button>
          </form>
      </div>
      
    </div>
  )
}
