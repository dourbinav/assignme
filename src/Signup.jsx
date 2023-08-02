import React, { useState } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import Loading from "./Loading"
import { useNavigate } from 'react-router';

export default function Signup() {

  const navigate = useNavigate()

  const [loading,setloading] = useState(false)

    const initialvalues = {
        username: "",
        password: "",
        email:""
      };
    
      const formik = useFormik({
        initialValues: initialvalues,
        onSubmit:values => {
          submit(values)
        },
      });


      function submit(values){
        setloading(true);
        axios.post("https://latest-xi.vercel.app/user/signup",{
            username:values.username,
            password:values.password,
            email: values.email
        }).then((data)=>{
            setloading(false)
            navigate("/login")
            console.log(data)
        }).catch((err) => {
            setloading(false)
            console.log(err)
          })
      }

      if(loading){
        return <Loading />
      }


  return (
    <div className='bg-bg flex h-screen justify-center   items-center'>
        <form onSubmit={formik.handleSubmit} className='bg-bg max-w-fit space-y-2 border-2 border-slate-200 p-4 flex flex-col justify-center'>
            <p className='text-white font-semibold'>Username</p>
            <input type='text' 
            name='username'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            required
             className='outine-indigo-500 '  />
            <p className='text-white font-semibold' >Password</p>
            <input type='pwd'
            name='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            required className='outine-indigo-500 '  />
            <p className='text-white font-semibold' >Email</p>
            <input type='email'
            name='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            required className='outine-indigo-500 '  />
            <button
                  type="submit"
                  className="  rounded-sm border-2 border-slate-200  font-semibold text-white"
                >
                  Submit
                </button>
        </form>
    </div>
  )
}
