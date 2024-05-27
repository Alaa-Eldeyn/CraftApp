import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import image1 from "../../Assets/images/password.png"
import { useContext, useState } from 'react';
import style from '../Register/FormRegisteration/FormRegisteration.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { userToken } from '../../Context/TokenContext';

export default function Reset() {


  let nav = useNavigate()
  let [Loading , setLoading]= useState(false)
  let {token2 ,email}= useContext(userToken)
  
  let validation = Yup.object({
    newPassword :Yup.string().matches(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/ , 'At least 8 chars, mix case, digits, & symbols').required('newPassword is required'),
    confirmPassword : Yup.string().required(" confirmPassword is required").oneOf([Yup.ref("newPassword")],"confirmPassword is not match")
  })

  
  async function ChangePass(values) {
    setLoading(true);

    try {
      let { data } = await axios.post(`
      http://customcraftttt.somee.com/api/Account/ResetPassword`, values 
      );
      console.log(data);
      if (data ==="Password Changed") {
        nav("/login")
        
      } 

    } 
    finally {
      setLoading(false);}
    } 

      let formik = useFormik({
        initialValues : {
            newPassword: "",
            confirmPassword: "",
            token: token2,
            email: email
          
        }, validationSchema : validation,
        onSubmit : ChangePass
      })

  return <>
  <div className="container">
    <div className="row py-5 d-flex justify-content-center  align-items-center">

        <div className="  d-none d-sm-none  d-md-block col-md-5">
            <img src={image1} alt="background " className="w-100" />
        </div>

        <div className=" col-md-6  mt-5">
          <div className={`form p-5`}>
            <h1 className={style.header}>Create New Password </h1>
            <p  className={`${style.span} borderColor`} style={{fontSize: "18px"}}>
            Your new password must be different from previously used password  </p>

            <form  onSubmit={formik.handleSubmit}>

                <div >
                    <div className={style.labeled}>
                        <input className= {formik.errors.newPassword && formik.touched.newPassword ? `${style.inputs} ${style.invalid} mb-2 `:`${style.inputs}  mb-2 `} 
                        type="password" name="newPassword" 
                        onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.newPassword} placeholder='newPassword'  />
                    </div>
                    {formik.errors.newPassword && formik.touched.newPassword ? <p className='redColor text-start'> {formik.errors.newPassword}</p> :'' }
                
                </div>
                <div >
                    
                    <div className={style.labeled}>
                    <input className= {formik.errors.confirmPassword && formik.touched.confirmPassword ? `${style.inputs} ${style.invalid} mb-2 `:`${style.inputs}  mb-2 `} 
                    type="password" name="confirmPassword" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.confirmPassword} placeholder='confirmPassword'  />
                    
                    </div>
                    {formik.errors.confirmPassword && formik.touched.confirmPassword ? <p className='redColor text-start'> {formik.errors.confirmPassword}</p> :'' }
                
                </div>

                {Loading ? <button type="button" className={`${style.inputs} ${style.button} my-4`}  >
                  <i className="fa-solid fa-spinner fa-spin "></i>
                </button> : <button className={`${style.inputs} ${style.button} cursor my-4`} type="submit" disabled={!(formik.isValid && formik.dirty)}>Reset Password </button>
                }
                
            </form>

            <div className="hint">
              <p className='mb-0'>Go Back to <Link className={style.link} to="/login">Log In Page</Link></p>
            </div>

          </div>
        </div>

    </div>
  </div>
  </>
  ;
}
