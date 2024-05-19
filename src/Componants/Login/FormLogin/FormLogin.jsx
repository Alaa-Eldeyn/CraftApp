import style from '../../Register/FormRegisteration/FormRegisteration.module.css';
import image2 from '../../../Assets/images/first-logo.png'
import image3 from '../../../Assets/images/google.png'
import image4 from '../../../Assets/images/facebook.png'
import { Link , useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useContext, useState } from 'react';
import { userToken } from '../../../Context/TokenContext';

export default function FormLogin() {
    let {setToken}= useContext(userToken) 
    
  let [Msg , setMsg]= useState("")
  let [Loading , setLoading]= useState(false)
  let nav = useNavigate()

    let validation = Yup.object({
        email : Yup.string().email('Email is invalid').required('Email is required'),
        password :Yup.string().matches(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/ , 'At least 8 chars, mix case, digits, & symbols').required('Password is required'),
    
    })

    async function login(values) {
        setLoading(true);
          let { data } = await axios.post(`http://customcrafttt.somee.com/api/Account/login`, values)
          .catch((error)=>{
                setMsg("Your email or password is invalid")
                setLoading(false)})
        if (data.email === values.email )  {
                nav('/')
                setLoading(false)
                localStorage.setItem('UserToken', data.token)
                setToken(data.token)
        console.log(data);
      }

}
    let formik = useFormik({
        initialValues : {
            email :'',
            password:'',
            rememberMe: true
        }, validationSchema : validation,
        onSubmit : login
    })

    
    return <>
        <div className=" col-md-6  ">
            <div className="box ">
                <div className={`form p-5`}>

                <img src={image2} className='w-50 ' alt="logo"  />
                <h1 className={`${style.header} colorText`}>Welcome Back! </h1>
                <span className={`${style.span} borderColor`}>Login to continue</span>

                <form onSubmit={formik.handleSubmit}>
                    {Msg === "" ? "" : <div className="alert alert-danger mt-3 py-2">{Msg}</div>}
            
                    <div className={`${style.labeled} mt-3`}>
                        
                        <input className= {formik.errors.email && formik.touched.email ? `${style.inputs} ${style.invalid} mb-2 `:`${style.inputs}  mb-2 `} type="email" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} placeholder='Email'  />
                        <i class="fa-regular fa-envelope"></i>
                        
                    </div>
                    {formik.errors.email && formik.touched.email ? <p className='redColor text-start'> {formik.errors.email}</p> :'' }
            

                    <div className={style.labeled}>
                        <input className= {formik.errors.password && formik.touched.password ? `${style.inputs} ${style.invalid} mb-2 `:`${style.inputs}  mb-2 `} type="password" name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} placeholder='Password'  />
                    </div>
                    {formik.errors.password && formik.touched.password ? <p className='redColor text-start'> {formik.errors.password}</p> :'' }
            
                    
                    <div className="rememberd d-flex justify-content-between">
                        <div className="content">
                            <input type="checkbox" id="remember" name="remember" value={formik.values.rememberMe}/>
                            <label htmlFor="remember" className='ms-1 cursor'>Remember me</label>
                        </div>
                    
                    <Link className={`redColor text-decoration-none`} to='/forget'>Forgot Password?</Link>
                    </div>
                    
                    {Loading ? <button type="button" className={`${style.inputs} ${style.button} my-4`}  >
                        <i className="fa-solid fa-spinner fa-spin "></i>
                    </button> : <button className={`${style.inputs} ${style.button} my-4`} type="submit">Login</button>
                }
                            
                </form>

                
                <div className="hint">
                    <p className='mb-0'>Don’t have an account? <Link className={style.link} to='/register'>Sign up</Link></p>
                </div>
                </div>
            </div>
        </div>

    </>;
}