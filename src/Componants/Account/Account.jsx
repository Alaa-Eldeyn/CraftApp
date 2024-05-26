import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import style from "./AccountForm.module.css";
import img from "../../Assets/images/sent.png"
import styledd from"../Confirm/Confirm.module.css"
import image1 from "../../Assets/images/contact.png"
import { useFormik } from "formik";
import * as Yup from "yup"
import { Link } from "react-router-dom";

const Account = () => {

  const form = useRef();
  let [loading , setLoading]= useState(false)
  let [Msg , setMsg]= useState('')
  const [modal, setModal] = useState(false);
  
  const toggleModal = () => {
    setModal(!modal);
  };

  let validation = Yup.object({
    name : Yup.string().min(3, 'UserName minLength is 3').max(25 ,'UserName maxLength is 25').required('UserName is required'),
    email : Yup.string().email('Email is invalid').required('Email is required'),
    message : Yup.string().min(10, 'Message minLength is 10').max(1000 ,'Message maxLength is 1000').required('Message is required'),

  })

  
  const sendEmail = () => {
    setLoading(true)
    emailjs
      .sendForm(
        "service_r7m9e5t",
        "template_i8x0q7k",
        form.current,
        "S9DhpSU6EAXGEc3Rn"
      )
      .then(
        (result) => {
          setLoading(false)
          toggleModal()
        },
        (error) => {
          setLoading(false)
          setMsg(error.text);
        }
      );
  };
  
  let formik = useFormik({
    initialValues : {
      name :'',
      email :'',
      message:'',
    }, validationSchema : validation,
    onSubmit : sendEmail
  })

  return (
    <>

      <div className="d-flex justify-content-between align-items-center vh-100  ">
        <div  style={{textAlign:"right" , width:"40%"}} className={style.image}>
          <img style={{width:"70%"}} src={image1} alt="background"  />
        </div>

        <div className={`${style.divs} form2 `} >
          <div className={style.margine}>
          <h2 className={`${style.header}  py-2 colorText`}>Contact Us</h2>
                    <p className={`${style.span} borderColor`}>
                      Feel free to contact us any time. we will get
                      back to you as soon as we can </p>
                    
                    <form ref={form} onSubmit={formik.handleSubmit} >
                    {Msg === "" ? "" : <div className="alert alert-danger py-2">{Msg} </div>}

                    <div className={style.labeled}>
                      <input  className= {formik.errors.name && formik.touched.name ? `${style.inputs} ${style.invalid}`:`${style.inputs}`} 
                      type="text" 
                      name="name"   
                      placeholder="User Name" 
                      onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name}/>
                      <i className="fa-regular fa-user"></i>
                    </div>
                    {formik.errors.name && formik.touched.name ? <p className='redColor text-start'> {formik.errors.name}</p> :'' }

                    <div className={style.labeled}>
                      <input className= {formik.errors.email && formik.touched.email ? `${style.inputs} ${style.invalid}`:`${style.inputs}`}   
                      type="email" 
                      name="email" 
                      placeholder="Email"  
                      onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    {formik.errors.email && formik.touched.email ? <p className='redColor text-start'> {formik.errors.email}</p> :'' }

                      <textarea className= {formik.errors.message && formik.touched.message ? `${style.inputs} ${style.invalid} ${style.textarea}`:
                      `${style.inputs}  ${style.textarea}`}   
                      name="message" 
                      placeholder="Type your message here"  
                      onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.message}
                      />
                  {formik.errors.message && formik.touched.message ? <p className='redColor text-start'> {formik.errors.message}</p> :'' }

                  {loading ? <button type="button" className={`${style.inputs} ${style.button} my-4`}  >
                    <i className="fa-solid fa-spinner fa-spin "></i>
                  </button> : <button className={`${style.inputs} ${style.button} cursor my-4`} 
                  type="submit" disabled={!(formik.isValid && formik.dirty)}> Send</button>
                  }
                    </form>
          </div>
        </div>
      </div>



    {modal && (
        <div className={styledd.modal}>
          <div onClick={toggleModal} className={styledd.overlay}></div>
          <div className={styledd.modalContent}>
            <img src={img} alt="confirm" />
            <h2>Thank you for contacting us </h2>
            <p style={{color:"#8E8E8E" , fontSize:"18px"}}>
            We have received your message we will reach you out immediately 
            </p>
            <Link to={"/"}>
            <button className='btnn px-5' type="button">
            <i className="fa-solid fa-arrow-left pe-4"></i>
              Back to Home </button>
            </Link>
            <div className={styledd.closeModal} onClick={toggleModal}>
              X
            </div>
          </div>
        </div>
      )}
      </>

      
  );
};

export default Account;

