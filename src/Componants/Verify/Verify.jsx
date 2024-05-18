import style from '../Verify/Verify.module.css';
import image1 from '../../Assets/images/verify.png'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


export default function Verify() {
  return <>
  <div className="container">
    <div className="row py-5 d-flex justify-content-center  align-items-center">
      <div className="offset-lg-1 d-none d-sm-none  d-md-block col-md-5  ">
        <img src={image1} alt="background " className={style.image} />
      </div>


      <div className=" col-md-6 mt-5 ">
        <div className={ `${ style.box} p-5`}>
            <h1 className={style.header}>Verify Your Email </h1>
            <p className={style.paragraph}>Please enter your 4 digit code that sent to your email address</p>

            <div className="cards mb-2 px-5 d-flex justify-content-center">
                <div className={style.card}></div>
                <div className={style.card}></div>
                <div className={style.card}></div>
                <div className={style.card}></div>

            </div>

            <button className={`${style.inputs} ${style.button} my-4`} type="submit">Send</button>
            
            <p className={style.paragraph2}>Didn’t receive a code? <Link to='' className={style.link}>Resend</Link></p>
            <p className={style.paragraph3}>Go Back to <Link to=''className={style.link}>Log In Page</Link> </p>
        </div>
      </div>
    </div>
  </div>
  </>
  ;
}