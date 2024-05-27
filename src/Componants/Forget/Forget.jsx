import style from '../Forget/Forget.module.css';
import image1 from '../../Assets/images/forget.png'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {  useContext, useState } from 'react';
import axios from 'axios';
import styled from"../Confirm/Confirm.module.css"
import img from '../../Assets/images/reset.png'
import { userToken } from '../../Context/TokenContext';
export default function Forget() {
  let [Loading , setLoading]= useState(false)

  let {setToken2 ,setEmail }=useContext(userToken)
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  let validationSchema = Yup.object({
    email : Yup.string().email('Email is invalid').required('Email is required'),
  })


  async function SendToApi  (values) {
    setLoading(true)
    const {data} = await axios.post (`http://customcraftttt.somee.com/api/Account/forgetPassword` , values).catch((error)=>{
      console.log(error);
      setLoading(false)
    })
    toggleModal()
    setToken2(data.token)
    setEmail(data.email)
    // console.log(token2 , email )
    setLoading(false)
    
  }

  let forget = useFormik({
    initialValues :{
      email :""
    },
    validationSchema,
    onSubmit: SendToApi
  })



  return <>
  <div className="container">
    <div className="row py-5 d-flex justify-content-center  align-items-center">
      <div className="offset-lg-1 d-none d-sm-none  d-md-block col-md-5  ">
        <img src={image1} alt="background " className={style.image} />
      </div>


      <div className=" col-md-6  ">
        <div className={ `${ style.box} p-5`}>
            <h1 className={style.header}>Forgot Password? </h1>
            <p className={style.paragraph}>Please enter your email address to receive a verification card</p>

            <form onSubmit={forget.handleSubmit}>
                <div className={style.labeled}>
                  <input className= {forget.errors.email && forget.touched.email ? `${style.inputs} ${style.invalid} mb-2 `:`${style.inputs}  mb-2 `} type="email" name="email" placeholder='Email' value={forget.values.email} onBlur={forget.handleBlur} onChange={forget.handleChange}  />
                  <i className="fa-regular fa-envelope"></i>
                </div>
                {forget.errors.email && forget.touched.email ? <p className='redColor text-start mb-0'> {forget.errors.email}</p> :'' }
                
                {Loading ? <button type="button" className={`${style.inputs} ${style.button} my-4`}  >
                    <i className="fa-solid fa-spinner fa-spin "></i>
                  </button> : <button className={`${style.inputs} ${style.button} cursor my-4`} type="submit" disabled={!(forget.isValid && forget.dirty)}> Send</button>
                }
              </form>

            <p className={`mt-5 ${style.paragraph2}`}>Go Back to <Link to='/login' className={style.link}> Log In Page</Link></p>
            
        
        </div>
      </div>

      {modal && (
        <div className={styled.modal} >
          <div onClick={toggleModal} className={styled.overlay}></div>
          
          <div className={styled.modalContent} style={{width:'600px'}}>
            <img src={img} alt="confirm" />
            <h2>Check your email </h2>
            <p style={{color:"#8E8E8E" , fontSize:"18px"}}>
            We've sent you a link to update your password.
            </p>
            <Link to={"/reset"}>
            <button className='btnn px-5' type="button">Continue</button>
            </Link>
            
            <div className={styled.closeModal} onClick={toggleModal}>
              X
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
  </>
  ;
}