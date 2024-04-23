import style from '../Forget/Forget.module.css';
import image1 from '../../Assets/images/forget.png'
import { Link } from 'react-router-dom';


export default function Forget() {
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
            <div className={style.labeled}>
              <input className={`${style.inputs}  my-2`} type="email" name="Email" placeholder='Email'  />
              <i class="fa-regular fa-envelope"></i>
            </div>
            <button className={`${style.inputs} ${style.button} my-4`} type="submit">Send</button>
            

            <p className={`mt-5 ${style.paragraph2}`}>Go Back to <Link to='/login' className={style.link}> Log In Page</Link></p>
            
        
        </div>
      </div>
    </div>
  </div>
  </>
  ;
}