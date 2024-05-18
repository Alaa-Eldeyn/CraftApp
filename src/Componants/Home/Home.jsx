import { Link, NavLink } from 'react-router-dom';
import img1 from '../../Assets/images/Group 15.png'
import img2 from '../../Assets/images/Group 2.png'
import img3 from '../../Assets/images/ai.png'
import img4 from '../../Assets/images/first-logo.png';

import img5 from '../../Assets/images/Facebook - Negative.png';
import img6 from '../../Assets/images/twitter.png';
import img7 from '../../Assets/images/instagram.png';

import style from '../Home/Home.module.css'
import { Fade } from "react-awesome-reveal";

export default function Home(){

    return <>

        <div className={style.body}>
            <section className='pt-5 mt-5'>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-xl-6 col-lg-7 col-md-6 px-md-1 px-lg-5">
                            <Fade direction="down">
                            <div className="text">
                                <h2 className={style.head}>Elevate your style with <span className={style.span}>unique </span>personalized outfits</h2>
                                <p  className={style.content}>Transform your style with "Custom Craft", 
                                    using advanced design tools and AI features 
                                    to turn ordinary outfits into personalized 
                                    masterpieces.
                                </p>
                            </div>
                            </Fade>
                        </div>
                        <div className="col-xl-6 col-lg-5 col-md-6 px-md-1 px-lg-5">
                            <Fade direction="up" >
                            <div className="img">
                                <img src={img1} className='w-100' alt="back ground"  />
                            </div>
                            </Fade>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className={`mt-5 ${style.section}`}>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-xl-6 col-lg-5 col-md-6 px-md-1 px-lg-5">
                    <Fade direction="right" >
                        <div className="img d-flex justify-content-center">
                            <img src={img2} className='w-md-75 w-100 p-5 ' alt="back ground"  />
                        </div>
                    </Fade>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-6 px-md-1 px-lg-5">
                        <div className={style.sec2}>
                        <Fade direction="left"  >
                            <h2 className={style.head}>Create Your moment</h2>
                        </Fade>
                        <Fade delay={350} direction="down"  >
                            <p  className={style.content}>Effortlessly personalize your wardrobe with “Custom Craft” design tools, tailoring your style to reflect your unique taste, while transforming ideas into captivating visuals using our AI image generator for 
                            a personalized and immersive creative experience
                            </p>
                        </Fade>
                            <Fade direction="up" delay={400}>
                                <button type="button" className='btnn cursor  px-5  mb-5' >
                                    <Link to="customize" className='text-decoration-none colorBtn'>Customize Now</Link>
                                </button>
                            </Fade>
                        </div>
                    </div>
                    
                </div>
            </div>
            </section>

            <section className='my-5 ' >
            <div className="container d-flex justify-content-center align-items-center" style={{height:'500px'}}>
                <div className="row d-flex justify-content-between align-items-center ">
                    <div className="col-xl-6  col-md-7 px-md-1  ps-lg-5 ">
                        <div className="text">
                            <Fade direction='right' delay={200}>
                            <h2 className={style.head2}>AI 'Search for Similar'</h2>
                            </Fade>
                            <Fade direction='down' delay={350}>
                            <p  className={style.content}>Discover personalized styles effortlessly with our AI-driven 'Search for Similar' feature in [Custom Craft], 
                            enhancing your outfit customization experience.
                            </p>
                            </Fade>
                        </div>
                    </div>
                    <div className=" col-md-5 offset-lg-1 col-lg-4 ">
                        <Fade direction='up' delay={2*200}>
                        <div className="img d-flex justify-content-center">
                            <img src={img3} className='w-75  ' alt="back ground"  />
                        </div>
                        </Fade>
                    </div>
                    
                </div>
            </div>
            </section>

            <section className={` ${style.footer} ${style.section} d-md-flex justify-content-between align-items-center`}>
                <div className="container">
                <div className="row d-md-flex justify-content-center align-items-center">
                    <div className="col-md-4 ">
                        <div className="img">
                            <img src={img4}  alt="back ground"  />
                        </div>
                    </div>

                    <div className="col-md-4 ">
                        <div className="text">
                        <ul className={style.list} style={{listStyle:"none"}}>
                            <li className="nav-item ">
                            <NavLink className="nav-link " aria-current="page" to="">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link " to="/customize" >Customize</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link " to="/login" >Login</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link " to="contact" >Contact Us</NavLink>
                            </li>
                        </ul>
                        </div>
                    </div>

                    <div className="col-md-4 ">
                        <div className="text">
                        <ul className=" d-flex justify-content-end align-items-center m-0" style={{listStyle:"none"}}>
                            <li className="nav-item ">
                            <Link className="nav-link mx-3" aria-current="page" to="">
                                <img src={img5} alt="icon" />
                            </Link>
                            </li>
                            <li className="nav-item mx-3">
                            <Link className="nav-link" to="" >
                                <img src={img6} alt="icon" />
                            </Link>
                            </li>
                            <li className="nav-item mx-3">
                            <Link className="nav-link" to="" >
                                <img src={img7} alt="icon" />
                            </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            </section>

        </div>
    </>
}