import style from '../FormRegisteration/FormRegisteration.module.css';
import image2 from '../../../Assets/images/first-logo.png'
import img from "../../../Assets/images/confirm.png"
import styled from"../../Confirm/Confirm.module.css"
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';

export default function FormRegisteration() {

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };


  let [Msg , setMsg]= useState("")
  let [Loading , setLoading]= useState(false)

  let validation = Yup.object({
    userName : Yup.string().min(3, 'UserName minLength is 3').max(25 ,'UserName maxLength is 25').required('UserName is required'),
    email : Yup.string().email('Email is invalid').required('Email is required'),
    password :Yup.string().matches(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/ , 'At least 8 chars, mix case, digits, & symbols').required('Password is required'),
    confirmPassword : Yup.string().required(" confirmPassword is required").oneOf([Yup.ref("password")],"confirmPassword is not match")
  })

  async function register(values) {
    setLoading(true);
    try {
      let { data } = await axios.post(`
      http://customcraftttt.somee.com/api/Account/register`, values
      );
      
      console.log(data);
      if (data.email === values.email) {
        toggleModal()
      }
    } catch (error) {
      setMsg(error.response.data.errors[0]);
    } 
    finally {
      setLoading(false);}
    } 


      let formik = useFormik({
        initialValues : {
          userName :'',
          email :'',
          password:'',
          confirmPassword : ''
        }, validationSchema : validation,
        onSubmit : register
      })

    return <>
      <div className=" col-md-6  ">
          <div className={`form p-5`}>
            <img src={image2} className='w-50 ' alt="logo"  />
            <h1 className={style.header}>Sign Up </h1>

              <form  onSubmit={formik.handleSubmit}>
                {Msg == "" ? "" : <div className="alert alert-danger py-2">{Msg} </div>}
                <div >
                    <div className={style.labeled}>
                    <input id='name' className= {formik.errors.userName && formik.touched.userName ? `${style.inputs} ${style.invalid} mb-2 `:`${style.inputs}  mb-2 `} 
                    type="text" name="userName" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.userName} placeholder='User Name'  />
                    <i className="fa-regular fa-user"></i>
                    </div>

                    {formik.errors.userName && formik.touched.userName ? <p className='redColor text-start'> {formik.errors.userName}</p> :'' }
                </div>
                <div >
                    <div className={style.labeled}>
                    <input className= {formik.errors.email && formik.touched.email ? `${style.inputs} ${style.invalid} mb-2 `:`${style.inputs}  mb-2 `} 
                    type="email" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} placeholder='Email'  />
                        <i className="fa-regular fa-envelope"></i>
                    </div>
                    {formik.errors.email && formik.touched.email ? <p className='redColor text-start'> {formik.errors.email}</p> :'' }
                
                </div>
                <div >
                    
                    <div className={style.labeled}>
                      <input className= {formik.errors.password && formik.touched.password ? `${style.inputs} ${style.invalid} mb-2 `:`${style.inputs}  mb-2 `} 
                      type="password" name="password" 
                      onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} placeholder='Password'  />
                    
                    </div>
                    {formik.errors.password && formik.touched.password ? <p className='redColor text-start'> {formik.errors.password}</p> :'' }
                
                </div>
                <div >
                    
                    <div className={style.labeled}>
                    <input className= {formik.errors.confirmPassword && formik.touched.confirmPassword ? `${style.inputs} ${style.invalid} mb-2 `:`${style.inputs}  mb-2 `} 
                    type="password" name="confirmPassword" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.confirmPassword} placeholder='confirmPassword'  />
                    {/* <i class="fa-regular fa-eye"></i> */}
                    </div>
                    {formik.errors.confirmPassword && formik.touched.confirmPassword ? <p className='redColor text-start'> {formik.errors.confirmPassword}</p> :'' }
                
                </div>

                {Loading ? <button type="button" className={`${style.inputs} ${style.button} my-4`}  >
                  <i className="fa-solid fa-spinner fa-spin "></i>
                </button> : <button className={`${style.inputs} ${style.button} cursor my-4`} type="submit" disabled={!(formik.isValid && formik.dirty)}> Sign Up</button>
                }
                
            </form>

              
            <div className="hint">
              <p className='mb-0'>Already have an account ? <Link className={style.link} to="/login">Log in</Link></p>
            </div>
          </div>
      </div>
    <>

      {modal && (
        <div className={styled.modal}>
          <div onClick={toggleModal} className={styled.overlay}></div>
          
          <div className={styled.modalContent}>
            <img src={img} alt="confirm" />
            <h2>Confirm your email address</h2>
            <p style={{color:"#8E8E8E" , fontSize:"18px"}}>
              We sent a confirmation email to <span style={{color:"#5B8F9A"}}>email@gmail.com .</span> check 
              your email and click on the confirmation link to continue
            </p>
            <Link to={"/login"}>
            <button className='btnn px-5' type="button">Login</button>
            </Link>
            
            <div className={styled.closeModal} onClick={toggleModal}>
              X
            </div>
          </div>
        </div>
      )}
    
    </>
    </>
    
}